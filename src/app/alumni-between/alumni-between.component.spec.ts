import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniBetweenComponent } from './alumni-between.component';

describe('AlumniBetweenComponent', () => {
  let component: AlumniBetweenComponent;
  let fixture: ComponentFixture<AlumniBetweenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumniBetweenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniBetweenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
