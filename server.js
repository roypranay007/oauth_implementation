'use strict';
// Load dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const PORT = process.env.PORT || 3000;

// Public route
app.get('/public', (req, res)=>{
  let deals = [
    {
    id: 1234,
    name: 'Name of Product',
    description: 'Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
},
    {
    id: 12344,
    name: 'Name of Product',
    description: 'Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
}
  ];
  res.json(deals);
})

// Private route
app.get('/api/deals/private', (req,res)=>{
  let deals = [
   {
    id: 1,
    name: 'Private Name of Product',
    description: 'Private Description of Product',
    originalPrice: 19.99, // Original price of product
    salePrice: 9.99 // Sale price of product
}
  ];
  res.json(deals);
})

app.listen(PORT, () => {
    console.log(`Serving deals and our app is running on port ${ PORT }`);
  console.log('https://express-test-app-pranay.herokuapp.com/'
});
