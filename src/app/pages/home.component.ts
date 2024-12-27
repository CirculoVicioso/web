import { Component } from '@angular/core';
import { LinkCard, LinkCardComponent } from '../components/link-card/link-card.component'

@Component({
  selector: 'app-home',
  imports: [
    LinkCardComponent
  ],
  template: `
    @for(link of links; track $index){
      <a app-link-card [content]="link"></a>
    }
  `,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      gap: 16px;
      height: 100%;
      padding: 16px;
    }`
})
export class HomeComponent {
  links: LinkCard[] = [
    {
      title: 'Último capítulo',
      backgroundImageUrl: 'card-background.png'
    },
    {
      title: 'RRSS',
      backgroundImageUrl: 'card-background.png'
    },
    {
      title: 'Tienda',
      backgroundImageUrl: 'card-background.png'
    },
    {
      title: 'Wiki',
      backgroundImageUrl: 'card-background.png'
    },
    {
      title: 'Búsqueda episodios',
      backgroundImageUrl: 'card-background.png'
    },

  ]
}
