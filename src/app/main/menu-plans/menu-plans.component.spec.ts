import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuPlansComponent } from './menu-plans.component';

describe('ManuPlansComponent', () => {
  let component: ManuPlansComponent;
  let fixture: ComponentFixture<ManuPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuPlansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManuPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
