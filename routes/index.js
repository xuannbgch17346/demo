var express = require('express')
var router = express.Router()

//set trang chủ (homepage)
router.get('/', (req, res) => {
  //render ra trang index.hbs ở trong thư mục views
  res.render('index')
})

router.get('/linknaocungduoc', (req, res) => {
  res.render('tengicungduoc')
})

router.get('/quote', (req, res) => {
  var text = "<h1 style='color: red;'>Practice makes perfect</h1>"
  res.send(text)
})

router.get('/api', (req, res) => {
  var data = {
    name: 'Nguyen Ba Xuan',
    age: 23,
    address: 'Ha Noi'
  }
  res.json(data)
})

module.exports = router
