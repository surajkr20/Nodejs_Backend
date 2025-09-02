const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const userRoutes = require('./routes/user.routes');
const dbConnect = require('./config/db')
dbConnect();

// ejs file setup
app.set('view engine', "ejs");
app.use(express.static('public'));

// set up for req.body data
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// routes
app.use('/user', userRoutes);

app.get('/', (req, res)=>{
    res.render('index')
})

app.post('/get-form-data', (req, res) =>{
    console.log(req.body)
})

app.listen(port, () => {
  console.log(`app listen at port ${port}`);
});
