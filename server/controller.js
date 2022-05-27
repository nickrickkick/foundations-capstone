require('dotenv').config();
const {CONNECTION_STRING} = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists cutting_instructions;
        drop table if exists users;
       
        create table users (
            user_id serial primary key, 
            username varchar,
            name varchar,
            password varchar,
            phone_number bigint
        );

        create table cutting_instructions (
            cutting_id serial primary key,
            cutting_style varchar,
            type_of_beef varchar,
            price integer,
            bought boolean,
            user_id INTEGER REFERENCES users(user_id)
        );

        insert into users (username, name, password, phone_number)
        values ('phonyMe', 'Kyle', 'badpassword', 8018224311),
        ('clarkdark', 'phil', 'password', 8014356671),
        ('darkknight', 'chad', 'stupidword', 8014551637),
        ('fartman', 'tanner', 'badword', 8015554617),
        ('firesword', 'franny', 'weakword', 8016667866);
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    getUsers: (req, res) => {
        sequelize.query(`select name, user_id from users`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    createCutting: (req, res) => {
        sequelize.query(`INSERT INTO cutting_instructions(cutting_style, type_of_beef, price, bought, user_id)
        VALUES ('${req.body.cutting}', '${req.body.beef}', ${req.body.price}, ${req.body.bought}, ${req.body.userId});`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    updateCutting: (req, res) => {
        sequelize.query(`INSERT INTO cutting_instructions(cutting_style, type_of_beef, price, bought, user_id)
        VALUES ('${req.body.cutting}', '${req.body.beef}', ${req.body.price}, ${req.body.bought}, ${req.body.userId});`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    getCutting: (req, res) => {
        sequelize.query(`select ci.cutting_id, ci.cutting_style, ci.type_of_beef, ci.price, ci.bought, users.user_id, users.name, users.phone_number
        from cutting_instructions ci
        join users on ci.user_id = users.user_id;`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    },
    deleteCutting: (req, res) => {
        console.log(req.params.id);
        sequelize.query(`DELETE FROM cutting_instructions WHERE cutting_id = ${req.params.id};`)
            .then(dbRes => res.status(200).send(dbRes[0]))
            .catch(err => console.log(err))
    }
}