import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDialogConfirmOptionComponent } from './main-dialog-confirm-option.component';

describe('MainDialogConfirmOptionComponent', () => {
  let component: MainDialogConfirmOptionComponent;
  let fixture: ComponentFixture<MainDialogConfirmOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDialogConfirmOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDialogConfirmOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
