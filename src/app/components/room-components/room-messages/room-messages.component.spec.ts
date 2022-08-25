import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomMessagesComponent } from './room-messages.component';

describe('ChatMessagesComponent', () => {
  let component: RoomMessagesComponent;
  let fixture: ComponentFixture<RoomMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomMessagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
