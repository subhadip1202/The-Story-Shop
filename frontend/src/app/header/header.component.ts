import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http'
import {BookdetailsService} from '../bookdetails.service'
import { Router } from '@angular/router'
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  details : any
  username = '';
  useremail = '';
  searchText;
  check : boolean = true;
    constructor ( private bookService :BookdetailsService,
                  private _router :Router,
                  private myService:MyserviceService
                ){
  
      this.bookService.getBookDetails().subscribe(data =>{
        console.log(data)
        this.details = data;
        })

    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )

    // this.myService.getUserEmail()
    // .subscribe(
    //   data => this.useremail= data.toString(),
    //   error => this._router.navigate(['/main/login'])
      
    // )

      }
    ngOnInit(): void {
    }

    logout(){
      localStorage.removeItem('token');
      this._router.navigate(['/main/login']);
    }
 
     abc(){
      console.log("hi")
  
    }
     checkf(){
      this.check = false;
    }
    checkd(){
     this.check = true;
     this.bookService.sendClickEvent();
   }

   redic(redirectid){     
    window.location.replace('/testdetails/'+redirectid)
    
   }
  
  }
