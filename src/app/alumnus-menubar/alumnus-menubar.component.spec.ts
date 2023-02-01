import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusMenubarComponent } from './alumnus-menubar.component';

describe('AlumnusMenubarComponent', () => {
  let component: AlumnusMenubarComponent;
  let fixture: ComponentFixture<AlumnusMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnusMenubarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnusMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
