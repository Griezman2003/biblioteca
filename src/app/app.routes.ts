import { Routes } from '@angular/router';
import {LibroComponent} from './libro/libro.component';
import {LibroDetalleComponent} from './libro-detalle/libro-detalle.component'

export const routes: Routes = [
    { path: '',component: LibroComponent},
    {path: 'libro-detalle/:titulo', component: LibroDetalleComponent},
    { path: '**', redirectTo: '' },
];

