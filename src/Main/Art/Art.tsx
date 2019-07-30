import * as React from "react";
import "./Art.css";

export class Art extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='page-container'>
				<h1>Art</h1>
				<p>I love art in its many forms - I enjoy drawing and painting, but have mostly been drawn to graphic design. I have done lots of artwork over the years, including work for universities, clubs, and all of my musical projects. My galleries are available below.</p>
			</div>
		);
	};
}