import { Component, Input, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookdetailsService } from '../bookdetails.service';
import { MyserviceService } from '../myservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})




export class ProductComponent implements OnInit {

  clickEventsubscription:Subscription;

  prdetail : any
  newarrival1 :any
  newarrival2 :any
  newarrival3 :any
  username=''
  products: any = [];
  public singleProduct : any=[];
  public singleProductt : any=[];

  wishproducts:any
  addToWishlist : boolean= false;

check : boolean = true;
  constructor ( private bookService :BookdetailsService,
                private myService:MyserviceService,
                private _router: Router,
                private route :ActivatedRoute
     ){

    this.bookService.getDoDDetails().subscribe(data =>{
      console.log(data)
      this.prdetail = data;
      
     
    })

    this.bookService.getNewArrivalDetails1().subscribe(data =>{
      console.log(data)  
      this.newarrival1 =data;
    })
    this.bookService.getNewArrivalDetails2().subscribe(data =>{
      console.log(data)  
      this.newarrival2 =data;
    })
    this.bookService.getNewArrivalDetails3().subscribe(data =>{
      console.log(data)  
      this.newarrival3 =data;
    })
    
    this.bookService.getallbooks().subscribe(data=>{
      console.log(data)
      this.products = data;
    })

    this.bookService.getWishlistDeatils(this.route.snapshot.params['id']).subscribe(data =>{
      console.log(data)
      this.wishproducts = data;
      
     
    })

    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )

    this.clickEventsubscription =
    this.bookService.getClickEvent().subscribe(()=>{
      this.check
    })


    
    }

   

  ngOnInit(): void {
  }
 
  checkd(){
    this.check=true
  }

  countDownDate = new Date("May 8,2021").getTime();
  demo : any;
  x = setInterval(()=>{
    var now = new Date().getTime();
    var distance = this.countDownDate - now ;
    var days = Math.floor(distance/(1000*60*60*24));
    var hours = Math.floor((distance % (1000*60*60*60) / (1000*60*60)))
    var minuits= Math.floor((distance %(1000*60*60))/(1000*60))
    var seconds = Math.floor((distance % (1000*60))/1000)
    this.demo = days + " d : " + hours +" h : " + minuits +" m : "
     + seconds + " s "
    
    if(distance < 0){
      clearInterval(this.x);
      this.demo = "expired"
    }
  })



  addToList(productId,uname){
    

    console.log(productId,uname)
    
    this.singleProduct = this.products.filter(product => {
     
      return product._id === productId;
    });

  
    this.singleProduct[1]=uname;
    

    const data ={ 
                    'wishlists': [ this.singleProduct[0] ],
                    'email': this.singleProduct[1] 
                    
  }
  console.log(this.singleProduct)
    this.bookService.addProductTolist(data)
    alert(" Added To Wishlist ")
    this.addToWishlist= true
  }



  // checkproduct(prid){
  //   this.wishproducts.filter(element => {

  //          element.wishlists.filter(ele =>{
  //            if (prid === ele._id){
  //             console.log(ele._id)
  //            }
             
  //          })   
  //       });
  // }
//////cart


addToCart(productId,uname){

  console.log(productId,uname)

  this.singleProductt = this.products.filter(product => {
   
    return product._id === productId;
  });


  this.singleProductt[1]=uname;
  

  const data ={ 
                  'products': [ this.singleProductt[0] ],
                  'email': this.singleProductt[1] 
                  
}
console.log(this.singleProductt)
  this.bookService.addProductTocart(data)
  alert(" Added To Cart ")
}






}

