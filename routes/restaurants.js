const express = require('express')
const router = express.Router()
//Restaurant

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

router.get('/', checkRole('ADMIN'), (req, res, next)=>{
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


router.get('/delete/:id', (req, res, next)=>{
  res.render('restaurants/delete')
})


module.exports = router