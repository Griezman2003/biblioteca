import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libro-agregar',
  imports: [],
  templateUrl: './libro-agregar.component.html',
  styleUrl: './libro-agregar.component.css'
})
export class LibroAgregarComponent {
  libro = { titulo: '', autor: '', genero: '', anio_publicacion: null };

  constructor(private http: HttpClient) {}

  agregarLibro() {
    this.http.post('http://localhost:3000/libros', this.libro)
      .subscribe(() => {
        alert('Libro agregado correctamente');
        this.libro = { titulo: '', autor: '', genero: '', anio_publicacion: null };
      });
  }
}
