import { Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {LibroComponent} from './libro/libro.component';
import { AppComponent } from "./app.component";

export const routes: Routes = [
    { path: '',component: LibroComponent},
    { path: '**', redirectTo: '' }
];

