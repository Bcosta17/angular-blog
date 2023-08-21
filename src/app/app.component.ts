import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ScrollService } from './services/scroll-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  shouldHiddenContent: boolean = false;

  constructor(private router: Router, private scrollService: ScrollService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollService.scrollToTop(); // Rola para o topo ao trocar de página
        const currentUrl = this.router.url;
        this.shouldHiddenContent = !currentUrl.includes('/content');
      }
    });
  }
}
