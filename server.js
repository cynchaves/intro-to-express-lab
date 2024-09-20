const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Server is listening');
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/greetings/:username', (req, res) => {
  res.send(`<h2>Hi ${req.params.username}! How are you?</h2>`);
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 2~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
app.get('/roll/:number', (req, res) => {
    let num = req.params.number;
    let roll = Math.floor(Math.random() * num);
    if (isNaN(num) === true ) {
        res.send('<h3>Please Enter a Number</h3>');
    }
    else {
      res.send(`<h3>You rolled a ${roll}!</h3>`);
    };
  });
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
