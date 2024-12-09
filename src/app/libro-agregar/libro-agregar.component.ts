import { Component } from '@angular/core';
import { LibroAgregarService } from '../service/libro-agregar.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-libro-agregar',
  imports: [FormsModule],
  templateUrl: './libro-agregar.component.html',
  styleUrl: './libro-agregar.component.css'
})
export class LibroAgregarComponent {
  titulo: string = '';
  autor: string = '';
  pdfFile: File | null = null;
  imagenFile: File | null = null;

  constructor(private libroService: LibroAgregarService) {} 


  onFileChange(event: any): void {
    this.pdfFile = event.target.files[0];  
  }


  onImageChange(event: any): void {
    this.imagenFile = event.target.files[0];  
  }

  agregarLibro(): void {
    const formData = new FormData();
    
    formData.append('titulo', this.titulo);
    formData.append('autor', this.autor);

    if (this.pdfFile) {
      formData.append('archivo_pdf', this.pdfFile, this.pdfFile.name);
    }
    if (this.imagenFile) {
      formData.append('imagen', this.imagenFile, this.imagenFile.name);
    }

    this.libroService.agregarLibro(formData).subscribe(
      response => {
        console.log('Libro subido con éxito', response);
      },
      error => {
        console.error('Error al subir el libro', error);
      }
    );
  }
}
