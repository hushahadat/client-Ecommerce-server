//const dbutil=require('../config/database.js')
var tunnel = require("tunnel-ssh");
var MongoClient = require("mongodb").MongoClient;
const utilencrypt = require("../services/encryptpwd");

// const config = {
//   host: "++++",
//   port: 7822,
//   username: "",
//   password: "",
//   dstPort: 27017,
//   localPort: 27018,
// };
var mongoUrl = "mongodb://localhost:27017";

async function listUsers(req, res) {
  try {
    // var count = 0
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log("SSH connection error: " + error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("user");
        // count = count + 1;
        coll
          .find()
          .toArray()
          .then((data) => {
            data.forEach((u) => {
              u.rpassword = utilencrypt.decryptPassword(u.rpassword);
            });
            res.send(data);
            console.log(data);
           // server.close();
          });
        // setTimeout(function () {
        //     if (count > 1) {
        //         server.close();
        //     }
        // }, 30000);
      });
    // });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addUser(req, res) {
  try {
    // var count = 0;
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("user");

        var _id = req.body._id;
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var dob = req.body.dob;
        var gender = req.body.gender;
        var remailid = req.body.remailid;
         var rpassword = utilencrypt.encryptPassword(req.body.rpassword);
        //var rpassword = req.body.rpassword;
        var phonenumber = req.body.phonenumber;
        var address = req.body.address;
        var addresstwo = req.body.addresstwo;
        var city = req.body.city;
        var country = req.body.country;
        var state = req.body.state;
        var role = req.body.role;

        // count = count + 1;

        coll
          .insertOne({
            _id: _id,
            firstname: firstname,
            lastname: lastname,
            dob: dob,
            gender: gender,
            remailid: remailid,
            rpassword: rpassword,
            phonenumber: phonenumber,
            address: address,
            addresstwo: addresstwo,
            city: city,
            country: country,
            state: state,
            role: role,
          })
          .then((data) => {
            console.log(data); //"value"
            res.send(data);
           // server.close();
          });
        // setTimeout(function () {
        //     if (count > 1) {
        //         server.close();
        //     }
        // }, 30000);
      });
    // });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateUser(req, res) {
  try {
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("user");

        var _id = parseInt(req.params._id);
        var firstname = req.body.firstname;
        var lastname = req.body.lastname;
        var dob = req.body.dob;
        var gender = req.body.gender;
        var remailid = req.body.remailid;
         var rpassword = utilencrypt.encryptPassword(req.body.rpassword);
        //var rpassword = req.body.rpassword;
        var phonenumber = req.body.phonenumber;
        var address = req.body.address;
        var addresstwo = req.body.addresstwo;
        var city = req.body.city;
        var country = req.body.country;
        var state = req.body.state;
        var role = req.body.role;

        coll
          .updateOne(
            { _id: _id },
            {
              $set: {
                firstname: firstname,
                lastname: lastname,
                dob: dob,
                gender: gender,
                remailid: remailid,
                rpassword: rpassword,
                phonenumber: phonenumber,
                address: address,
                addresstwo: addresstwo,
                city: city,
                country: country,
                state: state,
                role: role,
              },
            }
          )
          .then((data) => {
            console.log(data);
            res.send(data);
            //server.close();
          });
      });
    // });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteUser(req, res) {
  try {
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("user");
        var _id = parseInt(req.params._id); //comes in the url

        coll
          .deleteOne({ _id: _id }) //import required here for ObjectId from mongodb library
          .then((data) => {
            console.log(data);
            res.send(data);
            //server.close();
          });
      });
    // });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { listUsers, addUser, updateUser, deleteUser };
