import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, FooterComponent ],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      height: 100svh;
      padding: 16px;
    }`
})
export class AppComponent {
  title = 'cv-web';
}
