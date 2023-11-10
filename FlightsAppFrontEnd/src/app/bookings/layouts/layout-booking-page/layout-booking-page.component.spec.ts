import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBookingPageComponent } from './layout-booking-page.component';

describe('LayoutBookingPageComponent', () => {
  let component: LayoutBookingPageComponent;
  let fixture: ComponentFixture<LayoutBookingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutBookingPageComponent]
    });
    fixture = TestBed.createComponent(LayoutBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
