import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren:  () => import('./modules/main/main.module').then(m => m.MainModule)
  },
  {
    path: '',
    loadChildren: () => import('./modules/cms/cms.module').then(m => m.CmsModule)
  },
  { path: 'login', redirectTo: 'login/', pathMatch: 'full'},
  /** This path helps to define a origin for redirect session */
  { path: 'login/:origin', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
