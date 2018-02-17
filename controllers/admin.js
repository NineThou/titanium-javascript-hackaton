var Lesson = require('../models/Lessons');
var Task = require('../models/Tasks');

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
            success : (result) ? true: false 
        })
    } catch (error) {
        console.log(error)
        res.send({
            success: false
        })
    }
    // res.render('admin/lesson-form.pug', {})
}

exports.postTaskForm = async (req, res ) => {

    try{

        const {
            name,
            description,
            lesson,
            tests
        } = req.body

        const newTask = new Task({
            name: name,
            description: description,
            lesson: lesson,
            tests: tests,
        })

        // await newTask.save()

        const resp = await newTask.save()

        res.send({
            success: ( resp ) ? true: false,
        })

    } catch( err ) {
        res.send({
            success: false,
        })
    }

}

exports.getTaskForm = async (req, res) => {
    const lessons = await Lesson.find({}).exec(( err, lessons ) => {
        return lessons
    })
	res.render('admin/task-form.pug', {
        lessons: lessons.map( lesson  => { return { _id: lesson._id, name: lesson.name  } } )
    })
}
