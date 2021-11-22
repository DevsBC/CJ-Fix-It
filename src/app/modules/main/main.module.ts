import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { MaterialModule } from '../material/material.module';
import { DevsbcModule } from 'devsbc-components';
import { environment } from 'src/environments/environment';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { MainRoutingModule } from './main-routing.module';
import { MainDialogProfileComponent } from './components/main-dialog-profile/main-dialog-profile.component';
import { MainDialogConfirmOptionComponent } from './components/main-dialog-confirm-option/main-dialog-confirm-option.component';
import { MainProtocolsComponent } from './pages/main-protocols/main-protocols.component';



@NgModule({
  declarations: [
    MainHomeComponent,
    MainLayoutComponent,
    MainDialogProfileComponent,
    MainDialogConfirmOptionComponent,
    MainProtocolsComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    DevsbcModule.forRoot(environment),
    MaterialModule,
    FlexLayoutModule,
    PipesModule
  ]
})
export class MainModule { }
