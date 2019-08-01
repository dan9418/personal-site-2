import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { SidePanel } from "./SidePanel/SidePanel";

import { Resume } from "./Main/Resume/Resume";
import { WebDev } from "./Main/WebDev/WebDev";
import { Music } from "./Main/Music/Music";
import { Art } from "./Main/Art/Art";
import { Page } from "./Common/Page";
import { PageSection } from "./Common/Headers";

export class App extends React.Component<any, any> {

    static PAGES = [
        {
            id: 'resume',
            name: 'Resume',
            component: Resume
        },
        {
            id: 'code',
            name: 'Code',
            component: WebDev
        },
        {
            id: 'music',
            name: 'Music',
            component: Music
        },
        {
            id: 'art',
            name: 'Art',
            component: Art
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            page: App.PAGES[2]
        }
    }

    setActivePage = (page) => {
        this.setState({
            page: page
        });
    }

    render = () => {
        let PageComponent = this.state.page.component;
        return (
            <>
                <SidePanel pages={App.PAGES} activePage={this.state.page} setActivePage={this.setActivePage}/>
                <Page title={this.state.page.name}>{<PageComponent></PageComponent>}</Page>
            </>
        );
    };
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);