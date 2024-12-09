import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibroAgregarService {

  private apiUrl = 'http://localhost:3000/subir-libro';
  constructor(private http: HttpClient) { }

  agregarLibro(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
