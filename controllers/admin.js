var Lesson = require('../models/Lessons');
var Tasks = require('../models/Tasks');

exports.home = (req, res) => {
    // res.send('hey punk')
    res.render('admin/admin.pug', {})
}
exports.getLessonForm = (req, res) => {
    // res.send('hey punk')
    res.render('admin/lesson-form.pug', {})
}
exports.postLessonForm = async (req, res) => {
    // res.send('hey punk')

    try {
        const lesson = new Lesson({
            name: req.body.name,
            description: req.body.description
        })

        const result = await lesson.save();
        res.send({
            succes : (result) ? true: false
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false
        })
    }
    // res.render('admin/lesson-form.pug', {})
}


exports.getTaskForm = async (req, res) => {
    const lessons = await Lesson.find({}).exec(( err, lessons ) => {
        return lessons
    })
	res.render('admin/task-form.pug', {
        lessons: lessons.map( lesson  => { return { _id: lesson._id, name: lesson.name  } } )
    })
}
