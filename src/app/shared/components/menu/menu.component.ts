import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuOpen:  boolean = false;

  constructor() {

  }

  menuToggle(event: Event ): void {
    event.stopPropagation()
    this.menuOpen = !this.menuOpen;
  }

  @HostListener('document:click')
  documentClick(): void {
    if(this.menuOpen == true) {
      this.menuOpen = false;
    }
  }

}
