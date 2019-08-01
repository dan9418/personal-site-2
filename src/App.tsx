import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { SidePanel } from "./SidePanel/SidePanel";

import { Resume } from "./Main/Resume/Resume";
import { WebDev } from "./Main/WebDev/WebDev";
import { Music } from "./Main/Music/Music";
import { Art } from "./Main/Art/Art";
import { Page } from "./Common/Page";

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
            page: 2
        }
    }

    setActivePage = (page) => {
        this.setState({
            page: page
        });
    }

    render = () => {
        let PageContent = App.PAGES[this.state.page];
        return (
            <>
                <SidePanel activePage={this.state.page} setActivePage={this.setActivePage}/>
                <Page title='Music'>{<PageContent></PageContent>}</Page>
            </>
        );
    };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);