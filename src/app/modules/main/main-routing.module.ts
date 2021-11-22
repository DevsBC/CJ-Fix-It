import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { MainProtocolsComponent } from './pages/main-protocols/main-protocols.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/main/home' },
  {
    path: 'main',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: MainHomeComponent },
      { path: 'protocols', component: MainProtocolsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
