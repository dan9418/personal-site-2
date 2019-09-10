import * as React from "react";
import "./Gallery.css";
import { useState } from "react";

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

function navigateGallery(setIndex, current: number, distance: number, max: number) {
	let newIndex = (current + distance) % max;
	if (newIndex < 0) newIndex = newIndex + max;
	setIndex(newIndex);
}

export function Gallery(props: GalleryProps) {

	const [index, setIndex] = useState(0);
	const main = props.images[index];

	return (
		<div className='gallery-content'>
			<div className='gallery-content-name'>{main.name}<span className='gallery-content-year'>{main.year && '(' + main.year + ')'}</span></div>
			<div className='gallery-main'>
				<div className='gallery-main-nav'>
					<div className='gallery-main-nav-button' onClick={() => navigateGallery(setIndex, index, -1, props.images.length)}>⯇</div>
				</div>
				<div className='gallery-main-image-container'>
					<img className='gallery-main-image' src={main.path} alt={main.name} />
				</div>
				<div className='gallery-main-nav'>
					<div className='gallery-main-nav-button' onClick={() => navigateGallery(setIndex, index, 1, props.images.length)}>⯈</div>
				</div>
			</div>
			<div className='gallery-content-caption'>{main.caption + ' (' + (index + 1) + '/' + props.images.length + ')'}</div>
		</div>
	);
}