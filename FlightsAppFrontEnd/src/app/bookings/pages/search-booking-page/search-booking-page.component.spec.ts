import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookingPageComponent } from './search-booking-page.component';

describe('SearchBookingPageComponent', () => {
  let component: SearchBookingPageComponent;
  let fixture: ComponentFixture<SearchBookingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBookingPageComponent]
    });
    fixture = TestBed.createComponent(SearchBookingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
