import React = require("react");
import "./Headers.css";

export class PageSection extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='page-section'>
                <div className='page-section-header'>{this.props.header}</div>
                <div className='page-section-content'>{this.props.children}</div>
            </div>
        );
    };
}

export class PrimaryHeader extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (<div className='primary-header'>{this.props.title}</div>);
    };
}

export class SecondaryHeader extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className='secondary-header'>
                <div className='secondary-header-icon'>
                    {this.props.icon}
                </div>
                <div className='secondary-header-title'>
                    {this.props.title}
                </div>
            </div>
        );
    };
}