const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    },
    isLeft: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('notion_app', taskSchema);