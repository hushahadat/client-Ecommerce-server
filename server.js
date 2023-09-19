const fs = require("fs").promises;
const path = require("path");
const express = require("express"); //npm i express --save
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productscontroller = require("./controllers/productscontroller");
const manufacturerscontroller = require("./controllers/manufacturerscontroller");
const supplierscontroller = require("./controllers/supplierscontroller");
const usercontroller = require("./controllers/usercontroller");
const cartscontroller=require('./controllers/cartscontroller')
//products
app.get("/products", productscontroller.listProducts);
app.post("/products", productscontroller.addProducts);
app.put("/products/:id", productscontroller.updateProducts);
app.delete("/products/:id", productscontroller.deleteProducts);

//manufacturer
app.get("/manufacturers", manufacturerscontroller.listManufacturers);
app.post("/manufacturers", manufacturerscontroller.addManufacturers);
app.put("/manufacturers/:_id", manufacturerscontroller.updateManufacturers);
app.delete("/manufacturers/:id", manufacturerscontroller.deleteManufacturers);

//supplier
app.get("/suppliers", supplierscontroller.listSuppliers);
app.post("/suppliers", supplierscontroller.addSuppliers);
app.put("/suppliers/:id", supplierscontroller.updateSuppliers);
app.delete("/suppliers/:id", supplierscontroller.deleteSuppliers);

//user

app.get("/user", usercontroller.listUsers);
app.post("/user", usercontroller.addUser);
app.put("/user/:_id", usercontroller.updateUser);
app.delete("/user/:_id", usercontroller.deleteUser);

//cart

app.get('/cart', cartscontroller.listCarts)
app.post('/cart', cartscontroller.addCarts)
app.put('/cart/:id', cartscontroller.updateCart)
app.delete('/cart/:id', cartscontroller.deleteCart)

app.listen(port, () => console.log(`Server listening on port ${port}`));
