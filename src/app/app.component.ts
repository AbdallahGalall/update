import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterModule],
  templateUrl: './app.component.html',

 
})

export class AppComponent {
  title = 'update';

}
