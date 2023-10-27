const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const httpException = require('./src/utils/httpException.utils.js')
const errorMiddleware = require('./src/middleware/error.middleware.js')
const sentimentalRouter = require('./src/routes/sentimental.router.js')

// Init express
const app = express()

// Init environment
dotenv.config()

app.use(express.json({ limit: '50mb' }))
// enabling cors for all requests by using cors middleware
app.use(cors())

// Enable pre-flight
app.options('*', cors())

const port = Number(process.env.PORT || 3331)
app.get('/', (req, res) => res.send('Hello World!'))
//ROUTES------------------------------------
app.use('/api/sentimental', sentimentalRouter)

// 404 error
app.all('*', (req, res, next) => {
    const err = new httpException(404, 'Endpoint Not Found')
    next(err)
})

// Error middleware
app.use(errorMiddleware)
app.set('json replacer', function (key, value) {
    if (this[key] instanceof Date) {
        // Your own custom date serialization
        value = this[key].toLocaleDateString('en-GB')
    }

    return value
})

// starting the server
app.listen(port, () => console.log(`🚀 Server running on port ${port}!`))

module.exports = app
