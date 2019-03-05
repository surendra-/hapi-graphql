const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
    name: String,
    city: String
})

module.exports = mongoose.model('Test', testSchema);