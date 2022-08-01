const express = require('express');
const router = express.Router();


router.get('/home' , (req, res) =>{
    res.render('index', {
      title:'Home D-CLIC'
    })
  });
router.get('/backend' , (req, res) =>{
    res.render('backend', {
      title:'Backend D-CLIC'
    })
  });
router.get('/frontend' , (req, res) =>{
    res.render('frontend', {
      title:'Frontend D-CLIC'
    })
  });
router.get('/marketing' , (req, res) =>{
    res.render('marketing', {
      title:'Digital Marketing D-CLIC'
    })
  });
router.get('/uxui' , (req, res) =>{
    res.render('uxui', {
      title:'UX/UI D-CLIC'
    })
  });
router.get('/contact' , (req, res) =>{
    res.render('contact', {
      title:'Contact D-CLIC'
    })
  });
router.get('/signup' , (req, res) =>{
    res.render('signup', {
      title:'Signup D-CLIC'
    })
  });
  
router.get('/', (req, res) =>{
    res.render('index' ,{
      title:'home'
    })
  });


module.exports = router;
