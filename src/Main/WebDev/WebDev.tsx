import * as React from "react";
import "./WebDev.css";

export class WebDev extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<h1>Web Development</h1>
				<p>Throughout college, I designed a few Android applications, including a boolean algebra calculator and an “augmented reality dashboard.” The latter was sponsored by Eaton for my senior design project and won 2nd place at the Spring 2017 Pitt Design Expo in my department.</p>
			</>
		);
	};
}