const axios = require('axios')
const API_URL = 'http://78.46.208.140:3031'
const Task = require('../models/Tasks')

module.exports.solutionProxy = async (req, res) => {

    try {

        const {
            task,
            solution,
        } = req.body

        const findTask = await Task.findOne({ _id: task }).exec( (err, task ) => { return task })

        const resp = await axios.post(API_URL, {
            test: findTask.tests,
            solution: solution,
        })
        .then( ( resp ) => {
            return {
                success: resp.data.error == 0,
                errors: resp.data.tests,
            }
        } )

        res.send(resp)

    } catch ( err ) {

        res.send({
            success: false,
            errors: [],
        })

    }
}
