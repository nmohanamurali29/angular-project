import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  model: any = {};
  constructor(public ngProgress: NgProgress) {
  }

  ngOnInit() {
    this.ngProgress.start();
    this.ngProgress.done();
  }

  register(){
    console.log(this.model);
  }

}
