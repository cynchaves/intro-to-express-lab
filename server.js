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
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];

app.get('/collectibles/:itemNum', (req, res) => {
    let ball = collectibles[0];
    let picture = collectibles[1];
    let yogurt = collectibles[2];

    if (req.params.itemNum === '0') {
    res.send(`<h3>You picked a ${ball.name} for the low price of ${ball.price}!`);
    }
    else if (req.params.itemNum === '1') {
        res.send(`<h3>You picked a ${picture.name} for the low price of ${picture.price}!`);
    }
    else if (req.params.itemNum === '2') {
        res.send(`<h3>You picked a ${yogurt.name} for the low price of ${yogurt.price}!`);
    }
    else {
       res.send('<h3>Out of stock. Check back soon!</h3>');
    }
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~Exercise 4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
    const types = shoes.filter((shoe) => {
        return shoe.type === req.query.type;
    })
    // const minPrice = shoes.filter((shoe) => {
    //     return shoe.price >= req.query.min-price;
    // })
    // const maxPrice = shoes.filter((shoe) => {
    //     return shoe.price <= req.query.max-price;
    // })
    if (req.query.type === req.query.type) {
        res.send(types);
    }
    // else if (req.query.min-price === req.query.min-price) {
    //     res.send(minPrice)
    // }
    // else if (req.query.max-price >= req.query.max-price) {
    //     res.send(maxPrice);
    // }
    else {
        res.send(shoes);
    }
});
