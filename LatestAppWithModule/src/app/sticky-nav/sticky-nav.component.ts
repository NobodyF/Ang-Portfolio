import { Component } from '@angular/core';

@Component({
  selector: 'app-sticky-nav',
  templateUrl: './sticky-nav.component.html',
  styleUrls: ['./sticky-nav.component.css']
})
export class StickyNavComponent {
  
  scrollToSection(id: string) {
    if (id === 'home') {
      // If the id is 'home', scroll to the top of the document
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Otherwise, scroll to the section with the specified id
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

}
