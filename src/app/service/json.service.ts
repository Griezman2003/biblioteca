import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Libro } from '../libro.model';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  constructor(private http: HttpClient) {}

  getLibros(): Observable<{ libros: Libro[] }> {
    return this.http.get<{ libros: Libro[] }>('/assets/json/libros.json');
  }
}
