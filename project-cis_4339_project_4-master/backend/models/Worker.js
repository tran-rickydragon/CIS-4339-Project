const uuid = require('uuid');
const mongoose = require('mongoose');
const Organization = require('./Organization');
const Schema = mongoose.Schema;

let workerSchema = new Schema({
    _id: {type: String, default: uuid.v1
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    organization: {
        type: String,
        required: true
    }
},
{collection: 'worker'}
);

module.exports = mongoose.model('worker', workerSchema)