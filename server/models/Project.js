const mongooge = require('mongoose');

const ProjectSchema = new mongooge.Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Not Started', 'In Progress', 'Completed'],
    },
    clientId: {
        type: mongooge.Schema.Types.ObjectId,
        ref: 'Client'
    }
});

module.exports = mongooge.model('Project', ProjectSchema);