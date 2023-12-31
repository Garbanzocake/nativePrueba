import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDetailsPageComponent } from './booking-details-page.component';

describe('BookingDetailsPageComponent', () => {
  let component: BookingDetailsPageComponent;
  let fixture: ComponentFixture<BookingDetailsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingDetailsPageComponent]
    });
    fixture = TestBed.createComponent(BookingDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
