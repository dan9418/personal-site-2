import React = require("react");
import "./Headers.css";

export function PrimaryHeader(props) {
    return <div className='primary-header'>{props.title}</div>;
}

export function SecondaryHeader(props) {

    return (
        <div className='secondary-header'>
            <div className='secondary-header-icon'>
                {props.icon}
            </div>
            <div className='secondary-header-title'>
                {props.title}
            </div>
        </div>
    );

}