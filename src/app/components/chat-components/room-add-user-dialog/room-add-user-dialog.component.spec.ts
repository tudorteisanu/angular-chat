import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAddUserDialogComponent } from './room-add-user-dialog.component';

describe('RoomAddUserDialogComponent', () => {
  let component: RoomAddUserDialogComponent;
  let fixture: ComponentFixture<RoomAddUserDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomAddUserDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomAddUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
