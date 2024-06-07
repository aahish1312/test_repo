var express = require('express');
var router = express.Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message' ,messages:messages});
});

router.post('/new',(req,res) =>{
  const body_name = req.body.name;
  const body_message = req.body.message;
  messages.push({text:body_message,user:body_name,added:new Date()});
  res.redirect('/');


})
module.exports = router;
