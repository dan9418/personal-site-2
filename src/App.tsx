import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { MenuButton } from "./Menu/MenuButton";
import { Bio } from "./Main/Bio/Bio";
import { Resume } from "./Main/Resume/Resume";
import { WebDev } from "./Main/WebDev/WebDev";
import { Music } from "./Main/Music/Music";
import { Art } from "./Main/Art/Art";
import { SidePanelLink } from "./SidePanel/SidePanelLink";
import { ICONS } from "./Common/Icon";

export class App extends React.Component<any, any> {

    static PAGES = [
        Resume,
        WebDev,
        Music,
        Art
    ]

    constructor(props) {
        super(props);
        this.state = {
            page: 0
        }
    }

    setActivePage = (page) => {
        this.setState({
            page: page
        });
    }

    render = () => {
        let Page = App.PAGES[this.state.page];
        return (
            <>
                <div className='side-panel'>
                    <div className='side-panel-header'>
                        <img className='me' src='./img/me.jpg' />
                    </div>
                    <div className='side-panel-info'>
                        <div className='side-panel-info-item name'>
                            Dan Bednarczyk
                        </div>
                        <div className='side-panel-info-item title'>
                            Web Developer
                        </div>
                        <div className='side-panel-info-item location'>
                            {ICONS.location}
                            Davis, CA
                        </div>
                    </div>
                    <div className='side-panel-section'>
                        <div className='side-panel-section-header'/>
                        <SidePanelLink active={this.state.page === 0} action={() => this.setActivePage(0)} text='Resume' icon={ICONS.resume} />
                        <SidePanelLink active={this.state.page === 1} action={() => this.setActivePage(1)} text='Web Dev' icon={ICONS.webdev} />
                        <SidePanelLink active={this.state.page === 2} action={() => this.setActivePage(2)} text='Music' icon={ICONS.music} />
                        <SidePanelLink active={this.state.page === 3} action={() => this.setActivePage(3)} text='Art' icon={ICONS.art} />
                    </div>
                    <div className='side-panel-section'>
                        <div className='side-panel-section-header'/>
                        <SidePanelLink text='LinkedIn' icon={ICONS.linkedin} />
                        <SidePanelLink text='GitHub' icon={ICONS.github} />
                        <SidePanelLink text='Bandcamp' icon={ICONS.bandcamp} />
                    </div>
                </div>
                <div className='main'>
                    <Page />
                </div>
            </>
        );
    };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);