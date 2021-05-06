import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookdetailsService } from '../bookdetails.service';


@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authordetails :any[] = []

  constructor(private route :ActivatedRoute ,
    private bookService :BookdetailsService) { 
      this.bookService.getAuthorDetails(this.route.snapshot.params['id']).subscribe(data=>{
        this.authordetails = data;

      })
    }

  ngOnInit(): void {
  }

}
