const sentimentalAction = require('../actions/sentimental.actions')

exports.getAllCommentes = (req, res) => {
    sentimentalAction.getAllCommentsAction((err, comments) => {
        if (err) res.send(err)
        //[INICIO]-----makeArrayCommets--------------------------------------
        sentimentalAction.makeArrayComments(comments, (err, data) => {
            if (err) res.send(err)
            res.send(data)
        })
        //[FIM]-----makeArrayCommets----------------------------------------
    })
}
