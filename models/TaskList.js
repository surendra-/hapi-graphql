const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskListSchema = new Schema({
    name: String,
    description: String,
})

module.exports = mongoose.model('TaskList', taskListSchema);