var express = require('express')
var router = express.Router();
var book = require('./booksmodel')

router.get("/",  (req, res) =>{  
    try 
    { 
        book.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            // console.log(allDetails)
            res.json(allDetails) ;
            // res.json(allDetails) ;
        }
    }).select('title isbn authors categories')
    }
catch{
    console.log("no data found")
} 
})
//New Ari 
router.get("/getallbooks",  (req, res) =>{  
    try 
    { 
        book.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            // console.log(allDetails)
            res.json(allDetails) ;
            // res.json(allDetails) ;
        }
    })
    }
catch{
    console.log("no data found")
} 
})



router.get("/dod",  (req, res) =>{  
    try 
    { 
        book.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            
            res.json(allDetails.slice(1,7)) ;
            
        }
    })
    }
catch{
    console.log("no data found")
} 
})


router.get("/newarrival1",  (req, res) =>{  
    try 
    { 
        book.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            
            res.json(allDetails.slice(30,33)) ;
            
        }
    })
    }
catch{
    console.log("no data found")
} 
})

router.get("/newarrival2",  (req, res) =>{  
    try 
    { 
        book.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            
            res.json(allDetails.slice(34,37)) ;
            
        }
    })
    }
catch{
    console.log("no data found")
} 
})
router.get("/newarrival3",  (req, res) =>{  
    try 
    { 
        book.find({},(err, allDetails)=> {
        if (err) {
            console.log(err);
        } else {
            
            res.json(allDetails.slice(39,42)) ;
            
        }
    })
    }
catch{
    console.log("no data found")
} 
})


router.get("/category/:id",  (req, res) =>{  

    try 
    {   
        book.find({"categories":req.params.id},(err, allDetails)=> {
            console.log(req.params.id)
            res.json(allDetails);
    })
    }
catch{
    console.log("no data found")
} 
})

router.get("/author/:id",  (req, res) =>{  

    try 
    {   
        book.find({"authors":req.params.id},(err, allDetails)=> {
            // console.log(allDetails)
            res.json(allDetails);
    })
    }
catch{
    console.log("no data found")
} 
})


router.get("/discount/:id",  (req, res) =>{  

    try 
    {   
        book.find({"discount":{$lt:req.params.id}},(err, allDetails)=> {
            // console.log(allDetails)
            res.json(allDetails);
    })
    }
catch{
    console.log("no data found")
    res.send("No Data Found")
} 
})


router.get("/isbn",  (req, res) =>{  

    try 
    {   
        let qtr  = req.query.isbn;
        let qer  = req.query.discount;
        
        book.find({"isbn":req.query.isbn,"discount":req.query.discount},
        (err, allDetails)=> {
            console.log(allDetails)
            res.json(allDetails);
    })
    console.log(qer);
    console.log(qtr);

    }
catch{
    console.log("no data found")
} 
})




router.get("/:id",  (req, res) =>{  
    try 
    { 
          
        book.findById(req.params.id,(err, allDetails)=> {
        
            // console.log(allDetails)
            res.json(allDetails);
        
    })
    }
catch{
    console.log("no data found")
} 
})


router.post("/post",(req,res)=>{
    var newbook = new book(req.body);
    newbook.save((err,data)=>{
        res.json(data)
    })
})



module.exports = router;




// {
//     "title": "Goldmine",
//     "isbn":"1933988687" ,
//     "pageCount": 16 ,
//     "publishedDate": "2009-04-01T07:00:00.000+00:00",
//     "thumbnailUrl" : "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableso...",
//     "shortDescription" : "Unlocking Android: A Developer's Guide provides concise, hands-on inst...",
//     "longDescription" : "Android is an open source mobile phone platform based on the Linux ope...",
//     "status": "PUBLISH",
//     "authors": ["subodh kirttaia"],
//     "categories" :["English"],
//     "price" :121,
//     "currency" :"USD",
//     "discount" : 10,
//     "discountUnits" : "percent"
// }