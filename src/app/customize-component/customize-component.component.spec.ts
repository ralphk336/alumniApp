import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizeComponentComponent } from './customize-component.component';

describe('CustomizeComponentComponent', () => {
  let component: CustomizeComponentComponent;
  let fixture: ComponentFixture<CustomizeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizeComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
