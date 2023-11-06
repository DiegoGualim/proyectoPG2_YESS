const UserAction = require('../actions/user.actions')
const bcrypt = require('bcrypt')

//get all users list
exports.getAllUsers = (req, res) => {
    //console.log("here all patients list")
    UserAction.getAllUsers((err, users) => {
        //console.log('inside the model')
        if (err) res.send(err)
        console.log('Users', users)
        res.send(users)
    })
}

//Login
exports.Login = (req, res) => {
    const userData = req.body
    console.log(req.body.password)

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).send({ success: false, message: 'Please fill all the fields' })
    } else {
        UserAction.Login(userData, (err, users) => {
            console.log(users)
            if (users[0] != null) {
                let passwordIsValid = bcrypt.compareSync(req.body.password, users[0].password)
                if (!passwordIsValid) {
                    return res.status(401).send({ success: false, message: 'Incorrect Password' })
                }
                if (err) res.send(err)
                res.json({ success: true, message: 'Login succesfully', data: users })
            } else return res.status(401).send({ success: false, message: 'Login incorrecto' })
        })
    }
}

//get user by id
exports.getUserById = (req, res) => {
    UserAction.getUserById(req.params.id, (err, user) => {
        if (err) res.send(err)
        console.log('User', user)
        user.type = UserTypeModel.res.send(user)
    })
}

//get user by username
exports.getUserByUsername = (req, res) => {
    UserAction.getUserByUsername(req.params.username, (err, user) => {
        if (err) res.send(err)
        console.log('User', user)
        res.send(user)
    })
}

//get user by email
exports.getUserByEmail = (req, res) => {
    UserAction.getUserByEmail(req.params.email, (err, user) => {
        if (err) res.send(err)
        console.log('User', user)
        res.send(user)
    })
}

//create a new user
exports.createNewUser = (req, res) => {
    console.log(req.body)
    const userData = new UserAction(req.body)
    console.log(userData)

    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        return res.status(400).send({ success: false, message: 'Please fill all the fields' })
    } else {
        UserAction.createNewUser(userData, (err, users) => {
            if (err) res.send(err)
            res.json({ success: true, message: 'User created succesfully', data: users })
        })
    }
}

//get user by email
exports.deleteUser = (req, res) => {
    UserAction.deleteUser(req.params.id, (err, user) => {
        if (err) res.send(err)
        console.log('User', user)
        res.send(user)
    })
}
