import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';

import { BookdetailsService } from '../bookdetails.service';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {
  discountdetails :any[] = []

  filterdis = { 
              pzf :false,
              pft:false,
              ptf :false,
              pff:false,
              paf:false
  }

  username=''
  products: any = [];
  public singleProduct : any=[];
  public singleProductt : any=[];


  constructor( 
    private route :ActivatedRoute ,
     private bookService :BookdetailsService,
     private myService:MyserviceService,
      private _router: Router
      ) { 
    this.bookService.getDiscoutDetails(this.route.snapshot.params['id']).subscribe(data =>{
      this.discountdetails  = data;
      console.log(data)
    })

    this.bookService.getallbooks().subscribe(data=>{
      console.log(data)
      this.products = data;
    })

    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )
    
  } 

  ngOnInit(): void {
  }

  clearallpr(){
    this.filterdis.pzf  =false 
    this.filterdis.pft  =false
    this.filterdis.ptf  =false
    this.filterdis.pff  =false
    this.filterdis.paf  =false

  }




  loadsortasc(){
     this.discountdetails.sort((a,b)=>a.price -b.price );  
  }


   loadsortdsc(){
     this.discountdetails.sort((a,b)=>b.price - a.price );
  }

  loadsortatoz()
  {
    this.discountdetails.sort((a,b)=>a.title.localeCompare(b.title)); 
  }  

  loadsortztoa(){
    this.discountdetails.sort((a,b)=>b.title.localeCompare(a.title)); 
  }


  loadpage(){
    window.location.reload()

  }


  discountFilteredProducts() {
    return  this.discountdetails.filter(element => 
      ( 
        ( element.price <= 500 && this.filterdis.pzf )||
        ( element.price >= 501 && element.price <= 2000  && this.filterdis.pft)||
        ( element.price >= 2001 && element.price <= 4000  && this.filterdis.ptf)|| 
        ( element.price >= 4001 && element.price <= 5000  && this.filterdis.pff)||
        ( element.price >= 5001  && this.filterdis.paf) || 
  
        ! (this.filterdis.pzf  ||
          this.filterdis.ptf  ||
          this.filterdis.ptf  ||
          this.filterdis.pff  ||
          this.filterdis.paf))
      );
  }

  
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
  }

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
