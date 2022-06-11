const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let organizationSchema = new Schema({
    _id: {type: String, default: uuid.v1
    },
    organizationName: {
        type: String,
        required: true
    },
    events: {
        type: Array,
    },
    clients:{
        type: Array,
    },
    workers:{
        type: Array,
    }
     
},
{collection: 'organizations'}
);

module.exports = mongoose.model('organzizations', organizationSchema);

