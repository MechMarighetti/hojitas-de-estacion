import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { PalabraComponent } from './palabra/palabra.component';


const routes: Routes = [
  {path: 'palabra', component: PalabraComponent},
  { path: '**', component: PalabraComponent },  // Wildcard route for a 404 page

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    HttpClientModule, RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
