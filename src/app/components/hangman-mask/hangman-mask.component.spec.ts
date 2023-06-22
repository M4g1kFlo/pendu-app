import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanMaskComponent } from './hangman-mask.component';
import { HangmanService } from 'src/app/services/hangman.service';

describe('HangmanMaskComponent', () => {
  let component: HangmanMaskComponent;
  let fixture: ComponentFixture<HangmanMaskComponent>;
  let hangService: HangmanService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanMaskComponent],
      providers:[HangmanService]
    });
    fixture = TestBed.createComponent(HangmanMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    hangService = TestBed.inject(HangmanService)
  });

  it('should create a full mask', () => {
    expect(component.mask()).toContain("_ _ _ _ _");
  });
});
