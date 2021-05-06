import { Component, OnInit } from '@angular/core';

import { ActivatedRoute,Router} from '@angular/router'
import {BookdetailsService} from '../bookdetails.service'
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  bookdetails: any
  username=''
  public singleProductt : any=[];
  products: any = [];


  constructor(private route :ActivatedRoute , 
    private bookService :BookdetailsService,
    private myService:MyserviceService,
      private _router: Router
      ) { 
    
    this.bookService.getDetails(this.route.snapshot.params['id']).subscribe(data =>{
      this.bookdetails=data;
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
    // console.log(this.route.snapshot.params)
  }
  
  
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

