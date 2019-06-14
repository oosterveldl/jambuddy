import { JamBuddy } from "./JamBuddy";
import Tone from "tone";
import React from "react";

export default class Home extends React.Component {
  private jamBuddy: JamBuddy = new JamBuddy();
  private selected = {
    root: "A",
    chordType: "Maj"
  };

  onChangeRoot(event: React.ChangeEvent<HTMLSelectElement>) {
    this.selected.root = event.currentTarget.value;
  }

  onChangeChordType(event: React.ChangeEvent<HTMLSelectElement>) {
    this.selected.chordType = event.currentTarget.value;
  }

  playChord() {
    const chord = this.jamBuddy.createChord(
      this.selected.root,
      this.selected.chordType
    );
    // todo format array returned by createChord(), it should contain a 4 after each note ie C4, E4 etc
    // pass the duration
    // make sure we only save notes as x# and not X#/Xb, in the frontend we should display X#/Xb though
    const tremolo = new Tone.Tremolo().start();
    const polySynth = new Tone.PolySynth(3, Tone.Synth).chain(
      tremolo,
      Tone.Master
    );

    polySynth.triggerAttackRelease(["C4", "E4", "G4"], "1n");
  }

  render() {
    return (
      <div>
        <h1>jambuddy</h1>
        <select name="root" id="root" onChange={e => this.onChangeRoot(e)}>
          {this.jamBuddy.rootArray.map(root => {
            return <option value={root}>{root}</option>;
          })}
        </select>
        <select
          name="chordType"
          id="chordType"
          onChange={e => this.onChangeChordType(e)}
        >
          {this.jamBuddy.chordTypeArray.map(chordType => {
            return <option value={chordType}>{chordType}</option>;
          })}
        </select>
        <button onClick={() => this.playChord()} className="sound-button">
          Music please
        </button>
      </div>
    );
  }
}
