import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { MainDialogConfirmOptionComponent } from '../../components/main-dialog-confirm-option/main-dialog-confirm-option.component';

@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.scss']
})
export class MainHomeComponent implements OnInit {

  options: any = [
    { title: 'PROTOCOLOS', name: 'protocols', toConfirm: true },
    { title: 'PKG', name: 'pkg', toConfirm: true },
    { title: 'DISPLAY', name: 'display', toConfirm: true },
    { title: 'TECLADO', name: 'keyboard', toConfirm: true },
    { title: 'MENSAJES', name: 'messages', toConfirm: false },
    { title: 'SD-CARD', name: 'sdcard', toConfirm: true },
  ]
  constructor(private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  public async goTo(option: any) {
    if (option.toConfirm) {
      const dialog = this.dialog.open(MainDialogConfirmOptionComponent, { data: { option }});

      const result = await firstValueFrom(dialog.afterClosed());
      if (result) {
        this.router.navigate(['main', option.name]);
      }
    } else {
      this.router.navigate(['main', option.name]);
    }
   
  }

}
