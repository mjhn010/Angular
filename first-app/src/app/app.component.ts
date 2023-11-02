import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // style 배열에 여러가지 css을 추가할수있음.
  // styleUrls: ['./app.component.css']
  styles: [`
    h3{
      color:red;
    }
  `]
})
export class AppComponent {
 name:string = 'jun';
}
