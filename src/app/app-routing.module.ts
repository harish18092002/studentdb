import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: '',
  // component: AppComponent,
  children: [
    { path: 'home', component: MainComponent },
    { path: 'details', component: DetailsComponent },
    { path: '**', redirectTo: 'home' },
  ],
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
