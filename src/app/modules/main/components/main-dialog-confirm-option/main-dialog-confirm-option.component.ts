import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-main-dialog-confirm-option',
  templateUrl: './main-dialog-confirm-option.component.html',
  styleUrls: ['./main-dialog-confirm-option.component.scss']
})
export class MainDialogConfirmOptionComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<any>) { }

  ngOnInit(): void {
  }

  confirm() {
    this.dialogRef.close(true);
  }

}
