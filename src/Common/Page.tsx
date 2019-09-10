import * as React from "react";
import "./Page.css";

export function Page(props) {
    return (
        <div className='page-container'>
            <div className='page-header'>{props.title}</div>
            <div className='page-content'>{props.children}</div>
        </div>
    );
}

export function PageSection(props) {
    return (
        <div className='page-section'>
            <div className='page-section-header'>{props.header}</div>
            <div className='page-section-content'>{props.children}</div>
        </div>
    );
}