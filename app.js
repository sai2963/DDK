const express=require("express")
const path=require('path')
const autroutes=require("./routes/auth.route")
const db=require('./data/database')
const app=express();

app.use(autroutes);
app.use(express.static('views/styles'));
app.use(express.static('images'));
app.set('view engine' ,'ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.redirect('/signup')
})
db.connectToDatabase().then(()=>{
    app.listen(3000,()=>{
        console.log('Server is Running at 3000')
    })
}).catch(function(error){
    console.log('Failed to connect the database');
    console.log(eror);
})
