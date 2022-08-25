import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomInputComponent } from './room-input.component';

describe('ChatInputComponent', () => {
  let component: RoomInputComponent;
  let fixture: ComponentFixture<RoomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
