import * as React from "react";
import "./Page.css";

export class Page extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <>
                <div className='page-container'>
                    <div className='page-header'>{this.props.title}</div>
                    <div className='page-content'>{this.props.children}</div>
                </div>
            </>
        );
    };
}