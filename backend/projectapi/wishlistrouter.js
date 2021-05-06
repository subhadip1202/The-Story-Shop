var express = require('express')
var router  = express.Router();
var wishlist = require("./wishlistmodel")

router.get("/getlist",(req,res)=>{
    // console.log("hii")
    try
       {
        wishlist.find({},(err, allDetails)=> {
            if (err) {
                console.log(err);
            } else {
                // console.log("hii")
                // console.log(allDetails)
                res.json(allDetails) ;
            }
        })
    }
    catch{
        console.log("no data found")
    } 
    })


    router.get("/getuserlist/:id",(req,res)=>{
        try
           {
            wishlist.find({"email":req.params.id},(err, allDetails)=> {
                if (err) {
                    console.log(err);
                } else {
                    // console.log("hii")
                    // console.log(allDetails)
                    res.json(allDetails) ;
                }
            })
        }
        catch{
            console.log("no data found")
        } 
        })

    router.post("/",(req,res)=>{
        //console.log()
        var newlist = new wishlist(req.body);
        newlist.save((err,data)=>{
            console.log("hi i am post")


            res.json(data)
        })
    })


    router.delete("/removelist/:id",(req,res)=>{
        wishlist.findOneAndDelete({"_id":req.params.id},(err,allDetails)=>{
            console.log("deleted")
            res.json(allDetails)


        })
    })



module.exports = router;

