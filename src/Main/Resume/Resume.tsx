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

export class ResumePosition extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='resume-position'>
				<div className='resume-position-header'>
					<div className='resume-position-header-company'>{this.props.company}</div>
					<div className='resume-position-header-title'>{this.props.title}</div>
					<div className='resume-position-subheader'>
						<div className='resume-position-header-location'>{this.props.location}</div>
						<div className='resume-position-header-date'>{this.props.date}</div>
					</div>
				</div>
				<div className='resume-position-content'>{this.props.children}</div>
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
				<ResumeSection title='Education' />
					<ResumePosition
					company='University of Pittsburgh, Swanson School of Engineering'
					date='April 2017'
					location='Pittsburgh, PA'
					></ResumePosition>
				<ResumeSection title='Experience' />
				<ResumePosition
					company='Bentley Systems'
					title='Associate Software Engineer'
					date='May 2016 - July 019'
					location='Pittsburgh, PA'
					></ResumePosition>
					<ResumePosition
					company='The Bank of New York Mellon Corporation'
					title='Software Engineer Intern'
					date='May 2015 – August 2015'
					location='Pittsburgh, PA'
					></ResumePosition>
					<ResumePosition
					company='University of Pittsburgh, Residence Life'
					title='Resident Assistant'
					date='August 2014 - December 2015'
					location='Pittsburgh, PA'
					></ResumePosition>
				<ResumeSection title='Skills' />
				<ResumeSection title='Awards' />
				<ResumeSection title='Activities' />
			</div>
		);
	};
}