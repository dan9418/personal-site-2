import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";
import { SidePanel } from "./SidePanel/SidePanel";

import { Resume } from "./Pages/Resume/Resume";
import { Code } from "./Pages/Code/Code";
import { Music } from "./Pages/Music/Music";
import { Art } from "./Pages/Art/Art";
import { Page } from "./Common/Page";
import { useState } from "react";

const APP_PAGES = [
    {
        id: 'resume',
        name: 'Resume',
        component: Resume
    },
    {
        id: 'code',
        name: 'Code',
        component: Code
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

const APP_LINKS = [
    {
        id: 'linkedin',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/danielbednarczyk/'
    },
    {
        id: 'github',
        name: 'GitHub',
        link: 'https://github.com/dan9418/'
    },
    {
        id: 'bandcamp',
        name: 'Bandcamp',
        link: 'https://atlaseuphoria.bandcamp.com/'
    }
]

export function App(props) {

    const [page, setPage] = useState(APP_PAGES[0]);
    const PageComponent = page.component;

    return (
        <>
            <SidePanel pages={APP_PAGES} links={APP_LINKS} activePage={page} setPage={setPage} />
            <Page title={page.name}>{<PageComponent></PageComponent>}</Page>
        </>
    );
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);