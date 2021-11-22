import { Component, ElementRef, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'devsbc-components';
import { ISession } from 'src/app/interfaces/session.interface';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';

@Component({
  selector: 'app-main-dialog-profile',
  templateUrl: './main-dialog-profile.component.html',
  styleUrls: ['./main-dialog-profile.component.scss']
})
export class MainDialogProfileComponent implements OnInit {

  private readonly _matDialogRef: MatDialogRef<MainLayoutComponent>;
  private readonly triggerElementRef: ElementRef;
  session: ISession;
  constructor(_matDialogRef: MatDialogRef<MainLayoutComponent>,
              @Inject(MAT_DIALOG_DATA) data: { trigger: ElementRef },
              private auth: AuthService) {
    this._matDialogRef = _matDialogRef;
    this.triggerElementRef = data.trigger;
    this.session = this.auth.getSession();
  }

  ngOnInit(): void {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.triggerElementRef.nativeElement.getBoundingClientRect();
    matDialogConfig.position = { left: `${rect.left - 230}px`, top: `${rect.bottom + 10}px` };
    matDialogConfig.width = '300px';
    matDialogConfig.height = '340px';
    this._matDialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this._matDialogRef.updatePosition(matDialogConfig.position);
  }

  logout(): void {
    this._matDialogRef.close();
    this.auth.logout();
  }

}
