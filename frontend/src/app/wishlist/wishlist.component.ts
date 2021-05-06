import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdetailsService } from '../bookdetails.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishproducts:any
  constructor (private route :ActivatedRoute , private bookService :BookdetailsService){

    this.bookService.getWishlistDeatils(this.route.snapshot.params['id']).subscribe(data =>{
      console.log(data)
      this.wishproducts = data;
      
     
    })
  }
  ngOnInit(): void {
  }

  // removeitem(prid:number, index:number){
  //   console.log(index)  
  //   this.wishproducts.filter(element => {

  //      element.wishlists.filter(ele =>{
  //        if (prid === ele._id){
  //         console.log(ele._id)
  //         element.wishlists.splice(index,1)
  //        }
         
  //      })   
  //   });
    

  // }

  removeitem(index){
    console.log(index) 
    this.bookService.removeProduct(index).subscribe(data=>{
      console.log(data)

    }); 
window.location.reload();
alert('Item Removed From Wishlist')
  }
}
