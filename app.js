const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const redis = require('redis');

// Create Redis 
let product = redis.createClient();

product.on('connect', function(){
  console.log('Connected to Redis...');
});

// Set Port
const port = 3000;

// Init app
const app = express();

// View Engine\
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// methodOverride
app.use(methodOverride('_method'));

// Search Page
app.get('/', function(req, res, next){
  res.render('searchproducts');
});

// Search processing
app.post('/product/search', function(req, res, next){
  let id = req.body.id;

  product.hgetall(id, function(err, obj){
    if(!obj){
      res.render('searchproducts', {
        error: 'product does not exist'
      });
    } else {
      obj.id = id;
      res.render('details', {
        product: obj
      });
    }
  });
});

// Add Discount on product Page
app.get('/product/add', function(req, res, next){
  res.render('addproduct');
});

// Process Discount on Add product Page
app.post('/product/add', function(req, res, next){
  let id = req.body.id;
  let product_name = req.body.product_name;
  let discount = req.body.discount;
  let product_date = req.body.product_date;


  product.hmset(id, [
    'product_name', product_name,
    'discount', discount,
    'product_date', product_date,
  ], function(err, reply){
    if(err){
      console.log(err);
    }
    console.log(reply);
    res.redirect('/');
  });
});

// Delete product
app.delete('/product/delete/:id', function(req, res, next){
  product.del(req.params.id);
  res.redirect('/');
});

app.listen(port, function(){
  console.log('Server started on port '+port);
});