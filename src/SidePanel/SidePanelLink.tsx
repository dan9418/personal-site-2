import * as React from "react";
import "./SidePanel.css";

export class SidePanelLink extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
				<div className='side-panel-link'>
					<div className='side-panel-link-icon'>□</div>
					<div className='side-panel-link-text'>{this.props.text}</div>
				</div>
		);
	};
}