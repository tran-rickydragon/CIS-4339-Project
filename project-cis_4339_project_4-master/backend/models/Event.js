const uuid = require('uuid');
const mongoose = require('mongoose');
const Organization = require('./Organization');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
    _id: {type: String, default: uuid.v1
    },
    eventName: {
        type: String,
        required: true
    },
    eventDate: {
        type: String,
        requried: true
    },
    eventAddress: {
        type: String,
    },
    eventState:{
        type: String,

    },
    eventZip: {
        type: Number,
    },
    timeSpent: {
        type: Number
    },
    workers: {
        type: Array
    },
    eventDescription: {
        type: String,
        required: true
    },
    clients:{
        type: Array,
    },
    organization:{
        type: String,
        required: true
    }
},
{collection: 'event'}
);


module.exports = mongoose.model('event', eventSchema);
