import * as React from "react";
import "./Icon.css";

export class Icon extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (<img className='icon' src={this.props.path}></img>);
	};
}