import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  photo: string= ''

  @Input()
  title: string= ''

  @Input()
  description: string= ''

  @Input()
  Id: string = '0'



/**  github: string= 'https://github.com/kleber-matos/Angular-blog__avatar'

  
  texto:String = "Veja o GitHub do projeto: \n" + this.github;
  verfilme(){
  
    //alert(this.texto);
    
   window.alert( 
    `${this.title}\n${this.description}`
    )
    confirm(`Não esqueça de ver no github\n${this.github}`)
  } */

}
