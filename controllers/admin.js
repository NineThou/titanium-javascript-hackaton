var Lesson = require('../models/Lessons');

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

