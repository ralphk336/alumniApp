import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlumniComponent } from './all-alumni.component';

describe('AllAlumniComponent', () => {
  let component: AllAlumniComponent;
  let fixture: ComponentFixture<AllAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAlumniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
