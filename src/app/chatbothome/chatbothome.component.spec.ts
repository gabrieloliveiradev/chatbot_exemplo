import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatbothomeComponent } from './chatbothome.component';

describe('ChatbothomeComponent', () => {
  let component: ChatbothomeComponent;
  let fixture: ComponentFixture<ChatbothomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatbothomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatbothomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
