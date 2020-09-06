import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent {
  @Input() width;
  @Input() height;
  @Output() widthChange = new EventEmitter();
  @Output() heightChange = new EventEmitter();
  @Output() colorChange = new EventEmitter();
 
  onClassChange(value) {
    this.colorChange.emit(value)
  }
  increaseWidth()
  {
    this.widthChange.emit(10);
  }

  decreaseWidth()
  {
    this.widthChange.emit(-10);
  }

  increaseHeight()
  {
    this.heightChange.emit(10);
  }

  decreaseHeight()
  {
    this.heightChange.emit(-10);
  }
}
