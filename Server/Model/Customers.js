const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 
 // List of columns for Customer schema
 // This is the schema that is going to be used for the details inside the database in MongoDB
 let Customer = new Schema({
 fullname: {
 type: String
 },
 username: {
 type: String
 },
 email: {
 type: String
 },
 password: {
 type: String
 }
 },{
 collection: 'customers'
 });
 
 module.exports = mongoose.model('Customers', Customer);