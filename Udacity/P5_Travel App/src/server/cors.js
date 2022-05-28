const cors = require('cors')

// cors is needed to allow requests from another server
app.use(cors({
    origin: 'http://localhost:8080'
}))

console.log(__dirname)

module.exports = cors;