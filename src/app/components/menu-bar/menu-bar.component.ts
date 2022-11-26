import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
@Input()
home: string= ''
@Input()
service: string= ''
@Input()
contato: string = ''
}
