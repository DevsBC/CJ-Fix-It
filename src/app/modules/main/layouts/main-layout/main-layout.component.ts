import { Component, ElementRef, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MainDialogProfileComponent } from '../../components/main-dialog-profile/main-dialog-profile.component';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  dialogRef!: MatDialogRef<MainDialogProfileComponent, any>;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openProfile(event: MatButton) {
    if (this.dialogRef) {
      this.dialog.closeAll();
    }
    const target = new ElementRef(event._elementRef.nativeElement);
    this.dialogRef = this.dialog.open(MainDialogProfileComponent, 
      { data: { trigger: target }, 
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true,
    });
 
  }

}
