const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    name: String,
    description: String,
    taskList: { type: Schema.ObjectId, ref:'TaskList'}
})

module.exports = mongoose.model('Task', taskSchema);