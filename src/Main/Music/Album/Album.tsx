import * as React from "react";
import "./Album.css";

export interface IconLink {
	name: string;
	icon: string;
	link: string;
}

export interface Image {
	name: string;
	path: string;
}

export interface Track {
	title: string;
	note?: string;
}

export type AlbumProps = {
	title: string;
	year?: number;
	tracks: Track[];
	art?: Image;
	links: IconLink[];
	summary: string;
}

export class Album extends React.Component<AlbumProps, any> {

	constructor(props) {
		super(props);
	}

	getLinks = () => {
		let links = [];
		for(let i = 0; i < this.props.links.length; i++) {
			let link = this.props.links[i];
			links.push(<a key={i} href={link.link} target='_blank'><img className='album-link' src={link.icon} alt={link.name}/></a>);
		}
		return links;
	}

	getTracks = () => {
		let tracks = [];
		for(let i = 0; i < this.props.tracks.length; i++) {
			let track = this.props.tracks[i];
			tracks.push(<li key={i}>{track.title}</li>)
		}
		return <ol>{tracks}</ol>;
	}

	render = () => {
		return (
			<div className='album'>
				<div className='album-header'>
					<div className='album-title'>{this.props.title}<span>({this.props.year})</span></div>
				</div>
				<div className='album-content'>
					<div className='album-art-container'>
						<img className='album-art' src={this.props.art.path} alt={this.props.art.name}/>
					</div>
					<div className='album-tracklist'>{this.getTracks()}</div>
					<div className='album-link-container'>{this.getLinks()}</div>
					<div className='album-summary'>{this.props.summary}</div>
				</div>
			</div>
		);
	};
}