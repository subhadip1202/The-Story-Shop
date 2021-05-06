const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/project',{useNewUrlParser:true,useUnifiedTopology:true});
// mongoose.connect('mongodb+srv://usersubha:subha@1202@cluster0.uz3rl.mongodb.net/project?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});


mongoose.connect('mongodb+srv://usersubha:subha@1202@cluster0.uz3rl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});



const db = mongoose.connection;

var Schema = new mongoose.Schema({

title : String,
isbn : String,
pageCount : Number,
publishedDate : Date,
thumbnailUrl : String,
shortDescription : String,
longDescription : String,
status : String,
authors : Array,
categories : Array,
price : Number,
currency : String,
discount : Number,
discountUnits : String
    })

var Book = mongoose.model('Book',Schema)
module.exports = Book;



//email,[bookid]
//bookid.foreach(x=>{this.bookservice.getuserbyid(x).subscibe(data=>{push})})