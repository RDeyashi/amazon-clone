import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: MainComponent},
    {
        path: 'fresh',
        loadComponent: () => import("fresh/HomeComponent").then(m => m.HomeComponent)
    },
    {
        path: 'mobiles',
        loadComponent: () => import("mobiles/HomeComponent").then(m => m.HomeComponent)
    }
];
