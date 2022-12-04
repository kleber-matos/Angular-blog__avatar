import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container__menu-bar">
    <app-menu-bar></app-menu-bar> 
 </div>
 <hr>
<router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-blog';


}
