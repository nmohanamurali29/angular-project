import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  model: any = {};
  constructor(public ngProgress: NgProgress) {
  }
  
  ngOnInit(){
    this.ngProgress.start();
    this.ngProgress.done();
  }
  login(){
    console.log(this.model);
  }
}
