import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsCreateComponent } from './create-chat.component';

describe('CreateChatComponent', () => {
  let component: RoomsCreateComponent;
  let fixture: ComponentFixture<RoomsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoomsCreateComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoomsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
