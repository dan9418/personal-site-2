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

	getExternalLinks = () => {
		let externalLinks = [];
		for (let i = 0; i < this.props.links.length; i++) {
			let link = this.props.links[i];
			externalLinks.push(
				<SidePanelLink
					key={i}
					link={link.link}
					text={link.name}
					icon={ICONS[link.id]}
					hoverIcon={ICONS.newtab}
				/>)
		}
		return externalLinks;
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
					{this.getExternalLinks()}
				</div>
			</div>
		);
	};
}