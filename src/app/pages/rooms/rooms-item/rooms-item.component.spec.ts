import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsItemComponent } from './rooms-item.component';

describe('ChatItemComponent', () => {
  let component: RoomsItemComponent;
  let fixture: ComponentFixture<RoomsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
