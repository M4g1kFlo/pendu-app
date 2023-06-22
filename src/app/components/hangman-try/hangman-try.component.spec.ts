import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HangmanService } from '../../services/hangman.service';

import { HangmanTryComponent } from './hangman-try.component';
import { By } from '@angular/platform-browser';

describe('HangmanTryComponent', () => {
  let component: HangmanTryComponent;
  let fixture: ComponentFixture<HangmanTryComponent>;
  let hangService: HangmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HangmanTryComponent],
      providers:[HangmanService]
    });
    fixture = TestBed.createComponent(HangmanTryComponent);
    hangService = TestBed.inject(HangmanService)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  
  
  it('should call newGame on hangService when onNewGameClick is called', () => {
    const spy = spyOn(hangService,"newGame")
    component.onNewGameClick();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('New game',() => {
    
    it('should call onNewGameClick when .new-game is clicked', () => {
      const spy = spyOn(component,"onNewGameClick");
      fixture.debugElement.query(By.css(".new-game")).triggerEventHandler('click', { preventDefault: () => {} });
      expect(spy).toHaveBeenCalledTimes(1);
    });
    
    // it('.new-game should be disabled', () => {
    //   const button = fixture.debugElement.query(By.css(".new-game"))
    //   button.triggerEventHandler('click', { preventDefault: () => {} });
    //   fixture.detectChanges();
    //   expect(button.nativeElement.disabled).toBeTruthy();
    // });
    
    it('should have 26 letters', () => {
      const buttons = fixture.debugElement.queryAll(By.css(".letter"))
      fixture.detectChanges();
      expect(buttons.length).toBe(26);
    });
  });

  describe('Try a letter',() => {
    
    it('should be disabled', () => {
      const button = fixture.debugElement.queryAll(By.css(".letter"))[25];
      button.triggerEventHandler('click', { preventDefault: () => {} });
      fixture.detectChanges();
      console.log(button.nativeElement.disabled);
      expect(component.triedLetters).toContain("Z");
      expect(button.nativeElement.disabled).toBeTruthy();
    });
  });
});
