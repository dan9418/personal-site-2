import * as React from "react";
import "./Art.css";
import { Gallery, GalleryProps } from "./Gallery/Gallery";

export class Art extends React.Component<any, any> {

	static GALLERY_CONFIG: GalleryProps[] = [
		{
			name: 'Album Covers',
			description: 'Artwork for various musical projects',
			images: [
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
					name: 'Need Not',
					year: 2018,
					caption: 'Front Cover',
					path: './img/galleries/albums/need_not.jpg'
				},
				{
					name: 'Of Dreams',
					year: 2016,
					caption: 'Front Cover',
					path: './img/galleries/albums/of_dreams.jpg'
				},
				{
					name: 'Out Of Reach',
					year: 2011,
					caption: 'Front Cover',
					path: './img/galleries/albums/out_of_reach.jpg'
				},
				{
					name: 'Peanut Butter Jam',
					year: 2016,
					caption: 'Front Cover',
					path: './img/galleries/albums/peanut_butter_jam.jpg'
				},
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
					name: 'String',
					year: 2016,
					caption: 'Front Cover',
					path: './img/galleries/albums/string.jpg'
				},
				{
					name: 'Yellow Snow',
					year: 2015,
					caption: 'Front Cover',
					path: './img/galleries/albums/yellow_snow.jpg'
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
		for(let i = 0; i < Art.GALLERY_CONFIG.length; i++) {
			let gallery = Art.GALLERY_CONFIG[i];
			galleries.push(<Gallery key={gallery.name} {...gallery} />);
		}
		return galleries;
	}

	render = () => {
		return (
			<div className='page-container'>
				<h1>Art</h1>
				<p>I love art in its many forms - I enjoy drawing and painting, but have mostly been drawn to graphic design. I have done lots of artwork over the years, including work for universities, clubs, and all of my musical projects. My galleries are available below.</p>
				{this.getGalleries()}
			</div>
		);
	};
}