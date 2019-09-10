import * as React from "react";
import "./Resume.css";
import { ICONS } from "../../Common/Icon";

function ResumePositionHeader(props) {
	return (
		<div className='resume-position-header'>
			<div className='resume-position-header-top'>
				<div className='resume-position-header-company'>{props.company}</div>
				<div className='resume-position-header-date'>{ICONS.calendar}{props.date}</div>
			</div>
			<div className='resume-position-header-bottom'>
				<div className='resume-position-header-title'>{props.title}</div>
				<div className='resume-position-header-location'>{ICONS.location}{props.location}</div>
			</div>
		</div>
	);
}

function ResumeDetail(props) {
	return (
		<div className='resume-detail'>
			<div className='resume-detail-content'>
				<div className='resume-detail-bullet'>•</div>
				{props.children}
			</div>
			<div className='resume-detail-date'>
				{props.date}
			</div>
		</div>
	);
}

function ResumeKeySkills(props) {

	let getSkills = () => {
		let skills = [];
		for (let i = 0; i < props.skills.length; i++) {
			let skill = props.skills[i];
			skills.push(<div key={i} className='resume-key-skill'>{skill}</div>)
		}
		return skills;
	}

	return (
		<div className='resume-key-skills-container'>
			<div className='resume-key-skills-header'>Key Skills:</div>
			{getSkills()}
		</div>
	);
}

