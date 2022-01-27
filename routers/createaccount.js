const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/create', (req, res) => {
    res.render('create')
})

module.exports = router