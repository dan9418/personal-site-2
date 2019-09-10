import * as React from "react";
import "./Album.css";
import { ICONS } from "../../../Common/Icon";

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

function getAlbumLinks(props) {
	let links = [];
	for (let i = 0; i < props.links.length; i++) {
		let link = props.links[i];
		links.push(<a key={i} href={link.link} target='_blank'>{ICONS[link.icon]}</a>);
	}
	return links;
}

function getAlbumTracks(props) {
	let tracks = [];
	for (let i = 0; i < props.tracks.length; i++) {
		let track = props.tracks[i];
		tracks.push(<li className='album-track' key={i}>{track.title}<span className='album-track-note'>{track.note}</span></li>)
	}
	return <ol>{tracks}</ol>;
}

export function Album(props: AlbumProps) {
	return (
		<div>
			<h3>{props.title + ' (' + props.year + ')'}</h3>
			<p className='album-summary'>{props.summary}</p>
			<div className='album-content'>
				<div className='album-art-container'>
					<img className='album-art' src={props.art.path} alt={props.art.name} />
					<div className='album-link-container'>{getAlbumLinks(props)}</div>
				</div>
				<div className='album-tracklist'>{getAlbumTracks(props)}</div>
			</div>
		</div>
	);
}