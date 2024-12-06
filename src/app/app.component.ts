import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { Router } from '@angular/router';
import { JsonService } from './service/json.service'; 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,  RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.css'
})

export class AppComponent {
  title = 'Biblioteca';
  
  books: any[] = [];

  constructor(
    private router: Router, 
    private jsonService: JsonService
  ) {}


  openInformacionPage(): void {
    window.open('/Libro', '_blank'); 
  }

  ngOnInit(): void {
    this.jsonService.getBook().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
