import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import DB from '../../db.json';
@Component({
  selector: 'app-main-protocols',
  templateUrl: './main-protocols.component.html',
  styleUrls: ['./main-protocols.component.scss']
})
export class MainProtocolsComponent implements OnInit {

  protocols: any;
  optionSelected: any;
  step: any;
  index = 0;
  constructor(private snackBar: MatSnackBar) {
    console.log(DB.protocols);
    this.protocols = DB.protocols;
  }

  ngOnInit(): void {
  }

  selectOption(option: any) {
    this.optionSelected = option;
    this.step = option.troubleshooting[0];
  }

  repair(solve: boolean) {
    if (solve) {
      this.showMessage('A que padre');
    } else {
      for (const step of this.optionSelected.troubleshooting) {
        if (step.partNumber === this.step.partNumber) {
          if (this.index >= this.optionSelected.troubleshooting.length) {
            this.showMessage('Ya no hay mas cana!');
            break;
          } else {
            const index = this.index + 1;
            const step = this.optionSelected.troubleshooting[index];
            if (step) {
              this.step = step;
              this.index = index;
              this.showMessage('aver dale con esto');
            } else {
              this.showMessage('Ya no hay mas cana!');
            }
            break;
          }
        }
      }
    }
  }

  help() {
    this.showMessage('No pos a darle que no hay mas');
  }

  showMessage(message: string) {
    this.snackBar.open(message, 'OK', { duration: 2000 });
  }

}
