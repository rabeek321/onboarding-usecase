import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../app/services/auth-guard.service';
const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import(`./components/login/login.module`).then(m => m.LoginModule)
  },
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import(`./components/register/register.module`).then(m => m.RegisterModule)
  },
  {
    path: 'admin',
    loadChildren: () => import(`./components/admin/admin.module`).then(m => m.AdminModule)  
  },
  {
    path: 'user',
    loadChildren: () => import(`./components/user/user.module`).then(m => m.UserModule)
    // canActivate: [AuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
