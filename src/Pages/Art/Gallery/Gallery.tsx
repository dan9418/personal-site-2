import * as React from "react";
import "./Gallery.css";

export interface GalleryImage {
	name: string;
	caption: string;
	year: number;
	path: string;
}

export type GalleryProps = {
	name: string;
	description: string;
	images: GalleryImage[];
}

type GalleryState = {
	index: number;
}

export class Gallery extends React.Component<GalleryProps, GalleryState> {

	constructor(props) {
		super(props);
		this.state = {
			index: 0
		}
	}

	navigate = (distance) => {
		this.setState((oldState) => {
			let newIndex = (oldState.index + distance) % this.props.images.length;
			if (newIndex < 0) newIndex = newIndex + this.props.images.length;
			return { index: newIndex };
		})
	}

	/*getThumbnails = () => {
		let thumbnails = [];
		for (let i = 0; i < this.props.images.length; i++) {
			let thumbnails = this.props.images[i];
			//thumbnails.push(<a key={i} href={thumbnail.link} target='_blank'><img className='album-link' src={link.icon} alt={link.name}/></a>);
		}
		return thumbnails;
	}*/

	render = () => {
		let main = this.props.images[this.state.index];
		return (
			<div className='gallery-content'>
				<div className='gallery-content-name'>{main.name}<span className='gallery-content-year'>({main.year})</span></div>
				<div className='gallery-main'>
					<div className='gallery-main-nav'>
						<div className='gallery-main-nav-button' onClick={() => this.navigate(-1)}>⯇</div>
					</div>
					<div className='gallery-main-image-container'>
						<img className='gallery-main-image' src={main.path} alt={main.name} />
					</div>
					<div className='gallery-main-nav'>
						<div className='gallery-main-nav-button' onClick={() => this.navigate(1)}>⯈</div>
					</div>
				</div>
				<div className='gallery-content-caption'>{main.caption + ' (' + (this.state.index + 1) + '/' + this.props.images.length + ')'}</div>
			</div>
		);
	};
}