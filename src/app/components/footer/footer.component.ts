import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[app-footer]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <img class="logo" [src]="'logo-footer.svg'" height="48" width="48">
    <ul class="links">
      <li>> acerca_de</li>
      <li>> privacidad</li>
    </ul>
  `,
  styles: `
    :host {
      align-items: center;
      display: flex;
      height: 91px;
      justify-content: space-between;
    }

    .links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 8px;

      li {
        list-style-type: none;
        color: #000;
        text-align: center;
        font-family: Arial;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.4px;
      }
    }`
})
export class FooterComponent {

}
