const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread
    })
  // res.send(Bread)
})


// SHOW Route
breads.get('/:arrayIndex', (req, res) => {
    // res.send(Bread[req.params.arrayIndex])
  if (Bread[req.params.arrayIndex]) {
    res.render('Show', {
      bread: Bread[req.params.arrayIndex]
    })
  }else{
    res.send('404')
  }
  })

module.exports = breads
