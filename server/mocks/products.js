module.exports = function(app) {
  var express = require('express');
  var data = require('../../data/products.json');
  var productsRouter = express.Router();

  productsRouter.get('/', function(req, res) {
    res.send(data);
  });

  productsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  productsRouter.get('/:id', function(req, res) {
    res.send({
      'product': data.products.filter(function(ent){ return ent.id === req.params.id; })
    });
  });

  productsRouter.put('/:id', function(req, res) {
    res.send({
      'products': {
        id: req.params.id
      }
    });
  });

  productsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/products', productsRouter);
};
