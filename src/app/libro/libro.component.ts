import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-libro',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './libro.component.html',
  styleUrl: './libro.component.css'
})
export class LibroComponent {
  title = 'Libro';
}
