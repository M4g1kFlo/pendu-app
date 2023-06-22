import { TestBed } from '@angular/core/testing';

import { HangmanService } from './hangman.service';
import { RandomWordGeneratorService } from './random-word-generator.service';

describe('HangmanService', () => {
  let service: HangmanService;
  let mockWordService: any;

  beforeEach(() => {
    mockWordService = jasmine.createSpyObj(RandomWordGeneratorService, ['getRandomWord']);
    TestBed.configureTestingModule({providers:[HangmanService,{provide:RandomWordGeneratorService,useValue:mockWordService}]});
    service = TestBed.inject(HangmanService);

  });

  describe('Create new game', () => {
    beforeEach(() => {
      mockWordService.getRandomWord.and.returnValue('Apple')
      service.newGame()
    });
    it('get a new word',() => {

      expect(service.wordToFind).toEqual('APPLE')
    });
    it('should be playing',() => {

      expect(service.isPlaying).toBeTruthy()
    });
  });

  describe('try a letter', () => {
    beforeEach(() => {
      mockWordService.getRandomWord.and.returnValue('Apple')
      service.newGame()
    });
    it('a wrong one',() => {

      service.tryLetter("H");

      expect(service.failedTries()).toEqual(1)
      expect(service.triedLetters()).toContain("H")
      expect(service.wordMasked()).not.toContain("H")
    });

    it('a good one',() => {

      service.tryLetter("A");

      expect(service.failedTries()).toEqual(0)
      expect(service.triedLetters()).toContain("A")
      expect(service.wordMasked()).toContain("A")
    });
  });

  describe('Win conditions', () => {
    beforeEach(() => {
      mockWordService.getRandomWord.and.returnValue('Apple')
      service.newGame()
    });

    it('You lose',() => {

      service.tryLetter("H");
      service.tryLetter("O");
      service.tryLetter("I");
      service.tryLetter("U");
      service.tryLetter("N");
      service.tryLetter("B");
      service.tryLetter("V");

      expect(service.failedTries()).toEqual(7)
      expect(service.isPlaying()).not.toBeTruthy()

    });
    
    it('You win',() => {

      service.tryLetter("A");
      service.tryLetter("P");
      service.tryLetter("L");
      service.tryLetter("E");

      expect(service.failedTries()).toEqual(0)
      expect(service.isPlaying()).not.toBeTruthy()
      expect(service.wordMasked()).toEqual("APPLE")

    });

  });

});
