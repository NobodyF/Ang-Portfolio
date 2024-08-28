import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private elRef: ElementRef) {}

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const yOffset = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }
  }
}