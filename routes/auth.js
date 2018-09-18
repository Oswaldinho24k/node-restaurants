const router = require('express').Router()
const User   = require('../models/User')

router.get('/signup', (req, res) => {
  res.render('auth/signup')
})

router.post('/signup', (req, res, next) => {
  
})