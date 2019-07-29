import * as React from "react";
import "./Menu.css";

export class MenuButton extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
				<div className='menu-button' onClick={() => this.props.setPage(this.props.page)}>
					<div className='menu-button-icon'>{this.props.icon}</div>
					<div className='menu-button-text'>{this.props.text}</div>
				</div>
		);
	};
}