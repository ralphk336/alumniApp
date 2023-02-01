import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkEmailComponent } from './bulk-email.component';

describe('BulkEmailComponent', () => {
  let component: BulkEmailComponent;
  let fixture: ComponentFixture<BulkEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulkEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
