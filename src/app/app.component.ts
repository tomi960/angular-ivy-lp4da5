import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  width = 100;
  height = 100;
  currentClass = 'gradient-multicolor';


  widthChange(event){
    this.width = this.width + event;
  }
  heightChange(event)
  {
    this.height = this.height + event;
  }
  colorChange(event)
  {
    this.currentClass = event;
  }

}
