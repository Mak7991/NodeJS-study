const express = require('express');
const app = express();
const db = require('./config/db');
var cors = require('cors')

app.use(cors())

db.connection.once('open', () => {
    console.log('db connected');
})
.on("error", error => {
    console.log("Error ->", error)
})

app.listen(process.env.PORT || 3000, function() {
    console.log('server is listening')
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index.js'))

// app.get('/test', (req, res) => {
//     res.send({message: "Worked"})
// })

// app.get('/getAllFriends', (req, res) => {
//     console.log('hello world')
//     res.send({users: [], message: 'successful'})
// })

// app.post('/addFriend', (req, res) => {
//     console.log('hello world')
//     res.send({message: 'friend added'})
// })