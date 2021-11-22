import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CmsHomeComponent } from './pages/cms-home/cms-home.component';
import { CmsLayoutComponent } from './layouts/cms-layout/cms-layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  { path: 'cms', pathMatch: 'full', redirectTo: '/cms/home' },
  {
    path: 'cms',
    component: CmsLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: CmsHomeComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
