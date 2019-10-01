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

function ResumeKeySkills(props) {
	return (
		<div className='resume-key-skills-container'>
			<div className='resume-key-skills-header'>Key Skills:</div>
			{props.skills.map(
				(skill, i) => {
					return <div key={i} className='resume-key-skill'>{skill}</div>
				}
			)}
		</div>
	);
}

export function Resume(props) {

	return (
		<div>
			<h2>Professional Summary</h2>
			<p>
				I'm a full-stack web developer recently relocated from Pittsburgh, PA to the west coast.
				I'm actively seeking a position where I can apply my diverse technical background to one of my many passions, which include agriculture, environmentalism, healthy food, music, fitness, and community development.
			</p>

			<h2>Work Experience</h2>
			<div>
				<ResumePositionHeader
					company='Bentley Systems'
					title='Associate Software Engineer'
					date='May 2016 - July 2019'
					location='Pittsburgh, PA + Vilnius, LT'
				/>
				<ul>
					<li>Implemented full-stack rewrite of computation engine for managing external CAD data, resulting in greater scalability, modularity, and schema consistency</li>
					<li>Executed proof-of-concept for creating and processing 35 GB CAD file into Azure blob storage via API</li>
					<li>Optimized statistics reporting queries, expanding data granularity by implementing cross-language subqueries</li>
					<li>Selected for inaugural international program in Vilnius, Lithuania</li>
					<li>Worked in highly cooperative agile environments using Scrum and Kanban, both on-site and remotely</li>
				</ul>
				<ResumeKeySkills skills={['Web Dev', 'Feature Ownership', 'Microsoft Tech Stack']} />

				<ResumePositionHeader
					company='The Bank of New York Mellon'
					title='Software Engineer Intern'
					date='May 2015 – August 2015'
					location='Pittsburgh, PA'
				/>
				<ul>
					<li>Syncronized data across databases to form single, consistent schema</li>
					<li>Automated daily data comparisons to maintain a central Reference Data Hub</li>
					<li>Worked with partitioned MVS/Linux mainframe to integrate disparate datasources</li>
				</ul>
				<ResumeKeySkills skills={['Java', 'Database Management', 'IBM Tech Stack']} />

				<ResumePositionHeader
					company='University of Pittsburgh, Residence Life'
					title='Resident Assistant'
					date='August 2014 - December 2015'
					location='Pittsburgh, PA'
				/>
				<ul>
					<li>Managed 57 freshmen engineering residents</li>
					<li>Enforced community standards for diverse pool of students</li>
					<li>Organized large-scale social, educational, and experiential programs</li>
				</ul>
				<ResumeKeySkills skills={['Leadership', 'Communication', 'Event Planning']} />

				<h2>Education</h2>
				<ResumePositionHeader
					company='University of Pittsburgh, Swanson School of Engineering'
					title='BS, Computer Engineering'
					date='April 2017'
					location='Pittsburgh, PA'
				/>
				<ul>
					<li>3.71 GPA</li>
					<li>Served as Freshmen Engineering-Week Chairman</li>
					<li>Served as webmaster for Hydroponics Team and The Aquaponics Project</li>
				</ul>


				<h2>Technical Skills</h2>
				<div className='technical-skills-container'>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Web</div>
						<ul className='resume-skills'>
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>React</li>
							<li>Angular 5 / AngularJS</li>
							<li>C# / .NET</li>
							<li>REST / HTTP</li>
							<li>Jasmine/Karma/Mocha Testing</li>
							<li>HTML5</li>
							<li>CSS</li>
							<li>PHP</li>
						</ul>
					</div>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Other Languages, etc...</div>
						<ul className='resume-skills'>
							<li>SQL</li>
							<li>Node</li>
							<li>C++</li>
							<li>Java</li>
							<li>Android SDK</li>
						</ul>
					</div>
					<div className='resume-skills-container'>
						<div className='resume-skills-container-header'>Tools / Software</div>
						<ul className='resume-skills'>
							<li>Git</li>
							<li>VSTS</li>
							<li>npm</li>
							<li>Visual Studio</li>
							<li>Azure (Various)</li>
							<li>MongoDB</li>
							<li>SQL Server</li>
							<li>Oracle</li>
						</ul>
					</div>
				</div>

				<h2>Awards</h2>
				<ul>
					<li>Graduated with special distinction as the Outstanding Senior in departmental class</li>
					<li>Won 2nd place at departmental senior design expo for augmented reality project</li>
					<li>Won 1st place for freshmen computer engineering conference paper on hybrid drives</li>
					<li>Eagle Scout</li>
				</ul>

				<h2>Projects</h2>

				<h3>Web Apps</h3>

				<ul>
					<li>Developed <a href='https://dan9418.github.io/play-what-sample/' target='_blank'>Play What</a>, a React library and API for visualing music theory concepts</li>
					<li>Developed this portfolio site</li>
				</ul>

				<h3>Mobile Apps</h3>

				<ul>
					<li>Developed an "augmented reality dashboard" app to recognize and communicate with electrical switchgear (senior design project)</li>
					<li>Developed a boolean algebra calculator</li>
					<li>Developed several smaller apps at college hackathons</li>
				</ul>

				<h3>Controlled-Environment Agriculture</h3>

				<ul>
					<li>Assisted in design and construction of several tech-supplemented hydroponic gardening systems</li>
					<li>Investigated business potential of hydroponic produce-farming facility for Lean LaunchPad course</li>
				</ul>

				<h3>Music</h3>

				<ul>
					<li>Completed dozens of musical projects as a multiinstrumentalist, producer, and songwriter</li>
					<li>Studied audio engineering in the University of Pittsburgh Music Engineering Laboratory</li>
				</ul>

			</div>
		</div>
	);
}