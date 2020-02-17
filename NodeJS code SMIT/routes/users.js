const express = require('express');
const router = express.Router();

router.get('/getAll', (req, res) => {
    res.send({users: [], message: "Successful"})
})

module.exports = router;