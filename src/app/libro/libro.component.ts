import { Component, OnInit } from '@angular/core';
import { Libro } from '../libro.model'; 
import { JsonService } from '../service/json.service'; 
import { RouterLink } from '@angular/router';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-libro',
  imports: [RouterLink, HeaderComponent],
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
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
  imagenDefecto(event: Event): void { 
    (event.target as HTMLImageElement).src = 'assets/images/angular.png'; 
  }
  trackByFn(index: number, libro: any): number {
    return libro.id; 
  }
}
