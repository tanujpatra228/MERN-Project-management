const mongooge = require('mongoose');

const ClientSchema = new mongooge.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    }
});

module.exports = mongooge.model('Client', ClientSchema);