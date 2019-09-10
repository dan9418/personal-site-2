import * as React from "react";
import "./Page.css";

export function Page(props) {
    return (
        <div className='page-container'>
            <h1 className='page-header'>{props.title}</h1>
            <div className='page-content'>{props.children}</div>
        </div>
    );
}