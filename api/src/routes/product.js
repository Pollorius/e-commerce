const server = require('express').Router()
const { Product } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

server.get('/', function(req, res, next) {
    if(req.query.search) {
        const capQuery = req.query.search.charAt(0).toUpperCase() + req.query.search.slice(1)       
        Product.findAll({
            where: {
                [Op.or]: [{brand: capQuery}, {name: capQuery}]
            }
        }).then(function(products){
            res.json(products);
        });
        return;
    } 

    Product.findAll()
    .then(function(products) {
        if(!products) return res.sendStatus(404);
        res.json(products);
    }).catch(next);
    
});

server.get('/:id', function(req, res, next){
    Product.findByPk(req.params.id)
    .then(function(product){
        res.json(product);
    }).catch(next);
});

server.post('/', function(req, res, next) {
    const { brand, name, package } = req.body
    if(!brand && !name && !package) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO CREATE THIS PRODUCT");
    
    Product.create({
        brand: brand,
        name: name,
        package: package,
    })
    .then(function(createdProduct){
        res.json(createdProduct)
    }).catch(next);

});

server.put('/:id', function(req, res, next){
    const { brand, name, package } = req.body
    if(!brand && !name && !package) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO MODIFY THIS PRODUCT")
    Product.update({...req.body}, {
        where: {
            id: req.params.id
        }
    }).then(function(updatedProduct){
        res.status(201).send("PRODUCT SUCCESSFULLY UPDATED")
    }).catch(next);

});


module.exports = server;