import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home-page', pathMatch: 'full' },
    { path: 'home-page', component: HomePageComponent },
    { path: 'contact-us', component: ContactUsComponent},
    { path: '**', redirectTo: '/home-page'}
];
