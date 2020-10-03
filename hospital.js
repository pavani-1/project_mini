const express=require('express');
const hospital=express();

const bodyParser =require('body-parser');
hospital.use(bodyParser.json());


const mongoose=require('mongoose');
const postsRoute=require('./routes/posts');
hospital.use('/posts',postsRoute);

//hospital
const hospRoute=require('./routes/ventilator');

hospital.use('/',hospRoute);


mongoose.connect('mongodb://localhost/hospital2',{useUnifiedTopology:true, useNewUrlParser:true},()=>
{
    mongoose.Promise=global.Promise;
    console.log('connected MongoDB');
    
});



hospital.listen(3000);