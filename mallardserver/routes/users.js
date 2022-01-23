var express = require('express');
var router = express.Router();

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function (req, res) {
  res.send('respond with a resource');
});


// POST login user
router.post("/login", function (req, res, next) {
  const username = req.body.username
  const password = req.body.password

  //Verify body
  if (!username || !password) {
    res.status(400).send({"error": true, "message": "Request body incomplete - username and password needed"
    })
    return
  }

  req.db.from("wb_users").select("*").where("username", "=", username)
    .then((users) => {
      if (users.length === 0) {
        res.status(401).send({"error": true, "message": "User does not exist"
        })
        return;
      }

      // Compare password hashes
      const user = users[0]
      console.log(password)
      console.log(user.password)
      var result = bcrypt.compareSync(password, user.password)
      console.log(result)
      return result
    })
    .then((match) => {
      if (!match) {
        res.status(401).send({"error": true, "message": "Passwords do not match"
        })
        return
      }

      // Create and return JWT token
      const secretKey = "secret key"
      const expires_in = 60 * 60 * 24 //1 day
      const exp = Math.floor(Date.now() / 1000) + expires_in
      const token = jwt.sign({ username, exp }, secretKey)
      res.json({ token_type: "Bearer", token, expires_in })
    })
})

module.exports = router;