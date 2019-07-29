import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MenuButton } from "./Menu/MenuButton";
import { SidePanelLink } from "./SidePanel/SidePanelLink";
import { TextBlock } from "./TextBlock/TextBlock";
import { Icon } from "./Icon/Icon";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
        let bio1 = "I'm a software engineer, environmentalist, musician, and eclectic hobbyist currently based in Pittsburgh, PA. I graduated from the University of Pittsburgh in 2017 and now work full-time with Bentley Systems using a wide range of technologies. Outside of work, I’m involved with many technical and creative projects.";
        let bio2 = "Beyond software, my greatest interests are audio engineering, bicycling, urban agriculture, healthy living, politics, travel, language, and graphic design.";

		return (
			<>
                <div id="top">
                    <MenuButton text='Bio' icon={<Icon path='./img/icons/home.svg'/>}/>
                    <MenuButton text='Resume' icon={<Icon path='./img/icons/resume.svg'/>}/>
                    <MenuButton text='Web Dev' icon={<Icon path='./img/icons/webdev.svg'/>}/>
                    <MenuButton text='Music' icon={<Icon path='./img/icons/music.svg'/>}/>
                    <MenuButton text='Art' icon={<Icon path='./img/icons/art.svg'/>}/>
                </div>
				<div id='left'>
                    <div id='side-panel-header'>[photo]</div>
                    <SidePanelLink text='LinkedIn' icon={<Icon path='./img/icons/linkedin.svg'/>}/>
                    <SidePanelLink text='GitHub' icon={<Icon path='./img/icons/github.svg'/>}/>
                    <SidePanelLink text='Bandcamp' icon={<Icon path='./img/icons/bandcamp.svg'/>}/>
                </div>
                <div id='right'>
                    <h1>Welcome!</h1>
                    <TextBlock text={bio1}/>
                    <TextBlock text={bio2}/>
                </div>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);