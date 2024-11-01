import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'biblioteca';
}

@Component({
  selector: 'app-header',
  standalone: true,
  template: `<h1>Header Component</h1>`
})
export class HeaderComponent{
  title= 'header';
}