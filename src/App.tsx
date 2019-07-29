import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MenuButton } from "./Menu/MenuButton";
import { SidePanelLink } from "./SidePanel/SidePanelLink";
import { TextBlock } from "./TextBlock/TextBlock";
import { Icon } from "./Icon/Icon";
import { Bio } from "./Main/Bio/Bio";

export class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <>
                <div id="top">
                    <div id='menu-name'>Dan Bednarczyk</div>
                    <MenuButton text='Bio' icon={<Icon path='./img/icons/home.svg' />} />
                    <MenuButton text='Resume' icon={<Icon path='./img/icons/resume.svg' />} />
                    <MenuButton text='Web Dev' icon={<Icon path='./img/icons/webdev.svg' />} />
                    <MenuButton text='Music' icon={<Icon path='./img/icons/music.svg' />} />
                    <MenuButton text='Art' icon={<Icon path='./img/icons/art.svg' />} />
                </div>
                <div id='left'>
                    <div id='side-panel-header'>
                        <img id='me' src='./img/me.jpg' />
                        <div id='side-panel-header-location'>
                            <img id='side-panel-header-location-icon' src='./img/icons/location.svg' />
                            Davis, CA
                        </div>
                    </div>
                    <SidePanelLink text='LinkedIn' icon={<Icon path='./img/icons/linkedin.svg' />} />
                    <SidePanelLink text='GitHub' icon={<Icon path='./img/icons/github.svg' />} />
                    <SidePanelLink text='Bandcamp' icon={<Icon path='./img/icons/bandcamp.svg' />} />
                </div>
                <div id='right'>
                    <Bio/>
                </div>
            </>
        );
    };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);