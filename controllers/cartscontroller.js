//const dbutil=require('../config/database.js')
var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
 
async function listCarts(req,res){
  try {
    // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
    //   if(error){
    //   console.log(error)
    //   }
      MongoClient.connect("mongodb://localhost:27017", function(err, db){
  var myDB = db.db("Group4");
  var coll = myDB.collection("cart")
  console.log("connected")
  console.log("coll obtained")
  //  arr=coll.find();
 
  //  arr.forEach(item=>{
  //    console.log(item)
  //  })
  //  res.json(arr)
  coll.find().toArray()
        .then(data => {
            console.log(data[0]) //"value"
            res.send(data)
            //server.close()
        },5000);
 
});
//MongoClient.close();
// });
// // Use a listener to handle errors outside the callback
// server.on('error', function(err){
//    console.error('Something bad happened:', err);
// });
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   
   // console.log("coll obtained")
   
}
async function addCarts(req,res){
  try {
    // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
    //   if(error){
    //   console.log(error)
    //   }
      MongoClient.connect("mongodb://localhost:27017", function(err, db){
  var myDB = db.db("Group4");
  var coll = myDB.collection("cart")
  console.log("connected",req.body)
  console.log("coll obtained")
  var id=req.body._id
  var uId=req.body.uId
  var total=req.body.total
  
  var products=req.body.products


  coll.insertOne({_id:id,uId:uId,total:total,products:products})
        .then(data => {
            console.log(data) //"value"
            res.send("Inserted: "+id)
            //server.close()
        },5000);

});
//MongoClient.close();
// });
// // Use a listener to handle errors outside the callback
// server.on('error', function(err){
//    console.error('Something bad happened:', err);
// });
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   
   // console.log("coll obtained")
   
}
async function updateCart(req,res){
  try {
    // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
    //   if(error){
    //   console.log(error)
    //   }
      MongoClient.connect("mongodb://localhost:27017", function(err, db){
  var myDB = db.db("Group4");
  var coll = myDB.collection("cart")
  console.log("connected",req.body)
  console.log("coll obtained")
  var id=parseInt(req.params.id)
  console.log("updating id: ",id)
  
  var uId=req.body.uId
  var total=req.body.total
  var products=req.body.products
 


  coll.updateOne({_id:id},{$set:{uId:uId,total:total,products:products}})
        .then(data => {
            console.log(data) //"value"
            res.send("Updated: "+id)
            //server.close()
        },5000);

});
//MongoClient.close()
// });
// // Use a listener to handle errors outside the callback
// server.on('error', function(err){
//    console.error('Something bad happened:', err);
// });
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   
   // console.log("coll obtained")
   
}
async function deleteCart(req,res){
  try {
    // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
    //   if(error){
    //   console.log(error)
    //   }
      MongoClient.connect("mongodb://localhost:27017", function(err, db){
  var myDB = db.db("Group4");
  var coll = myDB.collection("cart")
  console.log("connected")
  console.log("coll obtained")
  var _id=parseInt(req.params.id)//comes in the url
  
  coll.deleteOne({ '_id':_id })//import required here for ObjectId from mongodb library
        .then(data => {
            console.log(data) //"value"
            res.send("Deleted:"+data)
           // server.close()
        },5000);
 
});
//MongoClient.close();
// });
// // Use a listener to handle errors outside the callback
// server.on('error', function(err){
//    console.error('Something bad happened:', err);
// });
      } catch (err) {
        res.status(500).json({ error: err.message })
      }
   
   
   // console.log("coll obtained")
 
   
}





// async function listCart(req,res){
//   try {
//     var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
//       if(error){
//       console.log(error)
//       }
//       MongoClient.connect("mongodb://localhost:27018", function(err, db){
//   var myDB = db.db("Group4");
//   var coll = myDB.collection("cart")
//   console.log("connected")
//   console.log("coll obtained")
//   var cid=req.params.id
//   console.log(cid)
//   //  arr=coll.find();
 
//   //  arr.forEach(item=>{
//   //    console.log(item)
//   //  })
//   //  res.json(arr)
//   coll.findOne().toArray()
//         .then(data => {
//             console.log(data[0]) //"value"
//             res.send(data)
//             server.close()
//         },5000);
 
// });
// //MongoClient.close();
// });
// // Use a listener to handle errors outside the callback
// server.on('error', function(err){
//    console.error('Something bad happened:', err);
// });
//       } catch (err) {
//         res.status(500).json({ error: err.message })
//       }
   
   
//    // console.log("coll obtained")
   
// }

 
module.exports={listCarts,addCarts,updateCart,deleteCart}

