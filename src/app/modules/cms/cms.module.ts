import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsHomeComponent } from './pages/cms-home/cms-home.component';
import { CmsLayoutComponent } from './layouts/cms-layout/cms-layout.component';
import { CmsRoutingModule } from './cms-routing.module';



@NgModule({
  declarations: [
    CmsHomeComponent,
    CmsLayoutComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule
  ]
})
export class CmsModule { }
