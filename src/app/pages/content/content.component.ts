import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  photo: string = 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/28/675x450/1_avatar_2_the_way_of_water_750x422-7860855.jpg?20220428103146?20220428103146'
  title: string = 'title'
  description: string = 'descripition!!!'
}
