import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    { path: '', title: 'Auto filler', component: HomeComponent, children: [
        { path: 'fill_data', component: FormComponent }
    ] }
];
