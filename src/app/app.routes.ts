import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'fresh',
        loadComponent: () => import("fresh/HomeComponent").then(m => m.HomeComponent)
    },
    {
        path: 'mobiles',
        loadComponent: () => import("mobiles/HomeComponent").then(m => m.HomeComponent)
    }
];
