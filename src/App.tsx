import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MenuButton } from "./Menu/MenuButton";
import { SidePanelLink } from "./SidePanel/SidePanelLink";
import { TextBlock } from "./TextBlock/TextBlock";

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
                    <MenuButton text='Bio'/>
                    <MenuButton text='Resume'/>
                    <MenuButton text='Web Dev'/>
                    <MenuButton text='Music'/>
                    <MenuButton text='Art'/>
                </div>
				<div id='left'>
                    <SidePanelLink text='LinkedIn'/>
                    <SidePanelLink text='GitHub'/>
                    <SidePanelLink text='Bandcamp'/>
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