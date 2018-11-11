const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const items= require('./routes/api/items');
const users= require('./routes/api/users');
// const passport= require('passport');
// const postComment= require('./routes/api/post');
// const profile= require('./routes/api/profile');


const app=express();

//bodyParser middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//DB Config
const db =require('./config/keys').mongoURI;

//Connect to mongo
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//passport middleware
// app.use(passport.initialize());

//Passport Config
// require('./config/passport')(passport);

//Use routes
app.use('/api/items', items);
app.use('/api/users', users);
// app.use('/api/profile', items);
// app.use('/api/postComment', items);

// app.get("/",(req, res)=>{
//     res.send("hello");
// })

//an enviromental variable
const port = process.env.PORT || 5000;

//have the application listen to this port
app.listen(port, () => console.log('Server started at port '+port));
