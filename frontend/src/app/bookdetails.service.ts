import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject } from 'rxjs';
@Injectable()

// ({
// providedIn: 'root'
//  })
export class BookdetailsService {

  id :any
  public listItems = [];
  private subject = new Subject<any>();

  constructor( private books:HttpClient) { }
  getBookDetails(){
    // let apiurl ="https://jsonplaceholder.typicode.com/users";
    let apiurl ="http://localhost:9091/";
    return this.books.get(apiurl);
  }

  getDetails(id: string){
    let apiurl ="http://localhost:9091/"+id;
    console.log(id)
    return this.books.get(apiurl);
  }

  getDoDDetails(){
    let apiurl ="http://localhost:9091/dod";
    return this.books.get(apiurl);
  }

  getNewArrivalDetails1(){
    let apiurl ="http://localhost:9091/newarrival1";
    return this.books.get(apiurl);
  }
  getNewArrivalDetails2(){
    let apiurl ="http://localhost:9091/newarrival2";
    return this.books.get(apiurl);
  }
  getNewArrivalDetails3(){
    let apiurl ="http://localhost:9091/newarrival3";
    return this.books.get(apiurl);
  }

  
  getallbooks(){
    let apiurl ="http://localhost:9091/getallbooks";
    return this.books.get(apiurl);
    
  }
  
  getCatrgoryDetails(id: string){
    let apiurl ="http://localhost:9091/category/"+id;
    console.log(id)
    return this.books.get<any[]>(apiurl);
  }

  getAuthorDetails(id: string){
    let apiurl ="http://localhost:9091/author/"+id;
    console.log(id)
    return this.books.get<any[]>(apiurl);
  }
  
  getDiscoutDetails(id: string){
    let apiurl ="http://localhost:9091/discount/"+id;
    console.log(id)
    return this.books.get<any[]>(apiurl);
  }


  getWishlistDeatils(id: string){
    let apiurl ='http://localhost:9091/wishlist/getuserlist/'+id;
    return this.books.get<any[]>(apiurl);
  }
  addProductTolist(product:any){
    console.log(product)
    
   this.books.post('http://localhost:9091/wishlist', product).subscribe(res=>{
      console.log(res)
    })
  }

  removeProduct(id: string){
    
    const deleteEndPoint='http://localhost:9091/wishlist/removelist/' + id ;
    return this.books.delete(deleteEndPoint);
    
      
  }




  /////cart

  getCartDeatils(id: string){
    let apiurl ='http://localhost:9091/cart/getcartlist/'+id;
    return this.books.get<any[]>(apiurl);
  }
  addProductTocart(product:any){
    console.log(product)
    
   this.books.post('http://localhost:9091/cart', product).subscribe(res=>{
      console.log(res)
    })
  }

  removeCartProduct(id: string){
    
    const deleteEndPoint='http://localhost:9091/cart/removecartitem/' + id ;
    return this.books.delete(deleteEndPoint);
    
      
  }




  sendClickEvent() {
    this.subject.next();
  }
  getClickEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }

  



}
