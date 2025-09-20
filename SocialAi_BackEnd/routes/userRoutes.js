
const express = require("express");
const UserController = require("../controllers/UserController");
const User = require("../models/User");

const router= express.Router();


router.post('/register', UserController.userRegister);
router.post('/login', UserController.userLogin);

module.exports= router;