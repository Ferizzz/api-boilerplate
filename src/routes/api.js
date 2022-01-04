const router = require('express').Router()
const mongoose = require('mongoose')

router.get('/', (req, res) => {
   res.json({ database_status: mongoose.STATES[mongoose.connection.readyState] })
})

module.exports = router
