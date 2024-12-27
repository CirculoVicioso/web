import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, HeaderComponent, FooterComponent ],
  template: `
    <header app-header></header>
    <hr class="divider">
    <main>
      <router-outlet></router-outlet>
    </main>
    <hr class="divider">
    <footer app-footer></footer>`,
  styles: `
    :host {
      display: flex;
      flex-direction: column;
      height: 100svh;
      padding: 16px;
    }

    main {
      flex-grow: 1;
      margin-top: 16px;
      margin-bottom: 16px;
    }
  `
})
export class AppComponent {
  title = 'cv-web';
}
