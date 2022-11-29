import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photo: string = 'https://midias.correiobraziliense.com.br/_midias/jpg/2022/04/28/675x450/1_avatar_2_the_way_of_water_750x422-7860855.jpg?20220428103146?20220428103146'
  title: string = 'title'
  description: string = `descripition!`

  constructor(
    private route:ActivatedRoute
    ){ }
  
    ngOnInit() {
      this.route.paramMap.subscribe( value =>
        console.log(value)
      )
    }
}
