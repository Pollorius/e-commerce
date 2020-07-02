const server = require('express').Router()
const { Product, Category } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;


server.get('/', function (req, res, next) {
    if (req.query.search) {
        const query = decodeURI(req.query.search)
        console.log(query)
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
            include: {
                model: Category,
                attributes: ["name"],
            }
        }).then(function (products) {
            console.log(`${products[0].dataValues.brand}${products[0].dataValues.name}`)
            res.json(products);
        });
        return;
    }
    Product.findAll({
        include: {
            model: Category,
            attributes: ["name"],
        }

    })
        .then(function (products) {

            if (!products) return res.sendStatus(404);
            res.json(products);
        }).catch(function (reason) {
            res.status(404).json({ message: "PRODUCT COULDN'T BE FOUND", data: reason })
        });
});

server.get('/findByCat', function (req, res) {
    const { categoryId } = req.body
    Category.findByPk(categoryId)
        .then(function (category) {
            console.log(category)
            category.getProducts()
                .then(function (product) {
                    res.json(product);
                });
        }).catch(function (reason) {
            res.status(404).json({ message: "THERE ARE NOT PRODUCTS IN THIS CATEGORY", data: reason })
        })
})



server.get('/:id', function (req, res, next) {
    Product.findByPk(req.params.id, {
        include: {
            model: Category,
            attributes: ["name"],
        }
    })
        .then(function (product) {
            res.json(product);
        }).catch(next);
});

server.post('/', function (req, res, next) {
    const { brand, name, package, price, categoryId, description, imageUrl } = req.body
    if (!brand && !name && !package && !price) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO CREATE THIS PRODUCT");
    let product = Product.create({
        brand: brand,
        name: name,
        package: package,
        price: price,
        description: description,
        imageUrl: imageUrl
    })
    let category = Category.findAll({
        where: {
            id: categoryId
        }
    })
    Promise.all([product, category])
        .then(function (values) {
            let prod = values[0];
            let cat = values[1];
            prod.setCategories(cat)
        })
        .then(function (createdProduct) {
            res.json(createdProduct)
        }).catch(function (reason) {
            res.status(404).json({ message: "PRODUCT COULDN'T BE CREATED", data: reason })
        });
});

server.put('/:id', function (req, res, next) {
    const { brand, name, package, price, categoryId, description, imageUrl } = req.body
    if (!brand && !name && !package && !price) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO MODIFY THIS PRODUCT");
    let product = Product.findByPk(req.params.id);
    let category = Category.findAll({
        where: {
            id: categoryId
        }
    });

    Promise.all([product, category])
        .then(function (values) {
            let prod = values[0];
            let cat = values[1];

            Product.update({
                brand: brand,
                name: name,
                package: package,
                price: price,
                description: description,
                imageUrl: imageUrl
            },
                {
                    where: {
                        id: req.params.id
                    },

                })
            prod.setCategories(cat)
                .then(function (category) {
                    res.status(200).json(category)
                })
        }).catch(function (reason) {
            res.status(404).json({ message: "PRODUCT COULDN'T BE UPDATED", data: reason })
        });


});


server.delete('/:id', function (req, res, next) {
    Product.destroy({
        where: {
            id: req.params.id
        }

    }).then(function (deletedCategory) {
        res.status(200).send("PRODUCT SUCCESSFULLY DELETED")
    }).catch(next);

});


module.exports = server;