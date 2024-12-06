import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,  RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})

export class AppComponent {
  title = 'Biblioteca';
  constructor(private router: Router) {}
  openInformacionPage(): void {
  window.open('/Informacion', '_blank');
  }
}
