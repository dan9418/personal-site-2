import * as React from "react";
import "./Music.css";
import { AlbumProps, Album } from "./Album/Album";
import { PageSection, PrimaryHeader } from "../../Common/Headers";

interface AlbumCategory {
	name: string;
	description: string;
	albums: AlbumProps[]
}

export class Music extends React.Component<any, any> {

	static ALBUM_CONFIG: AlbumCategory[] = [
		{
			name: 'Atlas Euphoria',
			description: `I'm currently focusing on my solo experimental-folk project, Atlas Euphoria. My debut album and EP are available for free streaming on Bandcamp.`,
			albums: [
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
						{ name: 'Bandcamp', icon: 'bandcamp', link: 'https://atlaseuphoria.bandcamp.com/album/need-not' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/need_not.txt' }
					],
					art: { path: './img/albums/need_not.jpg', name: 'Need Not album cover' }
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
						{ name: 'Bandcamp', icon: 'bandcamp', link: 'https://atlaseuphoria.bandcamp.com/album/silent-city' },
						{ name: 'SoundCloud', icon: 'soundcloud', link: 'https://soundcloud.com/atlaseuphoria/sets/silent-city' },
						{ name: 'YouTube', icon: 'youtube', link: 'https://www.youtube.com/watch?v=BdZc8xkQArw&feature=youtu.be' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/silent_city.txt' }
					],
					art: { path: './img/albums/silent_city.jpg', name: 'Silent City album cover' }
				}
			],
		},
		{
			name: 'The Vectors',
			description: `My joke ska band from college.`,
			albums: [
				{
					title: 'Peanut Butter Jam',
					year: 2017,
					tracks: [
						{ title: 'Peanut Butter Jam' }
					],
					summary: '',
					links: [
						{ name: 'SoundCloud', icon: 'soundcloud', link: 'https://soundcloud.com/livingfiction/peanut-butter-jam' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/peanut_butter_jam.txt' }
					],
					art: { path: './img/albums/peanut_butter_jam.jpg', name: 'Peanut Butter Jam album cover' }
				},
				{
					title: 'Songs; And How NOT To Write Them!',
					year: 2015,
					tracks: [
						{ title: 'Revolution: Day One' },
						{ title: 'Bob', note: '(NOFX cover)' },
						{ title: 'Revenge of the Pink Flamingo' },
						{ title: 'I Melt With You', note: '(Modern English cover)' },
						{ title: 'No Direction' },
						{ title: 'tourette\'s', note: '(Nirvana cover)' },
						{ title: 'Sell Out', note: '(Reel Big Fish cover)' },
						{ title: 'Just Another' },
						{ title: 'Walking The Plank' },
						{ title: 'New Girl', note: '(The Suicide Machines cover)' },
						{ title: 'Cartoon Chase Scene' },
						{ title: 'Blue Moon', note: '(The Marcels cover)' },
						{ title: 'The Wave Equation' },
						{ title: 'What I Got', note: '(Sublime cover)' },
						{ title: 'Requiem For Third Wave Ska' }
					],
					summary: 'A low-budget ska-punk album filled with humor and classic covers.',
					links: [
						{ name: 'SoundCloud', icon: 'soundcloud', link: 'https://soundcloud.com/livingfiction/sets/songs-and-how-not-to-write-them' },
						{ name: 'YouTube', icon: 'youtube', link: 'https://www.youtube.com/watch?v=WDdDrvqkbOk&list=PLF0EOAvsOKeCp_HowkIF6CVeExxuDXYRm' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/songs_and_how_not_to_write_them.txt' }
					],
					art: { path: './img/albums/songs_and_how_not_to_write_them.jpg', name: 'Songs; And How NOT To Write Them! album cover' }
				},
				{
					title: 'Yellow Snow',
					year: 2015,
					tracks: [
						{ title: `White Christmas [Irving Berlin, The Drifters]` },
						{ title: `The Year That Flying Monkeys Saved Christmas` },
						{ title: `Randolph The Red-Headed Gingerbread Man` },
						{ title: `The Elf Who Wanted To Be A Dentist` },
						{ title: `Jingle Squeals` }
					],
					summary: 'A ridiculous EP to celebrate Christmas in July. Not to be taken seriously.',
					links: [
						{ name: 'SoundCloud', icon: 'soundcloud', link: 'https://soundcloud.com/livingfiction/sets/the-vectors-yellow-snow' },
						{ name: 'YouTube', icon: 'youtube', link: 'https://www.youtube.com/watch?v=f2EV4bBB4E8&list=PLF0EOAvsOKeAv8CK8nJT1sRIGEK17w96s' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/yellow_snow.txt' }
					],
					art: { path: './img/albums/yellow_snow.jpg', name: 'Yellow Snow album cover' }
				}
			]
		},
		{
			name: 'Other Projects',
			description: 'Old projects',
			albums: [
				{
					title: 'Human Architecture',
					year: 2017,
					tracks: [
						{ title: 'History Begins', note: '(Temperance)' },
						{ title: 'Collector', note: '(Lust)' },
						{ title: 'Constellations', note: '(Patience)' },
						{ title: 'New Idol', note: '(Averice)' },
						{ title: 'Tremors', note: '(Envy)' },
						{ title: 'In Valor & Venom', note: '(Wrath)' },
						{ title: 'Gyroscope', note: '(Kindness)' },
						{ title: 'Eyes Averted', note: '(Diligence)' },
						{ title: 'Fiend', note: '(Gluttony)' },
						{ title: 'Atrophy', note: '(Sloth)' },
						{ title: 'Waking Hours', note: '(Chastity)' },
						{ title: 'Seek Shelter', note: '(Charity)' },
						{ title: 'Architecture', note: '(Pride)' },
						{ title: 'Last Will', note: '(Humility)' }
					],
					summary: 'An experimental instrumental prog-rock concept album exploring the Seven Deadly Sins.',
					links: [
						{ name: 'SoundCloud', icon: 'soundcloud', link: 'https://soundcloud.com/atlaseuphoria/sets/human-architecture' },
						{ name: 'YouTube', icon: 'youtube', link: 'https://www.youtube.com/watch?v=vzKuYdfCpdk' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/human_architecture.txt' }
					],
					art: { path: './img/albums/human_architecture.jpg', name: 'Human Architecture album cover' }
				},
				{
					title: 'Out Of Reach',
					year: 2011,
					tracks: [
						{ title: 'New Life' },
						{ title: 'Swift' },
						{ title: 'Pink Flamingo' },
						{ title: 'Exactly!' },
						{ title: 'Memento Mori' },
						{ title: 'In Loving Memory...', note: '(Tribute to Herbert Vargo III)' },
						{ title: 'Quicksand' },
						{ title: 'The Bullfighter' },
						{ title: 'Paperwork' },
						{ title: 'Resurrection' },
						{ title: 'Identity' },
						{ title: 'The Ballad of Billy Mays' },
						{ title: 'You Took Everything', note: '(An Interlude)' },
						{ title: 'Demolition' },
						{ title: 'The Marrow of a Bone' },
						{ title: 'Frail' },
						{ title: 'Temptation' },
						{ title: 'Release' },
						{ title: 'Execution' },
						{ title: 'Extrication' }
					],
					summary: 'My first formal collection of songs, recorded during my sophomore year of high school.',
					links: [
						{ name: 'SoundCloud', icon: 'soundcloud', link: 'https://soundcloud.com/livingfiction/sets/out-of-reach' },
						{ name: 'YouTube', icon: 'youtube', link: 'https://www.youtube.com/watch?v=mL2CbEXX6lo&list=PLF0EOAvsOKeDZnT4z2Z-tZaFzL0qVuk6f' },
						{ name: 'Lyrics', icon: 'lyrics', link: './docs/lyrics/out_of_reach.txt' }
					],
					art: { path: './img/albums/out_of_reach.jpg', name: 'Out Of Reach album cover' }
				}
			]
		}
	];

	constructor(props) {
		super(props);
	}

	getAlbums = () => {
		let albums = [];
		for (let i = 0; i < Music.ALBUM_CONFIG.length; i++) {
			let category = Music.ALBUM_CONFIG[i];
			albums.push(
				<PageSection header={<PrimaryHeader title={category.name} key={category.name + i}/>}>
					<p>{category.description}</p>
					<>{category.albums.map((album, index) => { return <Album key={album.title} {...album} />; })}</>
				</PageSection>
			);
		}
		return albums;
	}

	render = () => {
		return (
			<>
				<PageSection>
					<p>Music is one of my greatest passions - I love experimenting with instruments, genres, sounds, and production techniques. Most of my music is guitar-based, but I also play bass, drums, piano, and trombone. Beyond performing, I'm extremely interested in audio engineering, especially the creative manipulation and incorporation of weird sounds and textures in music. I have a modest home studio for recording myself and friends. While a student, I also worked in Pitt's Music Engineering Laboratory.</p>
				</PageSection>
				{this.getAlbums()}
			</>
		);
	};
}