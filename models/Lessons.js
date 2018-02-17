var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var LessonsSchema = new Schema (
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        author: {type: Schema.ObjectId, ref: 'User'}
    }
)




module.exports = mongoose.model('Lesson', LessonsSchema);
