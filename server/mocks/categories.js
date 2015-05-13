module.exports = function(app) {
  var express = require('express');
  var data = require('../../data/categories.json');
  var categoriesRouter = express.Router();

  categoriesRouter.get('/', function(req, res) {
    res.send(data);
  });

  categoriesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  categoriesRouter.get('/:id', function(req, res) {
    res.send({
      'category': data.categories.filter(function(ent){ return ent.id === req.params.id; })
    });
  });

  categoriesRouter.put('/:id', function(req, res) {
    res.send({
      'categories': {
        id: req.params.id
      }
    });
  });

  categoriesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/categories', categoriesRouter);
};
