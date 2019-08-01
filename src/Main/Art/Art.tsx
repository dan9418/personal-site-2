import * as React from "react";
import "./Art.css";
import { Gallery, GalleryProps } from "./Gallery/Gallery";
import { PageSection } from "../../Common/Headers";

export class Art extends React.Component<any, any> {

	static GALLERY_CONFIG: GalleryProps[] = [
		{
			name: 'Album Covers',
			description: 'Artwork for various musical projects',
			images: [
				{
					name: 'Silent City',
					year: 2017,
					caption: 'Front Cover',
					path: './img/galleries/albums/silent_city.jpg'
				},
				{
					name: 'Silent City',
					year: 2017,
					caption: 'Back Cover',
					path: './img/galleries/albums/silent_city_back.jpg'
				},
				{
					name: 'Need Not',
					year: 2018,
					caption: 'Front Cover',
					path: './img/galleries/albums/need_not.jpg'
				},
				{
					name: 'Peanut Butter Jam',
					year: 2016,
					caption: 'Front Cover',
					path: './img/galleries/albums/peanut_butter_jam.jpg'
				},
				{
					name: 'Songs; And How NOT To Write Them!',
					year: 2015,
					caption: 'Front Cover',
					path: './img/galleries/albums/songs_and_how_not_to_write_them.jpg'
				},
				{
					name: 'Songs; And How NOT To Write Them!',
					year: 2015,
					caption: 'Back Cover',
					path: './img/galleries/albums/songs_and_how_not_to_write_them_back.jpg'
				},
				{
					name: 'Yellow Snow',
					year: 2015,
					caption: 'Front Cover',
					path: './img/galleries/albums/yellow_snow.jpg'
				},
				{
					name: 'Human Architecture',
					year: 2017,
					caption: 'Front Cover',
					path: './img/galleries/albums/human_architecture.jpg'
				},
				{
					name: 'Mac DeMarco Covers',
					year: 2017,
					caption: 'Parody of Mac DeMarco\'s album \'2\'',
					path: './img/galleries/albums/mac_demarco_covers.jpg'
				},
				{
					name: 'Out Of Reach',
					year: 2011,
					caption: 'Front Cover',
					path: './img/galleries/albums/out_of_reach.jpg'
				},
				{
					name: 'String',
					year: 2017,
					caption: 'Single artwork commissioned by Indigo Zoo',
					path: './img/galleries/albums/string.jpg'
				},
				{
					name: 'Of Dreams',
					year: 2017,
					caption: 'Front Cover',
					path: './img/galleries/albums/of_dreams.jpg'
				}
			]
		},
		{
			name: 'Snapchat Filters',
			description: 'Some Snapchat geofilters I designed in college',
			images: [
				{
					name: 'Chesterfield Street',
					year: 2015,
					caption: '...',
					path: './img/galleries/filters/chesterfield.png'
				},
				{
					name: 'WPTS Radio',
					year: 2015,
					caption: '...',
					path: './img/galleries/filters/wpts.png'
				},
				{
					name: 'Ward Street',
					year: 2016,
					caption: '...',
					path: './img/galleries/filters/ward.png'
				},
				{
					name: 'Pitt',
					year: 2015,
					caption: '...',
					path: './img/galleries/filters/pitt.jpg'
				}
			]
		},
		{
			name: 'Just For Fun',
			description: 'Some pieces indulging my goofy sense of humor',
			images: [
				{
					name: 'Angels & Demons',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/angel_demon.jpg'
				},
				{
					name: 'CEO Bednarczyk',
					year: 2013,
					caption: '...',
					path: './img/galleries/personal/ceo.jpg'
				},
				{
					name: 'Stalemate',
					year: 2017,
					caption: '...',
					path: './img/galleries/personal/chess.jpg'
				},
				{
					name: 'Dolla Dolla Bill Y\'all',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/dollar.jpg'
				},
				{
					name: 'The Godfather Parody',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/godfather.jpg'
				},
				{
					name: 'Hostage',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/hostage.jpg'
				},
				{
					name: 'My Good Friend Jimmy',
					year: 2014,
					caption: '...',
					path: './img/galleries/personal/jimmy_fallon.jpg'
				},
				{
					name: 'MiniMe',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/minime.jpg'
				},
				{
					name: 'Have You Seen Me?',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/missing_fridge.jpg'
				},
				{
					name: 'Multitasking',
					year: 2009,
					caption: '...',
					path: './img/galleries/personal/multitasking.jpg'
				},
				{
					name: 'The Simpsons Parody',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/simpsons.jpg'
				},
				{
					name: 'Skydiving',
					year: 2011,
					caption: '...',
					path: './img/galleries/personal/skydiving.jpg'
				},
				{
					name: 'Painted',
					year: 2011,
					caption: 'Inspired by the album art for Green Day\'s album "Shenanigans"',
					path: './img/galleries/personal/spray_paint.jpg'
				},
				{
					name: 'Digital World',
					year: 2012,
					caption: 'Help?',
					path: './img/galleries/personal/tv.jpg'
				}
			]
		},
		{
			name: 'T-Shirts',
			description: 'Some shirts I designed throughout college',
			images: [
				{
					name: 'E-Week: Harry Potter',
					year: 2014,
					caption: '...',
					path: './img/galleries/shirts/harry_potter.jpg'
				},
				{
					name: 'E-Week: Hunger Games',
					year: 2015,
					caption: '...',
					path: './img/galleries/shirts/hunger_games.jpg'
				},
				{
					name: 'E-Week: Freshmen Crest',
					year: 2014,
					caption: '...',
					path: './img/galleries/shirts/freshmen.jpg'
				},
				{
					name: 'E-Week: Pixar',
					year: 2017,
					caption: '...',
					path: './img/galleries/shirts/pixar.jpg'
				},
				{
					name: 'The Panther Pitt',
					year: 2016,
					caption: '...',
					path: './img/galleries/shirts/panther_pitt.jpg'
				}
			]
		},
		{
			name: 'Tattoos',
			description: 'Some tattoos I designed',
			images: [
				{
					name: 'Nature Arm Band',
					year: 2017,
					caption: '...',
					path: './img/galleries/tattoos/lost_is_found.jpg'
				},
				{
					name: 'Harmonic Series',
					year: 2019,
					caption: '...',
					path: './img/galleries/tattoos/harmonic_series.png'
				},
				{
					name: 'Binary Cross',
					year: 2015,
					caption: '...',
					path: './img/galleries/tattoos/binary_cross.png'
				},
				{
					name: 'Bike',
					year: 2018,
					caption: '...',
					path: './img/galleries/tattoos/bike.png'
				}
			]
		}
	]

	constructor(props) {
		super(props);
	}

	getGalleries = () => {
		<Gallery name='Tattoos' description='Some tattoos.' images={[]} />
		let galleries = [];
		for (let i = 0; i < Art.GALLERY_CONFIG.length; i++) {
			let gallery = Art.GALLERY_CONFIG[i];
			galleries.push(<Gallery key={gallery.name} {...gallery} />);
		}
		return galleries;
	}

	render = () => {
		return (
			<>
				<PageSection>
					<p>I love art in its many forms - I enjoy drawing and painting, but have mostly been drawn to graphic design. I have done lots of artwork over the years, including work for universities, clubs, and all of my musical projects. My galleries are available below.</p>
				</PageSection>
				{this.getGalleries()}
			</>
		);
	};
}