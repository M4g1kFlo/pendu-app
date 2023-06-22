import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanMaskComponent } from './hangman-mask.component';

describe('HangmanMaskComponent', () => {
  let component: HangmanMaskComponent;
  let fixture: ComponentFixture<HangmanMaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanMaskComponent]
    });
    fixture = TestBed.createComponent(HangmanMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
