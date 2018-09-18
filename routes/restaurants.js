const express = require('express')
const router = express.Router()
//Restaurant


//lista

router.get('/', (req, res, next)=>{
  res.render('restaurants/list')
})

//detalle

router.get('/detail/:id', (req, res, next)=>{
  res.render('restaurants/detail')
})

//agregar

router.get('/new', (req, res, next)=>{
  res.render('restaurants/new')
})

//update

router.get('/edit/:id', (req, res, next)=>{
  res.render('restaurants/edit')
})



module.exports = router