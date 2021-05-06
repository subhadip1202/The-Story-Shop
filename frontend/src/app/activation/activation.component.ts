import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  activated: Boolean = false;
  message: String = 'Activation in process please wait...';
  token: String = '';
  constructor(private router: ActivatedRoute, private myservice: MyserviceService) { }

  ngOnInit() {
    const token = this.router.snapshot.queryParams['key'];

    this.myservice.activateUser(token).subscribe(
      data => this.activated = true,
      error => this.message = error.error.message
    )
  }

}
