import * as React from "react";
import "./Bio.css";

export class Bio extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='page-container'>
				<h1>Welcome!</h1>
				<p>I'm a software engineer, environmentalist, musician, and eclectic hobbyist currently based in Pittsburgh, PA. I graduated from the University of Pittsburgh in 2017 and now work full-time with Bentley Systems using a wide range of technologies. Outside of work, I’m involved with many technical and creative projects.</p>
				<p>Beyond software, my greatest interests are audio engineering, bicycling, urban agriculture, healthy living, politics, travel, language, and graphic design.</p>
			</div>
		);
	};
}