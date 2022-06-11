const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//autoIncrement = require('mongoose-auto-increment');
//var conn = mongoose.createConnection("mongodb:")

let clientSchema = new Schema({
    _id: {type: String, default: uuid.v1
    },
    /*
    clientID:{
        type: Schema.Types.ObjectId,
    },
    */
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        requried: true
    },
    phoneNum: {
        type: String,
        required: true
    },
    workNum:{
        type: String
    },
    birthday: {
        type: String,
        required: true 
    },
    SSN: {
        type: String,
        required: true
    },
    driverLicense: {
        type: Number,
        
    },
    language: {
        type: String,
        required: true
    },
    //Dropdown(White/African/Asian/Pacific Islander/Hispanic)
    ethnicity: {
        type: String,
        required: true
    },
    //Dropdown(male/female/prefer not to say)
    gender: {
        type: String,
        required: true
    },
    //Dropdown(some schooling/graduated HS/some college/graduated college/no schooling)
    educationLevel: {
        type: String,
        required: true
    },
    //Dropdown(employed/unemployed, if unemployed how long)
    employmentStatus: {
        type: String,
        required: true
    },
    //Dropdown(married/widowed/divorced/single/separated)
    marriageStatus: {
        type: String,
        required: true
    },
    livingArrangement: {
        type: String,
        requried: true
    },
    address: {
        type: String,
        requried: true
    },
    city: {
        type: String,
        requried: true
    },
    state: {
        type: String,
        requried: true
    },
    zipcode: {
        type: String,
        requried: true
    },
    subsidized: {
        type: Boolean,
        requried: true
    },
    singleParent: {
        type: Boolean,
        requried: true
    },
    headOfHousehold: {
        type: Boolean,
        required: true
    },
    monthlyIncome: {
        type: Number,
        required: true
    },  
    SSI: {
        type: Number,
        requrired: true
    },
    socialSecurity: {
        type: Number,
        required: true
    },
    TANF: {
        type: Number,
        required: true
    },
    foodStamps: {
        type: Boolean,
        required: true
    },
    organization:{
        type: String,
        required: true
    },
    events:{
        type: Array
    }
     
},
{collection: 'client'}
);

//Packages models into an object to export
module.exports = mongoose.model('client', clientSchema);
//const client = mongoose.model('Client', clientSchema); 

//module.exports = {client}
