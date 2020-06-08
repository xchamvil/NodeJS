const express = require('express');
const promoRouter  = express.Router();
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');

const Promotion = require('../models/promotions');

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.get((req,res,next) => {
  Promotion.find({})
  .then((promotion) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promotion);
  },(err) => next(err))
  .catch((err) => next(err));
})
.post((req,res,next) => {
  Promotion.create(req.body)
  .then((promo)=> {
    console.log('Promotion Created', promo);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promo);
  },(err) => next(err))
  .catch((err) => next(err));
})
.put((req,res,next) => {
  res.statusCode = 403;
  res.end('PUT not supported');
})
.delete((req,res,next) => {
  Promotion.remove({})
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(resp);
  },(err) => next(err))
  .catch((err) => next(err));
})

promoRouter.route('/:promotionId')
.get((req,res,next) => {
    Promotion.findById(req.params.promotionId)
    .then((promo) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promo);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /leader/'+ req.params.promotionId);
})
.put((req, res, next) => {
    Promotion.findByIdAndUpdate(req.params.promotionId, {
        $set: req.body
    }, { new: true })
    .then((promotion) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(promotion);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Promotion.findByIdAndRemove(req.params.promotionId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = promoRouter;