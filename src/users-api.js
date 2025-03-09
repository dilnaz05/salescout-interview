"use strict";
// Create an API using Node.js and Express:
// 1. POST /user - adds a user.
// 2. GET /users - returns all users.
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
var users = [];
app.post('/user', function (req, res) {
    var name = req.body.name;
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Name is required' });
    }
    users.push({ name: name });
    res.status(201).json({ message: 'User added success', user: { name: name } });
});
app.get('/users', function (req, res) {
    res.status(200).json(users);
});
if (process.env.NODE_ENV !== 'test') {
    var PORT_1 = 3000;
    app.listen(PORT_1, function () { return console.log("Server running on port ".concat(PORT_1)); });
}
exports.default = app;
