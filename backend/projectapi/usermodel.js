const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://usersubha:subha@1202@cluster0.uz3rl.mongodb.net/project?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});


// mongoose.connect('mongodb://127.0.0.1:27017/project',{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connect('mongodb+srv://usersubha:subha@1202@cluster0.uz3rl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});


const db = mongoose.connection;

var userSchema = new mongoose.Schema({

email : String,
mobileno : Number,
password : String,

    })

var user = mongoose.model('user',userSchema)
module.exports = user;