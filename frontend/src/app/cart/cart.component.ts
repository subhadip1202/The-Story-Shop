import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdetailsService } from '../bookdetails.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // name:Number = 0;
  // qty:Number = myname.value
  cartproducts:any
  prtotal : number = 0

  total : number = 0
  myname: any;
  constructor (private route :ActivatedRoute , private bookService :BookdetailsService){

    this.bookService.getCartDeatils(this.route.snapshot.params['id']).subscribe(data =>{
      console.log(data)
      this.cartproducts = data;
      
     
    })
  }

  ngOnInit(): void {
  }

  // this.qty=name.value;
  calculatea(price,qty)
  {
    console.log(qty*price)
    this.prtotal=1*price
    this.total += 1*price;

  }

  calculates(price,qty)
  {
    if(this.total <= 0){
      alert("invalid")
    }
    else{
    console.log(qty*price)
    this.prtotal=1*price
    this.total -= 1*price;
    }
  }
  calculateToT(){
    console.log(this.total)
  }


  checkout(aa){
    console.log(aa)
  }

  removeitem(index){
    
    this.bookService.removeCartProduct(index).subscribe(data=>{
      console.log(data)

    }); 
window.location.reload();
alert('Item Removed From Cart')
  }
}
