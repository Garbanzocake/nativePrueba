import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsTableComponent } from './flights-table.component';

describe('FlightsTableComponent', () => {
  let component: FlightsTableComponent;
  let fixture: ComponentFixture<FlightsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightsTableComponent]
    });
    fixture = TestBed.createComponent(FlightsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
