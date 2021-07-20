
var db = require("../models");

var Users = db.User
// console.log(models);
console.log(Users);

let CreateUser = async(req, res) => {
    let data = {
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyId: req.body.companyId
    }
    let email = data.email
    let count =  await Users.count({where:{email:email}})        
        if(count>0){
            res.json('Email Alredy Registered');
        }else{
            Users.create(data)
        .then(data => {
            res.json(data)
        }).catch(err => {
            console.log(err, "error During Create User");
        });
        }

};

let UpdateUser = (req, res) => {
    let id = req.body.id;
    let data = {
        id: req.body.id,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        companyId: req.body.companyId
    }
    Users.update(data, { where: { id: id } })
        .then(data => {
            res.json("User Updated SuccessFully")
        }).catch(err => {
            console.log(err, "error During Update User");
        });
};

let DeleteUser = (req, res) => {
    let id = req.params.id
    Users.destroy({ where: { id: id } })
        .then(data => {
            res.json(`Userid ${id} Deleted SuccessFully`)
        }).catch(err => {
            console.log(err, "error During delete User");
        });
};

let GetUser = (req, res) => {
let email = req.body.email
    Users.findAll({where:{email:email}})
        .then(data => {
            res.json(data)
        }).catch(err => {
            console.log(err, "error During find all  User");
        });
};

module.exports = {
    CreateUser,
    UpdateUser,
    DeleteUser,
    GetUser
}