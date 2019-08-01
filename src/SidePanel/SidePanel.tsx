import * as React from "react";
import "./SidePanel.css";
import { ICONS } from "../Common/Icon";
import { SidePanelLink } from "./SidePanelLink";

export class SidePanel extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='side-panel'>
				<div className='side-panel-pic-container'>
					<img className='side-panel-pic' src='./img/me.jpg' />
				</div>
				<div className='side-panel-info'>
					<div className='side-panel-info-item name'>Dan Bednarczyk</div>
					<div className='side-panel-info-item title'>Web Developer</div>
					<div className='side-panel-info-item location'>{ICONS.location}Davis, CA</div>
				</div>
				<div className='side-panel-section'>
					<div className='side-panel-section-header' />
					<SidePanelLink active={this.props.activePage === 0} action={() => this.props.setActivePage(0)} text='Resume' icon={ICONS.resume} />
					<SidePanelLink active={this.props.activePage === 1} action={() => this.props.setActivePage(1)} text='Code' icon={ICONS.webdev} />
					<SidePanelLink active={this.props.activePage === 2} action={() => this.props.setActivePage(2)} text='Music' icon={ICONS.music} />
					<SidePanelLink active={this.props.activePage === 3} action={() => this.props.setActivePage(3)} text='Art' icon={ICONS.art} />
				</div>
				<div className='side-panel-section'>
					<div className='side-panel-section-header' />
					<SidePanelLink text='LinkedIn' icon={ICONS.linkedin} hoverIcon={ICONS.newtab}/>
					<SidePanelLink text='GitHub' icon={ICONS.github} hoverIcon={ICONS.newtab}/>
					<SidePanelLink text='Bandcamp' icon={ICONS.bandcamp} hoverIcon={ICONS.newtab}/>
				</div>
			</div>
		);
	};
}