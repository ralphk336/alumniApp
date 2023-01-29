import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeggerComponent } from './legger.component';

describe('LeggerComponent', () => {
  let component: LeggerComponent;
  let fixture: ComponentFixture<LeggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
