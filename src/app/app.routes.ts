import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { Component } from '@angular/core';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { AmbitionComponent } from './ambition/ambition.component';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {path:'Home',component:HomeComponent},
  { path: 'Show personal info', component: PersonalinfoComponent },
  {path:'Show hobbies',component:HobbiesComponent},
  {path:'Show goals',component:AmbitionComponent}
];
export default routeConfig;
