const mongodbStore=require('connect-mongodb-session');
const expressSession=require('express-session');
function createSessionStore(){
    
    const MongoDBStore=mongodbStore(expressSession);
    const store=new MongoDBStore({
        uri:'mongodb://localhost:27017',
        databaseName:'online-shop',
        collection:'session'
    });
    return store;
}
function createSessionConfig(){
    return{
        secret:'super-secret',
        resave:false,
        saveUninitialized:false,
        store:createSessionStore(), // Corrected typo here
        cookie:{
            maxAge:2*24*60*60*1000
        }
    };
}

module.exports=createSessionConfig;