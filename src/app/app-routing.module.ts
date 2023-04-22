import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeachVolleyComponent } from './beach-volley/beach-volley.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  { path: 'beach', component: BeachVolleyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
