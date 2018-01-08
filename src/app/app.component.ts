import { Component } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public ngProgress: NgProgress) {
  }
  ngOnInit(){
    this.ngProgress.start();
  }
}