export function Resume(props) {

	return (
		<>
			<div>
				<h2>Professional Summary</h2>
				<p>
					I'm a full-stack web developer relocating from Pittsburgh, PA to the west coast.
					I am seeking a position where I can apply my diverse technical background to one of my many passions, which include agriculture, environmentalism, music, fitness, and community development.
					</p>
			</div>

			<div>
				<h2>Work Experience</h2>
				<div>
					<ResumePositionHeader
						company='Bentley Systems'
						title='Associate Software Engineer'
						date='May 2016 - July 2019'
						location='Pittsburgh, PA + Vilnius, LT'
					/>
					<ResumeDetail>Completed rotational program spanning 5 teams over 3 years</ResumeDetail>
					<ResumeDetail>Selected for inaugural international program in Vilnius, Lithuania</ResumeDetail>
					<ResumeDetail>Served many roles as a full-stack developer on various web APIs and applications</ResumeDetail>
					<ResumeDetail>Lead major feature development from design through deployment</ResumeDetail>
					<ResumeDetail>Employed best practices regarding testing, bug-tracking, and technology research</ResumeDetail>
					<ResumeDetail>Worked in highly cooperative agile environments using Scrum and Kanban, both on-site and remotely</ResumeDetail>

					<ResumeKeySkills skills={['Web Dev', 'Feature Ownership', 'Microsoft Tech Stack']} />
				</div>

				<div>
					<ResumePositionHeader
						company='The Bank of New York Mellon'
						title='Software Engineer Intern'
						date='May 2015 – August 2015'
						location='Pittsburgh, PA'
					/>
					<ResumeDetail>Syncronized data across databases to form single, consistent schema</ResumeDetail>
					<ResumeDetail>Automated daily data comparisons to maintain a central Reference Data Hub</ResumeDetail>
					<ResumeDetail>Worked with partitioned MVS/Linux mainframe to integrate disparate datasources</ResumeDetail>

					<ResumeKeySkills skills={['Java', 'Database Management', 'IBM Tech Stack']} />
				</div>

				<div>
					<ResumePositionHeader
						company='University of Pittsburgh, Residence Life'
						title='Resident Assistant'
						date='August 2014 - December 2015'
						location='Pittsburgh, PA'
					/>
					<ResumeDetail>Managed 57 freshmen engineering residents</ResumeDetail>
					<ResumeDetail>Enforced community standards for diverse pool of students</ResumeDetail>
					<ResumeDetail>Organized large-scale social, educational, and experiential programs</ResumeDetail>

					<ResumeKeySkills skills={['Leadership', 'Communication', 'Event Planning']} />
				</div>

			</div>

			<div>
				<h2>Education</h2>
				<div>
					<ResumePositionHeader
						company='University of Pittsburgh, Swanson School of Engineering'
						title='BS, Computer Engineering'
						date='April 2017'
						location='Pittsburgh, PA'
					/>
					<ResumeDetail>Graduated with 3.71 GPA and special distinction as the Outstanding Senior in departmental class</ResumeDetail>
					<ResumeDetail>Won 2nd place at departmental senior design expo for augmented reality project</ResumeDetail>
					<ResumeDetail>Won 1st place for freshmen computer engineering conference paper on hybrid drives</ResumeDetail>
					<ResumeDetail>Served as Engineering Week Chairman for Engineering Student Council</ResumeDetail>
				</div>

			</div>

			<div>
				<h2>Technical Skills</h2>
				<div className='resume-skills-container'>
					<div className='resume-skills-container-header'>Web</div>
					<div className='resume-skill'>JavaScript</div>
					<div className='resume-skill'>TypeScript</div>
					<div className='resume-skill'>React</div>
					<div className='resume-skill'>Angular 5 / AngularJS</div>
					<div className='resume-skill'>C# / .NET</div>
					<div className='resume-skill'>REST / HTTP</div>
					<div className='resume-skill'>Jasmine/Karma/Mocha Testing</div>
					<div className='resume-skill'>HTML5</div>
					<div className='resume-skill'>CSS</div>
					<div className='resume-skill'>PHP</div>
				</div>
				<div className='resume-skills-container'>
					<div className='resume-skills-container-header'>Other Languages, etc...</div>
					<div className='resume-skill'>SQL</div>
					<div className='resume-skill'>Node</div>
					<div className='resume-skill'>C++</div>
					<div className='resume-skill'>Java</div>
					<div className='resume-skill'>Android SDK</div>
				</div>
				<div className='resume-skills-container'>
					<div className='resume-skills-container-header'>Tools / Software</div>
					<div className='resume-skill'>Git</div>
					<div className='resume-skill'>VSTS</div>
					<div className='resume-skill'>npm</div>
					<div className='resume-skill'>Visual Studio</div>
					<div className='resume-skill'>Azure (Various)</div>
					<div className='resume-skill'>MongoDB</div>
					<div className='resume-skill'>SQL Server</div>
					<div className='resume-skill'>Oracle</div>
				</div>
			</div>

			<div>
				<h2>Projects</h2>
				<div>
					<h3>Web Apps</h3>
					<ResumeDetail>Developed <a href='https://dan9418.github.io/play-what-sample/' target='_blank'>Play What</a>, a React library and framework for visualing music theory concepts</ResumeDetail>
					<ResumeDetail>Developed this portfolio site from scratch</ResumeDetail>
					<ResumeDetail>Served as college webmaster for The Aquaponics Project and Sailing Club</ResumeDetail>
				</div>

				<div>
					<h3>Android Apps</h3>
					<ResumeDetail>Developed an "augmented reality dashboard" app to recognize and communicate with electrical switchgear (senior design project)</ResumeDetail>
					<ResumeDetail>Developed a boolean algebra calculator</ResumeDetail>
					<ResumeDetail>Developed several smaller apps at college hackathons</ResumeDetail>
				</div>

				<div>
					<h3>Controlled Environment Agriculture</h3>
					<ResumeDetail>Assisted in design and construction of several tech-supplemented hydroponic gardening systems</ResumeDetail>
					<ResumeDetail>Investigated hydroponic produce facility business potential for Lean LaunchPad college course</ResumeDetail>
				</div>

				<div>
					<h3>Music</h3>
					<ResumeDetail>Completed dozens of musical projects as a multiinstrumentalist, producer, and songwriter</ResumeDetail>
					<ResumeDetail>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</ResumeDetail>
				</div>

			</div>
		</>
	);
}