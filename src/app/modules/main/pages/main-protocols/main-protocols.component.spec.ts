import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProtocolsComponent } from './main-protocols.component';

describe('MainProtocolsComponent', () => {
  let component: MainProtocolsComponent;
  let fixture: ComponentFixture<MainProtocolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainProtocolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainProtocolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
