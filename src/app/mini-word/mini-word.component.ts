import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mini-word',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-word.component.html',
  styleUrl: './mini-word.component.css',
})
export class MiniWordComponent {
  color: string = 'black';
  fontSize: number = 25;
  fontType: string = 'arial';
  onFontFamilyChange(event: any) {
    this.fontType = event.target.value || 'arial';
    console.log(this.fontType);
  }

  onSizeChange(event: any) {
    this.fontSize = event.target.value || this.fontSize;
    console.log(this.fontSize);
  }

  onColorChange(event: any) {
    //console.log('onColorChange to ', event.target.value);
    this.color = event.target.value || 'black';
    console.log(this.color);
  }
}
