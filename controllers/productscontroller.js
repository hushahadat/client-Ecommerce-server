var tunnel = require("tunnel-ssh");
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;
// const utilencrypt=require('../services/encrypt_password')

async function listProducts(req, res) {
  try {
    // var server = tunnel(
    //   {
    //     host: "++++",
    //     port: 7822,
    //     username: "kekkar",
    //     password: "*******",
    //     dstPort: 27017,
    //     localPort: 27018,
    //   },
    //   function (error, server) {
    //     if (error) {
    //       console.log(error);
    //     }
        MongoClient.connect("mongodb://localhost:27017", function (err, db) {
          var myDB = db.db("Group4");
          var coll = myDB.collection("products");
          console.log("connected");
          console.log("coll obtained");

          coll
            .find()
            .toArray()
            .then((data) => {
              console.log(data); //"value"
              // data.forEach(s=>{
              //   p.pName=utilencrypt.decryptPassword(pN)
              //   console.log("Decrypted pName: "+decryptedProductName)
              // })
              res.send(data);
              //server.close();
            });
        //   setTimeout(function () {
        //     //server.close();
        //   }, 30000);
         });
        // MongoClient.close()
      //});
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

async function addProducts(req, res) {
  try {
    var count = 1;
    // var server = tunnel(
    //   {
    //     host: "++++",
    //     port: 7822,
    //     username: "kekkar",
    //     password: "*******",
    //     dstPort: 27017,
    //     localPort: 27018,
    //   },
    //   function (error, server) {
    //     if (error) {
    //       console.log(error);
    //     }
        MongoClient.connect("mongodb://localhost:27017", function (err, db) {
          var myDB = db.db("Group4");
          var coll = myDB.collection("products");
          console.log("connected", req.body);
          console.log("coll obtained");
          var id = req.body._id;
          var pN = req.body.pName;

          // pN=utilencrypt.encryptPassword(pN)
          //   console.log("Encrypted pName "+pN)

          // var decryptedProductName=utilencrypt.decryptPassword(pN)
          // console.log("Decrypted pName: "+decryptedProductName)

          var pS = req.body.pStyle;
          var pB = req.body.pBattery;
          var pF = req.body.pFittingRange;
          var pR = req.body.pRemarks;
          var pP = req.body.price;
          var pSupp = req.body.supplier_id;
          var pManu = req.body.manufacturer_id;
          var img = req.body.img_path;
          count = count + 1;

          coll
            .insertOne({
              _id: id,
              pName: pN,
              pStyle: pS,
              pBattery: pB,
              pFittingRange: pF,
              pRemarks: pR,
              price: pP,
              supplier_id: pSupp,
              manufacturer_id: pManu,
              img_path: img,
            })
            .then((data) => {
              console.log(data); //"value"
              res.send("Inserted: " + id);
              //server.close();
            });
          // setTimeout(function () {
          //   if (count > 1) {
          //    // server.close();
          //   }
          // }, 30000);
        });
        // MongoClient.close()
    //   });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

// update products
async function updateProducts(req, res) {
  try {
    // var server = tunnel(
    //   {
    //     host: "++++",
    //     port: 7822,
    //     username: "kekkar",
    //     password: "*******",
    //     dstPort: 27017,
    //     localPort: 27018,
    //   },
    //   function (error, server) {
    //     if (error) {
    //       console.log(error);
    //     }
        MongoClient.connect("mongodb://localhost:27017", function (err, db) {
          var myDB = db.db("Group4");
          var coll = myDB.collection("products");
          console.log("connected", req.body);
          console.log("coll obtained");
          var id = parseInt(req.params.id);
          console.log("updating id: ", id);
          var id = req.body._id;
          var pN = req.body.pName;
          var pS = req.body.pStyle;
          var pB = req.body.pBattery;
          var pF = req.body.pFittingRange;
          var pR = req.body.pRemarks;
          var pP = req.body.price;
          var pSupp = req.body.supplier_id;
          var pManu = req.body.manufacturer_id;
          var img = req.body.img_path;

          coll
            .updateOne(
              { _id: id },
              {
                $set: {
                  pName: pN,
                  pStyle: pS,
                  pBattery: pB,
                  pFittingRange: pF,
                  pRemarks: pR,
                  price: pP,
                  supplier_id: pSupp,
                  manufacturer_id: pManu,
                  img_path: img,
                },
              }
            )
            .then((data) => {
              console.log(data); //"value"
              res.send("Updated: " + id);
              //server.close();
            });
          // setTimeout(function () {
          //   //server.close();
          // }, 30000);
        });
        // MongoClient.close()
    //   });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

async function deleteProducts(req, res) {
  try {
    // var server = tunnel(
    //   {
    //     host: "++++",
    //     port: 7822,
    //     username: "kekkar",
    //     password: "*******",
    //     dstPort: 27017,
    //     localPort: 27018,
    //   },
    //   function (error, server) {
    //     if (error) {
    //       console.log(error);
    //     }
        MongoClient.connect("mongodb://localhost:27017", function (err, db) {
          var myDB = db.db("Group4");
          var coll = myDB.collection("products");
          console.log("connected");
          console.log("coll obtained");
          var did = parseInt(req.params.id); //comes in the url
          console.log(did);
          coll
            .deleteOne({ _id: did }) //import required here for ObjectId from mongodb library
            .then((data) => {
              console.log(data); //"value"
              res.send("Deleted:" + data);
              //server.close();
            });
          // setTimeout(function () {
          //   //server.close();
          // }, 30000);
        });
    //     // MongoClient.close()
    //   });
    // // Use a listener to handle errors outside the callback
    // server.on("error", function (err) {
    //   console.error("Something bad happened:", err);
    // });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }

  // console.log("coll obtained")
}

module.exports = { listProducts, addProducts, updateProducts, deleteProducts };
