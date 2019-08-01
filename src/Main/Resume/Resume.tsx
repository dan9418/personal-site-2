import * as React from "react";
import "./Resume.css";
import { ICONS } from "../../Common/Icon";
import { PageSection, SecondaryHeader, PrimaryHeader, PageHeader } from "../../Common/Headers";
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

export class ResumeKeySkills extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	getSkills = () => {
		let skills = [];
		for (let i = 0; i < this.props.skills.length; i++) {
			let skill = this.props.skills[i];
			skills.push(<div key={i} className='resume-key-skill'>{skill}</div>)
		}
		return skills;
	}

	render = () => {
		return (
			<div className='resume-key-skills-container'>
				<div className='resume-key-skills-header'>Key Skills:</div>
				{this.getSkills()}
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
				<PageSection header={<PrimaryHeader title='Professional Summary' />}>
					<p>
						I am a highly motivated full-stack web developer recently relocated from Pittsburgh, PA to Northern California.
						I am seeking a position where I can apply my technical background to one of my passions - agriculture, environmentalism, music, fitness, or community development.
					</p>
				</PageSection>

				<PageSection header={<PrimaryHeader title='Work Experience' />}>

					<PageSection
						header={<ResumePositionHeader
							company='Bentley Systems'
							title='Associate Software Engineer'
							date='May 2016 - July 2019'
							location='Pittsburgh, PA + Vilnius, LT'
						/>}>
						<ResumeDetail>Completed rotational program spanning 5 teams over 3 years</ResumeDetail>
						<ResumeDetail>Selected for inaugural international program in Vilnius, Lithuania</ResumeDetail>
						<ResumeDetail>Served many roles as a full-stack developer on several web APIs, apps, and services</ResumeDetail>
						<ResumeDetail>Oversaw major feature development from design through deployment</ResumeDetail>
						<ResumeDetail>Employed best practices regarding testing, bug-tracking, and technology research.</ResumeDetail>
						<ResumeDetail>Worked in highly cooperative agile environments using Scrum and Kanban, both on-site and remotely</ResumeDetail>
					
						<ResumeKeySkills skills={['Web Dev','Databases','Microsoft Stack']}/>
					</PageSection>

					<PageSection
						header={<ResumePositionHeader
							company='The Bank of New York Mellon Corporation'
							title='Software Engineer Intern'
							date='May 2015 – August 2015'
							location='Pittsburgh, PA'
						/>}>
						<ResumeDetail>Syncronized data across DB2 databases to form single, consistent schema</ResumeDetail>
						<ResumeDetail>Automated daily data comparisons to maintain a central Reference Data Hub</ResumeDetail>
						<ResumeDetail>Worked with partitioned MVS/Linux mainframe to integrate disparate datasources</ResumeDetail>
					
						<ResumeKeySkills skills={['Java','SQL','IBM Stack']}/>
					</PageSection>

					<PageSection
						header={<ResumePositionHeader
							company='University of Pittsburgh, Residence Life'
							title='Resident Assistant'
							date='August 2014 - December 2015'
							location='Pittsburgh, PA'
						/>}>
						<ResumeDetail>Managed 57 freshmen engineering residents</ResumeDetail>
						<ResumeDetail>Enforced community standards for diverse student pool</ResumeDetail>
						<ResumeDetail>Organized large-scale social, educational, and experiential programs</ResumeDetail>

						<ResumeKeySkills skills={['Leadership','Communication','Mediation']}/>
					</PageSection>

				</PageSection>

				<PageSection header={<PrimaryHeader title='Education' />}>

					<PageSection
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
					</PageSection>

				</PageSection>

				<PageSection header={<PrimaryHeader title='Technical Skills' />}>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Languages/General</div>
						<div className='resume-skill'>JavaScript</div>
						<div className='resume-skill'>TypeScript</div>
						<div className='resume-skill'>C#/.NET</div>
						<div className='resume-skill'>SQL</div>
						<div className='resume-skill'>C++</div>
						<div className='resume-skill'>Java</div>
						<div className='resume-skill'>PHP</div>
						<div className='resume-skill'>HTML5</div>
						<div className='resume-skill'>CSS</div>
					</div>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Frameworks</div>
						<div className='resume-skill'>React</div>
						<div className='resume-skill'>Angular</div>
						<div className='resume-skill'>Jasmine/Karma Testing</div>
						<div className='resume-skill'>Mocha Testing</div>
						<div className='resume-skill'>Android SDK</div>
					</div>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Tools</div>
						<div className='resume-skill'>Git</div>
						<div className='resume-skill'>VSTS</div>
						<div className='resume-skill'>Node</div>
						<div className='resume-skill'>npm</div>
					</div>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Software</div>
						<div className='resume-skill'>Visual Studio</div>
						<div className='resume-skill'>Azure (Various)</div>
						<div className='resume-skill'>MongoDB</div>
						<div className='resume-skill'>SQL Server</div>
						<div className='resume-skill'>Oracle</div>
					</div>
				</PageSection>

				<PageSection header={<PrimaryHeader title='Projects' />}>

					<PageSection header={<SecondaryHeader title='Web Apps' />}>
						<ResumeDetail>Currently developing a highly configurable and extensible music theory visualization app written in React and TypeScript</ResumeDetail>
						<ResumeDetail>Implemented this website</ResumeDetail>
						<ResumeDetail>Served as webmaster for Sailing Club and The Aquaponics Project in college</ResumeDetail>
					</PageSection>

					<PageSection header={<SecondaryHeader title='Android Apps' />}>
						<ResumeDetail>Created an "augmented reality dashboard" app comissioned by Eaton to recognize electrical switchgear</ResumeDetail>
						<ResumeDetail>Created a boolean algebra calculator</ResumeDetail>
						<ResumeDetail>Created several other apps at college hackathons</ResumeDetail>
					</PageSection>

					<PageSection header={<SecondaryHeader title='Controlled Environment Agriculture' />}>
						<ResumeDetail>Assisted in design and construction of several tech-driven hydroponic systems for low-income residents</ResumeDetail>
						<ResumeDetail>Investigated hydroponic produce facility for LEAN Launchpad college course</ResumeDetail>
					</PageSection>

					<PageSection header={<SecondaryHeader title='Music' />}>
						<ResumeDetail>Completed dozens of recoreded music projects as a multiinstrumentalist, producer, and songwriter</ResumeDetail>
						<ResumeDetail>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</ResumeDetail>
					</PageSection>

				</PageSection>

				<PageSection header={<PrimaryHeader title='Hobbies' />}>

					<PageSection header={<SecondaryHeader title='Bicycling' />}>
						<ResumeDetail>Featured on BikePGH's blog to promote year-end campaign</ResumeDetail>
						<ResumeDetail>Completed 62-mile PedalPGH course</ResumeDetail>
					</PageSection>

				</PageSection>
			</div >
		);
	};
}