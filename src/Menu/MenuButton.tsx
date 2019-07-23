import * as React from "react";
import "./Menu.css";

export class MenuButton extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
				<div className='menu-button'>
					<div className='menu-button-icon'>X</div>
					<div className='menu-button-text'>{this.props.text}</div>
				</div>
		);
	};
}