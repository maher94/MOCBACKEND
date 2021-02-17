const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
exports.updatePassword= (req, res) => {
User.update({
  password: bcrypt.hashSync(req.body.password, 8)},
  
  {
    where: { email: req.body.email }
  }
).then( function (res){
  return res;
})
.catch(error => {
  return error;
})

res.json({ success:true,  message: "Password Updated successfuly"});

}
exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    FirstName:req.body.firstName,
    LastName:req.body.lastName,
    sexe:req.body.sexe,
    password: bcrypt.hashSync(req.body.password, 8),
    
    
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 30
      });
       
      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          FirstName:user.FirstName,
          LastName : user.LastName,
          email: user.email,
          sexe:user.sexe,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
