import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDialogProfileComponent } from './main-dialog-profile.component';

describe('MainDialogProfileComponent', () => {
  let component: MainDialogProfileComponent;
  let fixture: ComponentFixture<MainDialogProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDialogProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDialogProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
