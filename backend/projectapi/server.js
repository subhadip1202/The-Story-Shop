var express = require('express');
var app = express();
var cors = require("cors")
app.use(cors());

var booksrouter = require('./booksrouter')
var userrouter = require('./userrouter')
var wishlistrouter = require('./wishlistrouter')
var cartrouter = require('./cartrouter')



app.use(express.urlencoded({ extended :true}))
app.use(express.json())

app.use("/",booksrouter)

app.use("/dod",booksrouter)
app.use("/newarrival1",booksrouter)
app.use("/newarrival2",booksrouter)
app.use("/newarrival3",booksrouter)
app.use("/getallbooks",booksrouter)

app.use("/category/'id'",booksrouter)
app.use("/isbn",booksrouter)
app.use("/author/'id'",booksrouter)
app.use("/discount/'id'",booksrouter)

app.use("/post",booksrouter)

app.use("/cat",booksrouter)

app.use("/id",booksrouter)


// user sectio 
app.use("/user",userrouter)

//wishlist

app.use("/wishlist",wishlistrouter)
app.use("/getuserlist/'id'",wishlistrouter)

app.use("/removelist/'id'",wishlistrouter)

//cart
app.use("/cart",cartrouter)
app.use("/getcartlist/'id'",cartrouter)
app.use("/removecartitem/'id'",cartrouter)





app.listen(9091,()=>{
    console.log("server running on 9091")
})