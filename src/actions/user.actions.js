var dbConn = require('../db/db-connection')

const bcrypt = require('bcrypt')

var User = function (user) {
    this.email = user.email
    this.username = user.username
    this.password = bcrypt.hashSync(user.password, 8) // bcrypt.hashSync(req.body.password, 8)
    this.type = user.type
    this.nombre = user.nombre
    this.apellido = user.apellido
    this.edad = user.edad
    this.direccion = user.direccion
    this.telefono = user.telefono
}

User.getAllUsers = (result) => {
    dbConn.query('SELECT * FROM tb_vinculacion_usuario', (err, res) => {
        if (err) {
            console.log('Error while fetching users', err)
            result(null, err)
        } else {
            console.log('Users fetched succesfully')
            result(null, res)
        }
    })
}

User.Login = (formData, result) => {
    var { user, password } = formData
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (re.test(String(user).toLowerCase())) {
        //check email sintax
        dbConn.query('SELECT * FROM tb_vinculacion_usuario WHERE email=?', user, (err, res) => {
            if (err) {
                console.log('Error while Login user', err)
                result(null, err)
            } else {
                console.log('User fetched succesfully')
                result(null, res)
            }
        })
    } else {
        console.log('no es mail')
        dbConn.query('SELECT * FROM tb_vinculacion_usuario WHERE username=?', user, (err, res) => {
            if (err) {
                console.log('Error while Login user', err)
                result(null, err)
            } else {
                console.log('User fetched succesfully')
                result(null, res)
            }
        })
    }
}

User.getUserById = (id, result) => {
    dbConn.query('SELECT * FROM tb_vinculacion_usuario WHERE id=?', id, (err, res) => {
        if (err) {
            console.log('Error while fetching user by id', err)
            result(null, err)
        } else {
            console.log('User fetched succesfully')
            result(null, res)
        }
    })
}

User.getUserByUsername = (username, result) => {
    dbConn.query('SELECT * FROM tb_vinculacion_usuario WHERE username=?', username, (err, res) => {
        if (err) {
            console.log('Error while fetching user by username', err)
            result(null, err)
        } else {
            console.log('User fetched succesfully')
            result(null, res)
        }
    })
}

User.getUserByEmail = (email, result) => {
    dbConn.query('SELECT * FROM tb_vinculacion_usuario WHERE email=?', email, (err, res) => {
        if (err) {
            console.log('Error while fetching user by email', err)
            result(null, err)
        } else {
            console.log('User fetched succesfully')
            result(null, res)
        }
    })
}

User.createNewUser = (userData, result) => {
    dbConn.query('INSERT INTO tb_vinculacion_usuario SET ?', userData, (err, res) => {
        if (err) {
            console.log('Error while creating user', err)
            result(null, err)
        } else {
            console.log('User created succesfully')
            result(null, res)
        }
    })
}

User.deleteUser = (userId, result) => {
    console.log('userid ->' + userId)
    dbConn.query('DELETE FROM tb_vinculacion_usuario WHERE id=?', userId, (err, res) => {
        if (err) {
            console.log('Error while deleting user', err)
            result(null, err)
        } else {
            console.log('User deleted succesfully')
            result(null, res)
        }
    })
}

module.exports = User
