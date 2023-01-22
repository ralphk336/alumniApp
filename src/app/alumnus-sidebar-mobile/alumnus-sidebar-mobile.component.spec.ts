import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnusSidebarMobileComponent } from './alumnus-sidebar-mobile.component';

describe('AlumnusSidebarMobileComponent', () => {
  let component: AlumnusSidebarMobileComponent;
  let fixture: ComponentFixture<AlumnusSidebarMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnusSidebarMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnusSidebarMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
