import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: '[app-header]',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div class="container">
      <h1 class="title">CIRCULO VICIOSO</h1>
      <img class="logo" [src]="'logo.png'" height="54" width="54">
    </div>
  `,
  styles: `
    :host {
      display: flex;
      height: 91px;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      gap: 16px;
      flex-shrink: 0;
      padding-bottom: 16px;
    }

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      align-self: stretch;
    }

    .title {
      color: #211C1F;
      text-align: left;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -1.2px;
      width: 100px;
    }

    .logo {
      height: 54px;
      width: 54px;
    }
  `
})
export class HeaderComponent {

}
