import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomHeadingComponent } from './room-heading.component';

describe('RoomHeadingComponent', () => {
  let component: RoomHeadingComponent;
  let fixture: ComponentFixture<RoomHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
