import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCard: string= ''
  @Input()
  titleCard: string= ''
  @Input()
  cardDescription: string= ''

/**  verfilme(){
    alert(`Avatar: O Caminho da Água 2022 ‧ Ficção científica/Ação ‧ 3h 10m\n \nApós formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.\nDiretor: James Cameron\n
    Séries de filmes: Avatar\n
    Orçamento: 250 milhões USD\n
    Música composta por: Simon Franglen\n
    Autores: James Cameron, Josh Friedman, Shane Salerno,\n
     Amanda  Silver, Rick Jaffa`)
  } */

}
