import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { AccessComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'main', component: MainComponent},
  { path: 'login', component: AccessComponent},
  { path: '**', redirectTo: '' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
