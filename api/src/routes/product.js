const server = require('express').Router()
const { Product } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

server.get('/', function(req, res, next) {
    if(req.query.search) {        
        Product.findAll({
            where: {
                [Op.or]: [{marca: req.query.search}, {nombre: req.query.search}]
            }
        }).then(function(products){
            var product = products[0]
            if(product === undefined) {
                // console.log("aca estoy")
                return res.status(404).send("PRODUCT NOT FOUND");
            }
            res.json(products)
        })
        return;
    } 

    Product.findAll()
    .then(function(products) {
        if(!products) return res.sendStatus(404);
        res.json(products)
    })
    .catch(next);
    
});

server.post('/', function(req, res, next) {
    console.log(req.body)
    Product.create({
        marca: req.body.marca,
        nombre: req.body.nombre,
    })
    .then(function(createdProduct){
        res.json(createdProduct)
    })
    .catch(next);

})


module.exports = server;