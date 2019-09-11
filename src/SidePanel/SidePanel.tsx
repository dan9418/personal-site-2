import * as React from "react";
import "./SidePanel.css";
import { ICONS } from "../Common/Icon";
import { SidePanelLink } from "./SidePanelLink";

function getPageLinks(props) {
	let pageLinks = [];
	for (let i = 0; i < props.pages.length; i++) {
		let page = props.pages[i];
		pageLinks.push(
			<SidePanelLink
				key={i}
				active={props.activePage.id === page.id}
				action={() => {
					document.querySelector("#app > div.page").scrollTop = 0;
					props.setPage(page);
				}}
				text={page.name}
				icon={ICONS[page.id]}
			/>
		);
	}
	return pageLinks;
}

function getExternalLinks(props) {
	let externalLinks = [];
	for (let i = 0; i < props.links.length; i++) {
		let link = props.links[i];
		externalLinks.push(
			<SidePanelLink
				key={i}
				link={link.link}
				text={link.name}
				icon={ICONS[link.id]}
				hoverIcon={ICONS.newtab}
			/>
		);
	}
	return externalLinks;
}

export function SidePanel(props) {
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
				{getPageLinks(props)}
			</div>
			<div className='side-panel-section'>
				<div className='side-panel-section-header' />
				{getExternalLinks(props)}
			</div>
		</div>
	);
}