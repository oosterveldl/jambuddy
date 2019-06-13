export class JamBuddy {
  public rootArray: string[] = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'];
  public chordTypeArray: string[] = ['Maj', 'Min'];
  // public selectedRoot: string;
  // public selectedChordType: string;

  public createChord(selectedRoot: string, selectedChordType: string): string[] {
    const sortedRootArray = this.sortRootArray(selectedRoot);

    if (selectedChordType === 'Maj') {
      return this.createMajorChord(sortedRootArray);
    }

    if (selectedChordType === 'Min') {
      return this.createMinorChord(sortedRootArray);
    }
  }

  public sortRootArray(selectedRoot: string): string[] {
    const rootArray = this.rootArray;
    const indexToSplit = rootArray.indexOf(selectedRoot);
    const firstPartOfNewArray = rootArray.slice(indexToSplit);
    const secondPartOfNewArray = rootArray.slice(0, indexToSplit);

    return firstPartOfNewArray.concat(secondPartOfNewArray);
  }

  public createMajorChord(sortedRootArray: string[]): string[] {
    return [0, 4, 7].map(index => sortedRootArray[index]);
  }

  public createMinorChord(sortedRootArray: string[]): string[] {
    return [0, 3, 7].map(index => sortedRootArray[index]);
  }
}