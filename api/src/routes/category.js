const server = require('express').Router()
const { Category } = require('../models/index');

<<<<<<< HEAD
=======

>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
server.get('/', function(req, res, next) {
    if(req.query.search) {
        const capQuery = req.query.search.charAt(0).toUpperCase() + req.query.search.slice(1)       
        Category.findAll({
            where: {
                [Op.or]: [{name: capQuery}]
            }
        }).then(function(categories){
            res.json(categories);
        });
        return;
    } 
<<<<<<< HEAD
=======

>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
    Category.findAll()
    .then(function(categories) {
        if(!categories) return res.sendStatus(404);
        res.json(categories);
    }).catch(next);
<<<<<<< HEAD
});
=======
    
});

>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
server.get('/:id', function(req, res, next){
    Category.findByPk(req.params.id)
    .then(function(category){
        res.json(category);
    }).catch(next);
});
<<<<<<< HEAD
=======

>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
server.post('/', function(req, res, next) {
    const { name } = req.body
    if(!name) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO CREATE THIS CATEGORY");
    Category.create({
        name: name,        
    })
    .then(function(createdCategory){
        res.json(createdCategory)
    }).catch(next);
<<<<<<< HEAD
});
=======
    
});

>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
server.put('/:id', function(req, res, next){
    const { name } = req.body
    if(!name ) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO MODIFY THIS CATEGORY")
    Category.update({...req.body}, {
        where: {
            id: req.params.id
        }
    }).then(function(updatedCategory){
        res.status(201).send("CATEGORY SUCCESSFULLY UPDATED")
    }).catch(next);
<<<<<<< HEAD
});
server.delete('/:id', function(req, res, next){
    const { name } = req.body
=======

});

server.delete('/:id', function(req, res, next){
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(function(deletedCategory){
        res.status(200).send("CATEGORY SUCCESSFULLY DELETED")
    }).catch(next);
<<<<<<< HEAD
});

=======

});
>>>>>>> d4e2687467d99a58b9704301dc83acf7d153aa95




module.exports = server;