var tunnel = require("tunnel-ssh");
var MongoClient = require("mongodb").MongoClient;
var ObjectId = require("mongodb").ObjectId;

// const config = {
//   host: "++++",
//   port: 7822,
//   username: "kekkar",
//   password: "*******",
//   dstPort: 27017,
//   localPort: 27018,
// };
var mongoUrl = "mongodb://localhost:27017";

async function listManufacturers(req, res) {
  try {
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("manufacturers");
        coll
          .find()
          .toArray()
          .then((data) => {
            console.log(data); //"value"
            res.send(data);
           // server.close();
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

  // console.log("coll obtained")
}

async function addManufacturers(req, res) {
  try {
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("manufacturers");
        var id = req.body._id;
        var mn = req.body.mName;
        var mp = req.body.mPhoneNo;
        var ml = req.body.mLocation;
        var pop = req.body.PointOfContact;
        var me = req.body.mEmail;

        coll
          .insertOne({
            _id: id,
            mName: mn,
            mPhoneNo: mp,
            mLocation: ml,
            PointOfContact: pop,
            mEmail: me,
          })
          .then((data) => {
            console.log(data); //"value"
            res.send("Inserted: " + id);
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

  // console.log("coll obtained")
}

async function updateManufacturers(req, res) {
  try {
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("manufacturers");
        var id = parseInt(req.params._id);
        var mn = req.body.mName;
        var mp = req.body.mPhoneNo;
        var ml = req.body.mLocation;
        var pop = req.body.PointOfContact;
        var me = req.body.mEmail;

        coll
          .updateOne(
            { _id: id },
            {
              $set: {
                //_id: id,
                mName: mn,
                mPhoneNo: mp,
                mLocation: ml,
                PointOfContact: pop,
                mEmail: me,
              },
            }
          )
          .then((data) => {
            console.log(data); //"value"
            res.send("Updated: " + id);
           // server.close();
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

  // console.log("coll obtained")
}

async function deleteManufacturers(req, res) {
  try {
    // var server = tunnel(config, function (error, server) {
    //   if (error) {
    //     console.log(error);
    //   }
      MongoClient.connect(mongoUrl, function (err, db) {
        var myDB = db.db("Group4");
        var coll = myDB.collection("manufacturers");
        var did = parseInt(req.params.id); //comes in the url
        console.log(did);
        coll
          .deleteOne({ _id: did }) //import required here for ObjectId from mongodb library
          .then((data) => {
            console.log(data); //"value"
            res.send("Deleted:" + data);
           // server.close();
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

  // console.log("coll obtained")
}

module.exports = {
  listManufacturers,
  addManufacturers,
  updateManufacturers,
  deleteManufacturers,
};
