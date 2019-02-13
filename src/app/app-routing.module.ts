import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { ChoicesComponent } from './choices/choices.component';
import { SubmittedInfoComponent } from './submitted-info/submitted-info.component';

const routes: Routes = [
  {path: '' , component: ChoicesComponent },
  {path: 'process-submition' , component: UserInfoComponent },
  {path: 'data' , component: SubmittedInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
