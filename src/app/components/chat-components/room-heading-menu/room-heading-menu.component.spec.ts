import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHeadingMenuComponent } from './room-heading-menu.component';

describe('RoomHeadingMenuComponent', () => {
  let component: RoomHeadingMenuComponent;
  let fixture: ComponentFixture<RoomHeadingMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomHeadingMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomHeadingMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
