import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MenuButton } from "./Menu/MenuButton";
import { Icon } from "./Icon/Icon";
import { Bio } from "./Main/Bio/Bio";
import { Resume } from "./Main/Resume/Resume";
import { WebDev } from "./Main/WebDev/WebDev";
import { Music } from "./Main/Music/Music";
import { Art } from "./Main/Art/Art";
import { SidePanelLink } from "./SidePanel/SidePanelLink";

export class App extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            page: Art
        }
    }

    setPage = (page) => {
        this.setState({
            page: page
        });
    }

    render = () => {
        let Page = this.state.page;
        return (
            <>
                <div id="top">
                    <MenuButton text='Bio' setPage={this.setPage} page={Bio} icon={<Icon path='./img/icons/home.svg' />} />
                    <MenuButton text='Resume' setPage={this.setPage} page={Resume} icon={<Icon path='./img/icons/resume.svg' />} />
                    <MenuButton text='Web Dev' setPage={this.setPage} page={WebDev} icon={<Icon path='./img/icons/webdev.svg' />} />
                    <MenuButton text='Music' setPage={this.setPage} page={Music} icon={<Icon path='./img/icons/music.svg' />} />
                    <MenuButton text='Art' setPage={this.setPage} page={Art} icon={<Icon path='./img/icons/art.svg' />} />
                </div>
                <div id='left'>
                    <div id='side-panel-header'>
                        <img id='me' src='./img/me.jpg' />
                    </div>
                    <div id='side-panel-info'>
                        <div className='side-panel-info-item name'>
                            Dan Bednarczyk
                        </div>
                        <div className='side-panel-info-item title'>
                            Web Developer
                        </div>
                        <div className='side-panel-info-item location'>
                            <img className='info-icon' src='./img/icons/location.svg' />
                            Davis, CA
                        </div>
                    </div>
                    <SidePanelLink text='LinkedIn' icon={<Icon path='./img/icons/linkedin.svg' />} />
                    <SidePanelLink text='GitHub' icon={<Icon path='./img/icons/github.svg' />} />
                    <SidePanelLink text='Bandcamp' icon={<Icon path='./img/icons/bandcamp.svg' />} />
                </div>
                <div id='right'>
                    <Page />
                </div>
            </>
        );
    };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);