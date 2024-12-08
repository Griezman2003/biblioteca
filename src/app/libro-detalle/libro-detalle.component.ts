import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LibroDetalleService} from '../service/libro-detalle.service';
import {Libro} from '../libro.model';


@Component({
  selector: 'app-libro-detalle',
  imports: [NgIf],
  templateUrl: './libro-detalle.component.html',
  styleUrl: './libro-detalle.component.css'
})
export class LibroDetalleComponent implements OnInit {
  libro: Libro | null = null;
  constructor( private route: ActivatedRoute, private libroDetalleService: LibroDetalleService, 
  private router: Router ) {} 

  ngOnInit(): void { 
    const titulo = this.route.snapshot.paramMap.get('titulo'); 
    if (titulo) { 
      this.libroDetalleService.getLibroByTitulo(titulo).subscribe(data => { 
      this.libro = data; 
      if (!this.libro) { 
        this.router.navigate(['/']); } }); 
      } else { 
        this.router.navigate(['/']); 
      } 
    }
}
