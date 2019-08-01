import * as React from "react";
import "./SidePanel.css";

export class SidePanelLink extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		let classes = ['side-panel-link'];
		if (this.props.active) classes.push('active');

		return (
			<div className={classes.join(' ')} onClick={this.props.action}>
				{this.props.active && <>
					<div className='side-panel-link-corner top'><div></div></div>
					<div className='side-panel-link-corner bottom'><div></div></div>
				</>}
				<div className='side-panel-link-icon'>{this.props.icon}</div>
				<div className='side-panel-link-text'>{this.props.text}</div>
			</div>
		);
	};
}