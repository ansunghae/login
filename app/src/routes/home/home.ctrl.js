"use strict";

const output= {
    home: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    }
}

const process = {
    login: (req, res) => {
        console.log(req.body);
    }
}

module.exports = {
    output,
    process,
};