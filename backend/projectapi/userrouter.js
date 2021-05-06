var express = require('express')
var router  = express.Router();
var user    = require("./usermodel")




router.get("/test",(req,res)=>{
    console.log("hii")
try
   {
        user.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            console.log("hii")
            console.log(allDetails)
            res.json(allDetails) ;
        }
    })
}
catch{
    console.log("no data found")
} 
})


router.post("/",(req,res)=>{
    //res.send("hi i am post")
    var newuser = new user(req.body);
    newuser.save((err,data)=>{
        res.json(data)
    })
})

module.exports = router;



