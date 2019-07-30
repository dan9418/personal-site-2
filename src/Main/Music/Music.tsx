import * as React from "react";
import "./Music.css";

export class Music extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='page-container'>
				<h1>Music</h1>
				<p>Music is one of my greatest passions - I love experimenting with instruments, genres, sounds, and production techniques. Most of my music is guitar-based, but I also play bass, drums, piano, and trombone. Beyond performing, I'm extremely interested in audio engineering, especially the creative manipulation and incorporation of weird sounds and textures in music. I have a modest home studio for recording myself and friends. While a student, I also worked in Pitt's Music Engineering Laboratory.</p>
				<p>I'm currently focusing on my solo experimental-folk project, Atlas Euphoria. My debut album and EP are available for free streaming on Bandcamp.</p>	
			</div>
		);
	};
}