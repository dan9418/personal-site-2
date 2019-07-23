import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MenuButton } from "./Menu/MenuButton";
import { SidePanelLink } from "./SidePanel/SidePanelLink";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
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
                    {}
                </div>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);