import * as React from "react";
import "./Album.css";
import { ICONS } from "../../../Common/Icon";
import { SecondaryHeader, PageSection } from "../../../Common/Headers";

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
			links.push(<a key={i} href={link.link} target='_blank'>{ICONS[link.icon]}</a>);
		}
		return links;
	}

	getTracks = () => {
		let tracks = [];
		for(let i = 0; i < this.props.tracks.length; i++) {
			let track = this.props.tracks[i];
			tracks.push(<li className='album-track' key={i}>{track.title}<span className='album-track-note'>{track.note}</span></li>)
		}
		return <ol>{tracks}</ol>;
	}

	render = () => {
		return (
			<PageSection header={<SecondaryHeader title={this.props.title + ' (' + this.props.year + ')'}/>}>
				<p className='album-summary'>{this.props.summary}</p>
				<div className='album-content'>
					<div className='album-art-container'>
						<img className='album-art' src={this.props.art.path} alt={this.props.art.name}/>
						<div className='album-link-container'>{this.getLinks()}</div>
					</div>
					<div className='album-tracklist'>{this.getTracks()}</div>
				</div>
			</PageSection>
		);
	};
}