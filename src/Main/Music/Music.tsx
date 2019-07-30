import * as React from "react";
import "./Music.css";
import { AlbumProps, Album } from "./Album/Album";

export class Music extends React.Component<any, any> {

	static ALBUM_CONFIG: AlbumProps[] = [
		{
			title: 'Need Not',
			year: 2018,
			tracks: [
				{ title: 'Until Today' },
				{ title: 'Feel Something' },
				{ title: 'Nature vs Nature' },
				{ title: 'Small World' }
			],
			summary: 'As I find my voice, literally and figuratively, I tried to make an acoustic project that was a little fun and a little serious.',
			links: [
				{ name: 'Bandcamp', icon: './img/icons/bandcamp.svg', link: 'https://atlaseuphoria.bandcamp.com/album/need-not' }
			],
			art: { path: './img/albums/need_not.jpg', name: 'Need Not Album Cover' }
		},
		{
			title: 'Silent City',
			year: 2017,
			tracks: [
				{ title: 'Earthquake Day' },
				{ title: 'Clarity' },
				{ title: 'Momentum' },
				{ title: 'America Incorporated' },
				{ title: 'Dysphoria' },
				{ title: 'Reality Cruising' },
				{ title: 'Amnesiac' },
				{ title: 'The Optimist' },
				{ title: 'Silent Spring' },
				{ title: 'Looper' }
			],
			summary: 'My first proper album, an experimental indie rock project exploring themes of environmentalism and self-discovery.',
			links: [
				{ name: 'Bandcamp', icon: './img/icons/bandcamp.svg', link: 'https://atlaseuphoria.bandcamp.com/album/silent-city' },
				{ name: 'SoundCloud', icon: './img/icons/soundcloud.svg', link: 'https://soundcloud.com/atlaseuphoria/sets/silent-city' },
				{ name: 'YouTube', icon: './img/icons/youtube.svg', link: 'https://www.youtube.com/watch?v=BdZc8xkQArw&feature=youtu.be' },
				{ name: 'Lyrics', icon: './img/icons/lyrics.svg', link: './docs/lyrics/silent_city.txt' }
			],
			art: { path: './img/albums/silent_city.jpg', name: 'Silent City Album Cover' }
		}
	]

	constructor(props) {
		super(props);
	}

	getAlbums = () => {
		let albums = [];
		for (let i = 0; i < Music.ALBUM_CONFIG.length; i++) {
			let album = Music.ALBUM_CONFIG[i];
			albums.push(<Album key={i} {...album} />)
		}
		return albums;
	}

	render = () => {
		return (
			<div className='page-container'>
				<h1>Music</h1>
				<p>Music is one of my greatest passions - I love experimenting with instruments, genres, sounds, and production techniques. Most of my music is guitar-based, but I also play bass, drums, piano, and trombone. Beyond performing, I'm extremely interested in audio engineering, especially the creative manipulation and incorporation of weird sounds and textures in music. I have a modest home studio for recording myself and friends. While a student, I also worked in Pitt's Music Engineering Laboratory.</p>
				<p>I'm currently focusing on my solo experimental-folk project, Atlas Euphoria. My debut album and EP are available for free streaming on Bandcamp.</p>
				{this.getAlbums()}
			</div>
		);
	};
}