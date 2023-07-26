import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-wide',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-wide.component.html',
  styleUrls: ['./button-wide.component.scss']
})
export class ButtonWideComponent {

  @Output() buttonClicked = new EventEmitter();

  onClick() {
    this.buttonClicked.emit();
  }

}
