import { Component, input } from '@angular/core';

export interface LinkCard {
  title: string;
  backgroundImageUrl: string;
}

@Component({
  selector: '[app-link-card]',
  imports: [],
  template: `
    <span class="title">
      {{ content().title }}
    </span>
  `,
  styles: `
    :host {
      display: flex;
      width: 100%;
      justify-content: space-around;
      align-items: center;
      backdrop-filter: blur(2px);
      flex: 1 1 0;

      &:nth-child(1n+1) {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(0deg, rgba(238, 45, 111, 0.20) 0%, rgba(238, 45, 111, 0.20) 100%), url('/card-background.png') lightgray 50% / cover no-repeat;
      }

      &:nth-child(2n+1) {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(0deg, rgba(73, 116, 230, 0.20) 0%, rgba(73, 116, 230, 0.20) 100%), url('/card-background.png') lightgray 50% / cover no-repeat;
      }

      &:nth-child(3n+1) {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(0deg, rgba(230, 185, 73, 0.20) 0%, rgba(230, 185, 73, 0.20) 100%), url('/card-background.png') lightgray 50% / cover no-repeat;
      }

      &:nth-child(4n+1) {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(0deg, rgba(73, 230, 87, 0.20) 0%, rgba(73, 230, 87, 0.20) 100%), url('/card-background.png') lightgray 50% / cover no-repeat;
      }

      &:nth-child(5n+1) {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.24) 0%, rgba(0, 0, 0, 0.24) 100%), linear-gradient(0deg, rgba(145, 130, 94, 0.20) 0%, rgba(145, 130, 94, 0.20) 100%), url('/card-background.png') lightgray 50% / cover no-repeat;
      }
    }

    .title {
      color: #FFF;
      text-align: center;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1.2px;
      text-transform: uppercase;
    }
  `
})
export class LinkCardComponent {
  content = input.required<LinkCard>()
}
