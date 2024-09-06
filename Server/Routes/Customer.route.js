// Importing important packages
const express = require('express');
 
// Using express and routes
const app = express();
const customerRoute = express.Router();

// Employee module which is required and imported
let customerModel = require('../Model/Customers');

// To Get List Of Customers
customerRoute.route('/').get(function (req, res) {
customerModel.find(function (err, customer) {
if (err) {
console.log(err);
}
else {
res.json(customer);
}
});
});

/* CODE below was original implementation of the backend, but with employees instead. Once this worked it was only a matter of changing details and parameters */

// To Add New Customer
customerRoute.route('/addEmployee').post(function (req, res) {
let customer = new customerModel(req.body);
customer.save()
.then(game => {
res.status(200).json({ 'employee': 'Customer Added Successfully' });
})
.catch(err => {
res.status(400).send("Something Went Wrong");
});
});

// To Get Customer Details By Employee ID
customerRoute.route('/editCustomer/:id').get(function (req, res) {
let id = req.params.id;
customerModel.findById(id, function (err, customer) {
res.json(customer);
});
});

// To Update The Customer Details
customerRoute.route('/updateCustomer/:id').post(function (req, res) {
customerModel.findById(req.params.id, function (err, customer) {
if (!customer)
return next(new Error('Unable To Find Customer With This Id'));
else {
customer.firstName = req.body.firstName;
customer.lastName = req.body.lastName;
customer.email = req.body.email;
customer.phone = req.body.phone;

customer.save().then(emp => {
res.json('Customer Updated Successfully');
})
.catch(err => {
res.status(400).send("Unable To Update Customer");
});
}
});
});

// To Delete The Employee
customerRoute.route('/deleteCustomer/:id').get(function (req, res) {
customerModel.findByIdAndRemove({ _id: req.params.id }, function (err, customer) {
if (err) res.json(err);
else res.json('Customer Deleted Successfully');
});
});

module.exports = customerRoute;