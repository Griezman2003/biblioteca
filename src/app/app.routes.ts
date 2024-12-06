import { Routes } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {InformacionComponent} from './informacion/informacion.component';
import { AppComponent } from "./app.component";

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'Informacion', component: InformacionComponent },
     // { path: 'Header', component: HeaderComponent },
];
