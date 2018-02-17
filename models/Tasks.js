var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TasksSchema = new Schema (
    {
        name: {type: String, required: true},
        lesson: {type: Schema.ObjectId, ref: 'Lesson'},
        description: {type: String},
        test: {type: String},
    }
)




module.exports = mongoose.model('Task', TasksSchema);
