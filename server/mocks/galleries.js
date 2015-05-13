module.exports = function(app) {
  var express = require('express');
  var data = require('../../data/galleries.json');
  var galleryRouter = express.Router();

  galleryRouter.get('/', function(req, res) {
    res.send(data);
  });

  galleryRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  galleryRouter.get('/:id', function(req, res) {
    res.send({
      'gallery': data.galleries.filter(function(ent){ return ent.id === req.params.id; })
    });
  });

  galleryRouter.put('/:id', function(req, res) {
    res.send({
      'gallery': {
        id: req.params.id
      }
    });
  });

  galleryRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/galleries', galleryRouter);
};
