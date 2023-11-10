import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookingsPageComponent } from './list-bookings-page.component';

describe('ListBookingsPageComponent', () => {
  let component: ListBookingsPageComponent;
  let fixture: ComponentFixture<ListBookingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBookingsPageComponent]
    });
    fixture = TestBed.createComponent(ListBookingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
