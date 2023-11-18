const sentimentalAction = require('../actions/sentimental.actions')

/*exports.getAllCommentes = (req, res) => {
    sentimentalAction.getAllCommentsAction((err, comments) => {
        if (err) res.send(err)
        //[INICIO]-----makeArrayCommets--------------------------------------
        sentimentalAction.makeArrayComments(comments, (err, data) => {
            if (err) res.send(err)
            res.send(data)
        })
        //[FIM]-----makeArrayCommets----------------------------------------
    })
} */

exports.getAllCommentes = (req, res) => {
    const ID_FACEBOOK = req.params.id_face
    sentimentalAction.getAllCommentsAction(req.params, (err, comments) => {
        if (err) res.send(err)
        //[INICIO]-----makeArrayCommets--------------------------------------
        sentimentalAction.makeArrayComments(comments, ID_FACEBOOK, (err, data) => {
            if (err) res.send(err)
            res.send(data)
        })
        //[FIM]-----makeArrayCommets----------------------------------------
    })
}

exports.getDataReport = (req, res) => {
    sentimentalAction.getDataReport((err, dataReport) => {
        if (err) res.send(err)
        console.log('DATA', dataReport)
        res.send(dataReport)
    })
}

exports.deleteDataReport = (req, res) => {
    sentimentalAction.deleteDataReport(req.params.id_comentario, (err, user) => {
        if (err) res.send(err)
        console.log('User', user)
        res.send(user)
    })
}
