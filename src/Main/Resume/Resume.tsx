import * as React from "react";
import "./Resume.css";
import { ICONS } from "../../Common/Icon";

export class ResumeMainHeader extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (<div className='resume-main-header'>{this.props.title}</div>);
	};
}


export class ResumeSection extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	/*getDetails = () => {
		let details = [];
		for (let i = 0; i < this.props.details.length; i++) {
			let detail = this.props.details[i];
			details.push(<ResumeDetail key={i} date={detail.date}>{detail.text}</ResumeDetail>);
		}
		return details;
	}*/

	render = () => {
		return (
			<div className='resume-section'>
				<div className='resume-section-header'>{this.props.header}</div>
				<div className='resume-section-content'>{this.props.children}</div>
			</div>
		);
	};
}

export class ResumePositionHeader extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='resume-position-header'>
				<div className='resume-position-header-top'>
					<div className='resume-position-header-company'>{this.props.company}</div>
					<div className='resume-position-header-date'>{this.props.date}</div>
				</div>
				<div className='resume-position-header-bottom'>
					<div className='resume-position-header-title'>{this.props.title}</div>
					<div className='resume-position-header-location'>{ICONS.location}{this.props.location}</div>
				</div>
			</div>
		);
	};
}

export class ResumeProjectHeader extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='resume-project-header'>
				<div className='resume-project-header-icon'>
					{this.props.icon}
				</div>
				<div className='resume-project-header-name'>
					{this.props.name}
				</div>
			</div>
		);
	};
}

export class ResumeDetail extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<div className='resume-detail'>
				<div className='resume-detail-content'>
					<div className='resume-detail-bullet'>•</div>
					{this.props.children}
				</div>
				<div className='resume-detail-date'>
					{this.props.date}
				</div>
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
			<div className='page-container'>
				<ResumeSection header={<ResumeMainHeader title='Professional Experience' />}>

					<ResumeSection
						header={<ResumePositionHeader
							company='Bentley Systems'
							title='Associate Software Engineer'
							date='May 2016 - July 019'
							location='Pittsburgh, PA'
						/>}>
						<ResumeDetail>Selected for inaugural international program (3 months in Vilnius, Lithuania)</ResumeDetail>
						<ResumeDetail>Works in cooperative agile environments using Scrum and Kanban</ResumeDetail>
						<ResumeDetail>Uses .NET, TypeScript, AngularJS, C++, and SQL in web apps and APIs</ResumeDetail>
						<ResumeDetail>Develops enhancements, fixes defects, and performs research-oriented tasks</ResumeDetail>
						<ResumeDetail>Writes integration and unit tests using several frameworks</ResumeDetail>
					</ResumeSection>

					<ResumeSection
						header={<ResumePositionHeader
							company='The Bank of New York Mellon Corporation'
							title='Software Engineer Intern'
							date='May 2015 – August 2015'
							location='Pittsburgh, PA'
						/>}>
						<ResumeDetail>Automated daily data comparisons for updating central Reference Data Hub</ResumeDetail>
						<ResumeDetail>Implemented in Java for separate partitions of MVS/Linux mainframe</ResumeDetail>
						<ResumeDetail>Mapped data across DB2 databases to unify information</ResumeDetail>
					</ResumeSection>

					<ResumeSection
						header={<ResumePositionHeader
							company='University of Pittsburgh, Residence Life'
							title='Resident Assistant'
							date='August 2014 - December 2015'
							location='Pittsburgh, PA'
						/>}>
						<ResumeDetail>Enforced community standards and expectations</ResumeDetail>
						<ResumeDetail>Managed 57 freshmen residents</ResumeDetail>
						<ResumeDetail>Organized social and engineering programs for students</ResumeDetail>
					</ResumeSection>

				</ResumeSection>

				<ResumeSection header={<ResumeMainHeader title='Education' />}>

					<ResumeSection
						header={<ResumePositionHeader
							company='University of Pittsburgh, Swanson School of Engineering'
							title='BS, Computer Engineering'
							date='April 2017'
							location='Pittsburgh, PA'
						/>}>
						<ResumeDetail>3.71 GPA</ResumeDetail>
						<ResumeDetail>Selected as the Outstanding Senior in departmental class</ResumeDetail>
						<ResumeDetail>Won 2nd place at departmental senior design expo for augmented reality project</ResumeDetail>
						<ResumeDetail>Won 1st place for freshmen computer engineering conference paper</ResumeDetail>
						<ResumeDetail>Served as Engineering Week Chairmen for Engineering Student Council</ResumeDetail>
					</ResumeSection>
				</ResumeSection>

				<ResumeSection header={<ResumeMainHeader title='Technical Skills' />}>
					<ul>
						<li>JavaScript</li>
						<li>TypeScript</li>
						<li>React</li>
						<li>Angular</li>
						<li>Node/npm</li>
						<li>C#/.NET</li>
						<li>C++</li>
						<li>Java</li>
						<li>Testing Frameworks</li>
					</ul>
				</ResumeSection>

				<ResumeSection header={<ResumeMainHeader title='Projects' />}>

					<ResumeSection header='Web Apps'>
						<ResumeDetail>Currently developing a highly configurable and extensible music theory visualization app written in React and TypeScript</ResumeDetail>
						<ResumeDetail>Implemented this website</ResumeDetail>
						<ResumeDetail>Served as webmaster for Sailing Club and The Aquaponics Project in college</ResumeDetail>
					</ResumeSection>

					<ResumeSection header='Android Apps'>
						<ResumeDetail>Created an "augmented reality dashboard" app comissioned by Eaton to recognize electrical switchgear</ResumeDetail>
						<ResumeDetail>Created a boolean algebra calculator</ResumeDetail>
						<ResumeDetail>Created several other apps at college hackathons</ResumeDetail>
					</ResumeSection>

					<ResumeSection header='Controlled Environment Agriculture'>
						<ResumeDetail>Assisted in design and construction of several tech-driven hydroponic systems for low-income residents</ResumeDetail>
						<ResumeDetail>Investigated hydroponic produce facility for LEAN Launchpad college course</ResumeDetail>
					</ResumeSection>

					<ResumeSection header='Music'>
						<ResumeDetail>Completed dozens of recoreded music projects as a multiinstrumentalist, producer, and songwriter</ResumeDetail>
						<ResumeDetail>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</ResumeDetail>
					</ResumeSection>

				</ResumeSection>

				<ResumeSection header={<ResumeMainHeader title='Hobbies' />}>

					<ResumeSection header='Bicycling'>
						<ResumeDetail>Featured on BikePGH's blog to promote year-end campaign</ResumeDetail>
						<ResumeDetail>Completed 62-mile PedalPGH course</ResumeDetail>
					</ResumeSection>

				</ResumeSection>
			</div >
		);
	};
}