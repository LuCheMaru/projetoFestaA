const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const PartySchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String
    },
    partyDate:{
        type: Date
    },
    photos:{
        type: Array
    },
    privacy:{
        type: Boolean
    },
    UserId:{
        type: mongoose.ObjectId
    }
});

const Party = mongoose.model('Party', PasrtySchema);
module.exports = Party;