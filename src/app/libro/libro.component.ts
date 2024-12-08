import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Libro } from '../libro.model';
import { JsonService } from '../service/json.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-libro',
    imports: [HeaderComponent, CommonModule],
    templateUrl: './libro.component.html',
    styleUrl: './libro.component.css'
})
export class LibroComponent  implements OnInit {
  title = 'Libro';
  libros: Libro[] = [];
  
  constructor(private jsonService: JsonService) {}
  
  ngOnInit(): void {
    this.jsonService.getLibros().subscribe({
      next: (data) => {
        this.libros = data.libros;
      },
      error: (error) => {
        console.error('Error al cargar libros', error);
      }
    });
  }
}
