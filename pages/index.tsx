import {JamBuddy} from './JamBuddy';
import * as Tone from 'tone';

function Home() {
  const jamBuddy = new JamBuddy();

  const selected = {
    root: 'A',
    chordType: 'Maj'
  };

  const onChangeRoot = (event: any) => {
    selected.root = event.target.value;
  };

  const onChangeChordType = (event: any) => {
    selected.chordType = event.target.value;
  };

  const playChord = () => {
    const chord = jamBuddy.createChord(selected.root, selected.chordType);
    // todo format array returned by createChord(), it should contain a 4 after each note ie C4, E4 etc
    // pass the duration
    // make sure we only save notes as x# and not X#/Xb, in the frontend we should display X#/Xb though
    var tremolo = new Tone.Tremolo().start();
    var polySynth = new Tone.PolySynth(3, Tone.Synth).chain(tremolo, Tone.Master);

    polySynth.triggerAttackRelease(['C4', 'E4', 'G4'], '1n');
  };

  return (
    <div>
      <h1>jambuddy</h1>
      <select name="root" id="root" onChange={(e) => onChangeRoot(e)}>
        {jamBuddy.rootArray.map((root) => {
          return <option value={root}>{root}</option>;
        })}
      </select>
      <select name="chordType" id="chordType" onChange={(e) => onChangeChordType(e)}>
        {jamBuddy.chordTypeArray.map((chordType) => {
          return <option value={chordType}>{chordType}</option>;
        })}
      </select>
      <button onClick={() => playChord()} className="sound-button">Music please</button>
    </div>
  );
};

export default Home;

