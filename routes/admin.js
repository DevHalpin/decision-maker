const express = require('express');
const router = express.Router();

const dummy = {
  poll_title: 'This is dumb',
  poll_question: 'What is your quest?',
  option: [
    'dumb1', 'dumber2', 'reallydumb'
  ]
};

module.exports = function(database) {
  router.get("/:pollId", (req, res) => {

    const templateLiteral = {dummy};
    res.render("poll_admin", templateLiteral);
  });



  return router;
};
