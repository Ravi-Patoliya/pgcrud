var express = require('express');
var router = express.Router();
let controller = require("../controller/user.controller")

/* GET users listing. */
router.get('/',controller.GetUser);
router.post('/',controller.CreateUser);
router.put('/',controller.UpdateUser);
router.delete('/:id',controller.DeleteUser);

module.exports = router;
