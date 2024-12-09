import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Libro } from '../libro.model';
import { JsonService } from '../service/json.service';
import {LibroDetalleService} from '../service/libro-detalle.service';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';

@Component({
    selector: 'app-libro',
    imports: [HeaderComponent, CommonModule, RouterLink],
    templateUrl: './libro.component.html',
    styleUrl: './libro.component.css'
})
export class LibroComponent  implements OnInit {
  title = 'Libro';
  libros: Libro[] = [];
  
  constructor(private jsonService: JsonService, private libroDetalle: LibroDetalleService, 
    private router: Router) {}
  
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
  verDetalles(libro: Libro): void { 
    this.router.navigate(['/libro-detalle', libro.titulo]); 
  }
}
