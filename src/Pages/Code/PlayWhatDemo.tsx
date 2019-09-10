import * as React from "react";
import "./Code.css";
import { withNotes, Keyboard, Fretboard, CHORD, SCALE, MODE, ROMAN_NUMERAL, INTERVAL_PAIR } from 'play-what-beta';

export class PlayWhatDemo extends React.Component<any, any> {

	static PLAY_WHAT_CONCEPTS = [
		{
			id: 'chords',
			name: 'Chords',
			data: CHORD
		},
		{
			id: 'scales',
			name: 'Scales',
			data: SCALE
		},
		{
			id: 'modes',
			name: 'Modes',
			data: MODE
		},
		{
			id: 'romanNumerals',
			name: 'Roman Numerals',
			data: ROMAN_NUMERAL
		},
		{
			id: 'intervalPairs',
			name: 'Intervals',
			data: INTERVAL_PAIR
		}
	]

	constructor(props) {
		super(props);

		this.state = {
			conceptTypeIndex: 0,
			conceptIntervals: (Object.values(PlayWhatDemo.PLAY_WHAT_CONCEPTS[0].data)[0] as any).intervals
		}
	}

	getSelectOptions = (data: any[]) => {
		let options = [];
		for (let i = 0; i < data.length; i++) {
			let datum = data[i];
			options.push(<option key={datum.id} value={datum.id}>{datum.name}</option>);
		}
		return options;
	}

	render = () => {

		let activeConcepts = Object.values(PlayWhatDemo.PLAY_WHAT_CONCEPTS[this.state.conceptTypeIndex].data);

		let KeyboardWithNotes = withNotes(Keyboard, { intervals: this.state.conceptIntervals });
		let FretboardWithNotes = withNotes(Fretboard, { intervals: this.state.conceptIntervals });

		return (
			<div className='play-what-demo'>

				<div className='play-what-title'>
					Try a quick demo:
				</div>
				
				<div className='play-what-input'>
					<div className='play-what-input-label'>
						Choose a concept type:
					</div>
					<select
						className='play-what-input-dropdown'
						onChange={(event) => {
							this.setState({ conceptTypeIndex: event.target.selectedIndex });
						}}>
						{this.getSelectOptions(PlayWhatDemo.PLAY_WHAT_CONCEPTS)}
					</select>
				</div>

				<div className='play-what-input'>
					<div className='play-what-input-label'>
						Choose a concept:
					</div>
					<select
						className='play-what-input-dropdown'
						onChange={(event) => {
							this.setState({ conceptIntervals: (activeConcepts[event.target.selectedIndex] as any).intervals });
						}}>
						{this.getSelectOptions(activeConcepts)}
					</select>
				</div>

				<KeyboardWithNotes />

				<FretboardWithNotes />
			</div>
		);
	};
}