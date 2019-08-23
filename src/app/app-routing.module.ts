import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';


const routes: Routes = [
  { path: 'user-repo', component: UserRepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
