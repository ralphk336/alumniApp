import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarDesktopComponent } from './admin-sidebar-desktop.component';

describe('AdminSidebarDesktopComponent', () => {
  let component: AdminSidebarDesktopComponent;
  let fixture: ComponentFixture<AdminSidebarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSidebarDesktopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSidebarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
