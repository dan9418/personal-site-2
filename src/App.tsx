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

    constructor(props) {
        super(props);
        this.state = {
            page: Resume
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
                <div className="navbar">
                    <MenuButton text='Bio' setPage={this.setPage} page={Bio} icon={ICONS.home} />
                    <MenuButton text='Resume' setPage={this.setPage} page={Resume} icon={ICONS.resume} />
                    <MenuButton text='Web Dev' setPage={this.setPage} page={WebDev} icon={ICONS.webdev} />
                    <MenuButton text='Music' setPage={this.setPage} page={Music} icon={ICONS.music} />
                    <MenuButton text='Art' setPage={this.setPage} page={Art} icon={ICONS.art} />
                </div>
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
                    <SidePanelLink text='LinkedIn' icon={ICONS.linkedin} />
                    <SidePanelLink text='GitHub' icon={ICONS.github} />
                    <SidePanelLink text='Bandcamp' icon={ICONS.bandcamp} />
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