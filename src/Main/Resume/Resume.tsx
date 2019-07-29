import * as React from "react";
import "./Resume.css";

export class ResumeSection extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='resume-section'>
				<div className='resume-section-header'>{this.props.title}</div>
				<div className='resume-section-content'>{this.props.children}</div>
			</div>
		);
	};
}

export class Resume extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='resume-container'>
				<ResumeSection title='Education'/>
				<ResumeSection title='Experience'/>
				<ResumeSection title='Skills'/>
				<ResumeSection title='Awards'/>
				<ResumeSection title='Activities'/>
			</div>
		);
	};
}