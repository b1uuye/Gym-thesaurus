// Imported required packages
const express = require('express'),
path = require('path'),
bodyParser = require('body-parser'), //Adding all the required files and paths here
cors = require('cors'),
mongoose = require('mongoose');
const Customers = require('./Model/Customers');
const bcrypt = require("bcryptjs")
const stripe = require("stripe")("sk_test_51MzPlWLfp0rBpG6On5Q1TMONnCbvfXB4VQQjcIxZy7rGfp8Exk9hFd4l8lvCK9P78QRBdH8pZ6PhOyuCirLpboso004q668TGr")


// MongoDB Databse url
var mongoDatabase = "mongodb+srv://b1uuye:isroni9637QW@gymit.jf97vaw.mongodb.net/?retryWrites=true&w=majority"; //My MongoDB connection. This is not encrytped as errors with .env

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
() => { console.log('Database is connected') },
err => { console.log('There is problem while connecting database ' + err) }
);

const jwt = require("jsonwebtoken")

const JWT_SECRET= "njasdjogjfpndfasj()ndkldnopasn233i4klasdnivdomgko"

//const PUBLISHABLE_KEY = "pk_live_51MzPlWLfp0rBpG6Oetfi3yAKpthuh7nEbEjVyTNQmjuBrzpstx1jBKd981RUAxUkhYT63owBA1uHMQY5ozTUkUX900Mz0gEt8o"


/* All the express routes
const customerRoutes = require('../Routes/Customers.route');*/

// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 4000;

//Register API - Used to add a user to the database and store their information
app.post('/Customers', async(req,res)=>{
    
    console.log('backend is processing')
    if(req.body.password === req.body.confpassword){
        const encryptedPassword = await bcrypt.hash(req.body.password, 10) //this gives an encryption making our passwords on our database more secure
        const users = new Customers({
        username: req.body.username,
        //fullname: req.body.fullname,
        email: req.body.email,
        password: encryptedPassword,
        confpassword: req.body.confpassword
    });
    console.log(req.body)
    const savedUsers = await users.save(); //Puts the details inside the database (Stores)

    

    try{
        
        console.log("gets here")
        console.log("saved"); //Everything is fine 
        res.status(200).json(savedUsers);

    }catch(error){
        console.log('error')
        console.log(error)
       // res.status(404).json({ message: error.message });

    }
    }

    
})

//Login API - Used to check if a user exists and if they do then it checks the password with the encrypted password and then allows them to log in
app.post("/login-user", async(req,res)=>{ //this API allows user to login
    const{ email,password} = req.body;

    const users=await Customers.findOne({email})
    if(!users){
        return res.json({error: "User does not exist"}) //If the email address of the user could not be found then this message is brought out
    }
    console.log(users.password)
    console.log("inputted " + password)
    if(await bcrypt.compare(password,users.password)){
        const token = jwt.sign({}, JWT_SECRET)
        if(res.status(201)){
            return res.json({status: "ok", data: token }) //checks that user details match and if they do returns Token and ok status saying its fine
        }else{
            return res.json({error: "error"})
        }
    }else{
        /*alert("Invalid password")*/
        console.log("Invalid Password")
    return res.json({status: "error", error: "Invalid Password"}) //Is outputted if a user does exist however their password is incorrect
}
})

//Output User Data - This here would take user data from the database and allow it to be used inside the front end "Welcome back 'user' "
app.post("/userData", async(req,res)=>{
    const {token} = req.body
    try {
        const user = jwt.verify(token,JWT_SECRET) //FOR outputting user details to the front part of the page
        const useremail = user.email
        Customers.findOne({email: useremail}).then((data)=>{
            res.send({status: "ok", data: data})
        })
    } catch (error) {
        res.send({status: "error", data: error})
    }
})

//Delete User from DB - This would take a user's email and check if there is one inside the database, then check the password they inputted to confirm that it is them before deletion
app.delete("/userDelete", async(req,res) =>{
    try {
        const{email} = req.body;
        //const customer = await Customers.findByIdAndDelete(id,req.body.email)
        //const users = await Customers.findOneAndDelete({email})
        const users=await Customers.findOne({email})
        console.log("=======================")
        console.log(users)
        console.log(Customers)
        if(!users){
            return res.json({status:"error", data:"Cannot find User"})
        }
        res.status(200).json(users)
    } catch (error) {
        res.send({status: "error", data: error})
    }
})

app.delete("/delete-user-by-email", async(req,res)=>{ //this API allows user to delete a user from the database
    const { email } = req.body;
    try {
        const user = await Customers.findOneAndDelete({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        return res.status(200).json({ status: "ok", message: "User deleted successfully" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
});

//Update User details - This takes a user's email and checks if it is valid. If so they are then able to update their user details such as email or password
app.put("/update-user-email", async (req, res) => {
    try {
      const { email, newEmail } = req.body;
      const customer = await Customers.findOneAndUpdate({ email }, { email: newEmail }, { new: true });
      if (!customer) {
        return res.json({ status: "error", data: "Cannot find User" });
      }
      res.status(200).json(customer);
    } catch (error) {
      res.send({ status: "error", data: error });
    }
  });
  


app.post ("/payment", cors(), async(req,res) =>{//Payment API - This states how much a membership is going to cost and further details
   let {amount,id} = req.body
   try {
    const payment = await stripe.paymentIntents.create({
        amount: 2500,
        currency: "GBP",
        description: "Membership", //Details for the purchase
        payment_method: id,
        confirm: true
    })
    console.log("Payment", payment)
    res.json({
        message: "Payment Successful", //Outcome if the payment details were validated and payment was successful
        success: true
    })

   } catch (error) {
    console.log("Error", error)
    res.json({
        message: "Payment Failed", //Error mesasges if the details were not valid or transaction did not go through
        success: false
    })
   }
})


// Staring our express server
const server = app.listen(port, function () {
console.log('Server Lisening On Port : ' + port);
});


