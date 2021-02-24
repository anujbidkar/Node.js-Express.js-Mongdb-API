const mongoose = require('mongoose');
const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 3100


mongoose.connect('mongodb+srv://wisdomsprouts:wisdomsprouts@cluster0.m0n8c.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
 {useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(()=> {
    console.log("DB CONNECTED")
})

//Middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/productRoutes");






app.use("/api", categoryRoutes);
app.use("/api", productRoutes);




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
