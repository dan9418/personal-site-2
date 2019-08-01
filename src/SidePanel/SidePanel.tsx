import * as React from "react";
import "./SidePanel.css";
import { ICONS } from "../Common/Icon";
import { SidePanelLink } from "./SidePanelLink";

export class SidePanel extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	getPageLinks = () => {
		let pageLinks = [];
		for (let i = 0; i < this.props.pages.length; i++) {
			let page = this.props.pages[i];
			pageLinks.push(
				<SidePanelLink
					key={i}
					active={this.props.activePage.id === page.id}
					action={() => this.props.setActivePage(page)}
					text={page.name}
					icon={ICONS[page.id]}
				/>)
		}
		return pageLinks;
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
					{this.getPageLinks()}
				</div>
				<div className='side-panel-section'>
					<div className='side-panel-section-header' />
					<SidePanelLink text='LinkedIn' icon={ICONS.linkedin} hoverIcon={ICONS.newtab} />
					<SidePanelLink text='GitHub' icon={ICONS.github} hoverIcon={ICONS.newtab} />
					<SidePanelLink text='Bandcamp' icon={ICONS.bandcamp} hoverIcon={ICONS.newtab} />
				</div>
			</div>
		);
	};
}