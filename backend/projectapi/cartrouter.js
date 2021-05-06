var express = require('express')
var router  = express.Router();
var cart = require("./cartmodel")

router.get("/getcart",(req,res)=>{
    // console.log("hii")
    try
       {
        cart.find({},(err, allDetails)=> {
            if (err) {
                console.log(err);
            } else {
                console.log(allDetails)
                res.json(allDetails) ;
            }
        })
    }
    catch{
        console.log("no data found")
    } 
    })

    
    router.get("/getcartlist/:id",(req,res)=>{
        try
           {
           cart.find({"email":req.params.id},(err, allDetails)=> {
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
        var newcart = new cart(req.body);
        newcart.save((err,data)=>{
            console.log("hi i am post")


            res.json(data)
        })
    })



    router.delete("/removecartitem/:id",(req,res)=>{
        cart.findOneAndDelete({"_id":req.params.id},(err,allDetails)=>{
            console.log("item removed")
            res.json(allDetails)


        })
    })



module.exports = router;

