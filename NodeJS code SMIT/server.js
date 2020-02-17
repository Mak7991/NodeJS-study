const express = require('express');
const app = express();
// var cors = require('cors')

// app.use(cors())

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