const server = require('express').Router()
const { Product, Category } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;


server.get('/', function(req, res, next) {
    if(req.query.search) {
        const query = decodeURI(req.query.search)      
        Product.findAll({
            where: {
            [Op.or]: {
                brand: {
                    [Op.iLike]: `%${query}%`
                },
                name: {
                    [Op.iLike]: `%${query}%`
                }
              }
            },
            include:{
                model: Category,
                attributes: ["name"],
            }
        }).then(function(products){
            console.log(`${products[0].dataValues.brand}${products[0].dataValues.name}`)
            res.json(products);
        });
       
    } else {
        Product.findAll({
            where: {
                stock: {
                    [Op.ne]: 0
                }
            },
            include:{
                model: Category,
                attributes: ["name"],
            }
        
        })
        .then(function(products) {
            
            if(!products) return res.sendStatus(404);
            res.json(products);
        }).catch(function(reason){
            res.status(404).json({message:"PRODUCT COULDN'T BE FOUND", data: reason})
        });
    }
});

server.get('/:id', function(req, res, next){
    Product.findByPk(req.params.id, {
        include:{
            model: Category,
            attributes: ["name"],
        }
    })
    .then(function(product){
        res.json(product);
    }).catch(next);
});

server.get('/:id/findByCat', function(req, res){
    const categoryId = req.params.id  
    Category.findByPk(categoryId)
    .then(function(category) {
      category.getProducts()
      .then(function(product){
        res.json(product);
      });
    }).catch(function(reason){
        res.status(404).json({message:"THERE ARE NOT PRODUCTS IN THIS CATEGORY", data: reason})
    })
})


server.post('/', function(req, res, next) {
    const { brand, name, package, price, stock, categoryName, description, imageUrl } = req.body
    if(!brand && !name && !package && !price && !stock) return res.status(400).send("NOT ENOUGH REQUIREMENTS TO CREATE THIS PRODUCT");
    let product = Product.create({
        brand: brand,
        name: name,
        package: package,
        price: price,
        description: description,
        imageUrl: imageUrl,
        stock: stock
    })
    let category = Category.findAll({
        where: {
            name: categoryName
        }
    })
    Promise.all([product, category])
    .then(function(values){
        let prod = values[0];
        let cat = values[1];
        prod.setCategories(cat)
    })    
    .then(function(createdProduct){
        res.json(createdProduct)
    }).catch(function(reason){
        res.status(400).json({message:"PRODUCT COULDN'T BE CREATED", data: reason})
    });
});

server.put('/:id', function(req, res, next){
    const { brand, name, package, price, stock, categoryName, description, imageUrl } = req.body
    if(!brand && !name && !package && !price && !stock) return res.status(400).send("NOT ENOUGH REQUIREMENTS TO MODIFY THIS PRODUCT");
    let product = Product.findByPk(req.params.id);
    let category = Category.findAll({
        where: {
            name: categoryName
        }
    });
    Promise.all([product, category])
    .then(function(values){
        let prod = values[0];
        let cat = values[1];
        Product.update({
            brand: brand,
            name: name,
            package: package,
            price: price,
            description: description,
            imageUrl: imageUrl,
            stock: stock
        }, 
        {
            where: {
                id: req.params.id
            },
        })
        prod.setCategories(cat)
        .then(function(category){
            res.status(200).json(category)
        })
    }).catch(function(reason){
        res.status(404).json({message:"PRODUCT COULDN'T BE UPDATED", data: reason})
    });
});

server.delete('/:id', function(req, res, next){
    const { categoryId } = req.body 
    let product = Product.findByPk(req.params.id);
    let category = Category.findByPk(categoryId);
    Promise.all([product, category])
    .then(function(values){
        let prod = values[0];
        let cat = values[1];
        prod.removeCategory(cat)
    .then(function(removedCategory){
        res.status(200).json(removedCategory)
    }).catch(function(reason){
        res.status(400).json({message:"CATEGORY COULDN'T BE REMOVED", data: reason})
    });
    });

});


module.exports = server;