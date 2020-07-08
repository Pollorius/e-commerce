const server = require('express').Router()
const { User } = require('../models/index');

var Sequelize = require('sequelize');
const Op = Sequelize.Op;

server.get('/', function (req, res, next) {
    if (req.query.search) {
        const capQuery = req.query.search.charAt(0).toUpperCase() + req.query.search.slice(1)
        User.findAll({
            where: {
                [Op.or]: [{ userName: capQuery }, { name: capQuery }]
            },

        }).then(function (user) {
            res.json(user);
        });
        return;
    }
    User.findAll()
        .then(function (user) {
            if (!user) return res.sendStatus(404);
            res.json(user);
        }).catch(function (reason) {
            res.status(404).json({ message: "USERS COULDN'T BE FOUND", data: reason })
        });
});


server.get('/:id', function (req, res, next) {
    User.findByPk(req.params.id, {
    })
        .then(function (user) {
            res.json(user);
        }).catch(next);
});

server.post('/create', function (req, res, next) {

    const { userName, name, lastName, email, password, age, dni, address } = req.body
    if (!userName && !name && !lastName && !email && !password && !age && !dni && !address) return res.status(404).send("NOT ENOUGH REQUIREMENTS TO CREATE THIS USER");
    User.create({
        userName,
        name,
        lastName,
        email,
        password,
        age,
        dni,
        address
    })
        .then(function (createdUser) {
            res.json(createdUser)
        }).catch(next);

});



server.delete('/:id', function (req, res, next) {
    User.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.status(200).send("USER SUCCESSFULLY DELETED")
    }).catch(next);

});




module.exports = server;