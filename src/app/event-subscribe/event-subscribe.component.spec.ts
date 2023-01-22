import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventSubscribeComponent } from './event-subscribe.component';

describe('EventSubscribeComponent', () => {
  let component: EventSubscribeComponent;
  let fixture: ComponentFixture<EventSubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventSubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
