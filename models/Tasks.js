const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TasksSchema = new Schema (
    {
        name: {type: String, required: true},
        description: {type: String},
        tests: {type: String},
        lesson: {type: Schema.ObjectId, ref: 'Lessons', required: true}
    }
)


module.exports = mongoose.model('Task', TasksSchema);
