const express = require('express')
const router = express.Router()
const Restaurant = require('../models/Restaurant')

router.get('/mapita',(req, res, next)=>{
  res.render('index')
})

function checkRole(role){
  return (req, res, next)=>{
    if(req.isAuthenticated() && req.user.role===role){
      next()
    }else{
      res.redirect('/login')
    }
  }
}

//lista

router.get('/', (req, res, next)=>{
  Restaurant.find()
    .then(restaurants=>{
      res.render('restaurants/list', {restaurants})
    })
})

//detalle

router.get('/detail/:id', (req, res, next)=>{
  res.render('restaurants/detail')
})

//agregar

router.get('/new', (req, res, next)=>{
  res.render('restaurants/new')
})

router.post('/new', (req, res, next)=>{
  Restaurant.create(req.body)
    .then(restaurant=>{
      res.redirect('/restaurants')
    }).catch(e=>next(e))
})

//update

router.get('/edit/:id', (req, res, next)=>{
  res.render('restaurants/edit')
})


router.get('/delete/:id', (req, res, next)=>{
  res.render('restaurants/delete')
})


module.exports = router