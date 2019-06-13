import {JamBuddy} from './JamBuddy';

describe('JamBuddy', () => {
  describe('#sortRootArray', () => {
    it('should return array with selected root as first note', () => {
      const result = new JamBuddy().sortRootArray('D');

      expect(result).toEqual(['D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db']);
    });

    describe('createChord', () => {
      it('should create a major chord', () => {
        const sortedRootArray = ['D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db'];
        const result = new JamBuddy().createMajorChord(sortedRootArray);

        expect(result).toEqual(['D', 'F#/Gb', 'A']);
      });

      describe('createChord', () => {
        it('should create a minor chord', () => {
          const sortedRootArray = ['D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab', 'A', 'A#/Bb', 'B', 'C', 'C#/Db'];
          const result = new JamBuddy().createMinorChord(sortedRootArray);

          expect(result).toEqual(['D', 'F', 'A']);
        });
      });
    });
  });
});


