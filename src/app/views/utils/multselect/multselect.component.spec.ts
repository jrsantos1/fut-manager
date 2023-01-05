import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultselectComponent } from './multselect.component';

describe('MultselectComponent', () => {
  let component: MultselectComponent;
  let fixture: ComponentFixture<MultselectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultselectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
