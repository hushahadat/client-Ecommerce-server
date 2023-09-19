//const dbutil=require('../config/database.js')
var tunnel = require('tunnel-ssh');
var MongoClient = require('mongodb').MongoClient;
// const utilencrypt=require('../services/encrypt_password')//encrypt and intall npm install crypto-js
 
async function listSuppliers(req,res){
  console.log("method called")
  console.log(req.method)
  try {
   
    // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
    //   if(error){
    //   console.log(error)
    //   }
      MongoClient.connect("mongodb://localhost:27017", function(err, db){
  var myDB = db.db("Group4");
  var coll = myDB.collection("suppliers")
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
           // server.close()
        });
        // setTimeout(function(){
        //   // if(count>1)
        //   // {
        //     server.close();
        //   // }
        // },30000);
       
});
// MongoClient.disconnect()
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
async function addSuppliers(req,res){
  console.log("in add suppliers"+req.method)
    try {
      var count=0;
      // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
      //   if(error){
      //   console.log(error)
      //   }
      
        MongoClient.connect("mongodb://localhost:27017", function(err, db){
    var myDB = db.db("Group4");
    var coll = myDB.collection("suppliers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=req.body._id
    console.log("id adding"+id)
    var sN=req.body.sName
    var sL=req.body.sLocation
    var sC=req.body.sContact
    var sE=req.body.sEmail
    count=count+1; 

    coll.insertOne({_id:id,sName:sN,sLocation:sL,sContact:sC,sEmail:sE})
          .then(data => {
              console.log(data) //"value"
              res.send("Inserted: "+id)
              //server.close()
          });
          // setTimeout(function(){
          //   if(count>1){
             
          //     server.close();
          //   }
          // },30000);
         
  });
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
  async function updateSuppliers(req,res){
    try {
      var count=0;
      // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
      //   if(error){
      //   console.log(error)
      //   }
        MongoClient.connect("mongodb://localhost:27017", function(err, db){
    var myDB = db.db("Group4");
    var coll = myDB.collection("suppliers")
    console.log("connected",req.body)
    console.log("coll obtained")
    var id=parseInt(req.params.id)
    console.log("updating id: ",id)
    var sN=req.body.sName
    var sL=req.body.sLocation
    var sC=req.body.sContact
    var sE=req.body.sEmail
    count=count+1;
 
    coll.updateOne({_id:id},{$set:{sName:sN,sLocation:sL,sContact:sC,sEmail:sE}})
          .then(data => {
              console.log(data) //"value"
              res.send("Updated: "+id)
              //server.close()
          });
          // setTimeout(function(){
          //   if(count>=1){
             
          //     server.close();
          //   }
          // },30000);
 
  });
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
  async function deleteSuppliers(req,res){
    try {
      // var count=0;
      // var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
      //   if(error){
      //   console.log(error)
      //   }
        MongoClient.connect("mongodb://localhost:27017", function(err, db){
    var myDB = db.db("Group4");
    var coll = myDB.collection("suppliers")
    console.log("connected")
    console.log("coll obtained")
    var did=parseInt(req.params.id)//comes in the url
    console.log(did)
    // count=count+1;
    coll.deleteOne({ "_id" : (did) })//import required here for ObjectId from mongodb library
          .then(data => {
              console.log(data) //"value"
              res.send("Deleted:"+data)
              //server.close()
          });
          // setTimeout(function(){
          //   // if(count>=1){
          //     server.close();
          //   // }
          // },30000);
        
   
  });
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
  //encrypt
  // async function addUsers(req,res){
  //   try {
  //     var count=0;
  //     var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
  //       if(error){
  //       console.log(error)
  //       }
  //       MongoClient.connect("mongodb://localhost:27018", function(err, db){
  //   var myDB = db.db("Group4");
  //   var coll = myDB.collection("users")
  //   console.log("connected",req.body)
  //   console.log("coll obtained")
  //   var id=req.body._id
  //   console.log("id adding"+id)
  //   var sN=req.body.uName
    
  //   var sL=req.body.email
  //   var sC=req.body.password
  //   sC=utilencrypt.encryptPassword(sC)
  //   console.log("Encrypted sName "+sC)

  //   var decryptedSupplierName=utilencrypt.decryptPassword(sC)
  //   console.log("Decrypted sName: "+decryptedSupplierName)
  //   var sE=req.body.role
   
 
  //   coll.insertOne({_id:id,uName:sN,email:sL,password:sC,role:sE})
  //         .then(data => {
  //             console.log(data) //"value"
  //             res.send("Inserted: "+id)
  //             server.close()
  //         });
  //         setTimeout(function(){
  //           if(count>1){
  //             server.close();
  //           }
  //         },30000);
         
  // });
  // });
  // Use a listener to handle errors outside the callback
  // server.on('error', function(err){
  //    console.error('Something bad happened:', err);
  // });
  //       } catch (err) {
  //         res.status(500).json({ error: err.message })
  //       }
     
     
     // console.log("coll obtained")
     
  // }
  //encrypt ends add in
  // async function listSuppliersById(req,res){
  //   try {
  //     var count=0;
  //     var server = tunnel({host: '++++',port:7822,username:'kekkar',password:'*******', dstPort: 27017,localPort: 27018}, function (error, server) {
  //       if(error){
  //       console.log(error)
  //       }
    //     MongoClient.connect("mongodb://localhost:27018", function(err, db){
    // var myDB = db.db("Group4");
    // var coll = myDB.collection("suppliers")
    // console.log("connected")
    // console.log("coll obtained")
    // var gid=parseInt(req.params.id)//comes in the url
    // console.log(gid)
    //  arr=coll.find();
   
    //  arr.forEach(item=>{
    //    console.log(item)
    //  })
    //  res.json(arr)
    // coll.findOne({_id:(gid)}).toArray()
    //       .then(data => {
    //           console.log(data[0]) //"value"
    //           res.send(data)
    //           server.close()
    //       });
    //       setTimeout(function(){
    //         // if(count>1)
    //         {
    //           server.close();
    //         }
    //       },30000);
         
  // });
  // MongoClient.disconnect()
  // });
  // Use a listener to handle errors outside the callback
  // server.on('error', function(err){
  //    console.error('Something bad happened:', err);
  // });
  //       } catch (err) {
  //         res.status(500).json({ error: err.message })
  //       }
     
      
     // console.log("coll obtained")
     
  // }




 
module.exports={listSuppliers,addSuppliers,updateSuppliers, deleteSuppliers}

 