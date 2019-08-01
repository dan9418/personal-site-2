import * as React from "react";
import "./Code.css";
import { PageSection, PrimaryHeader } from "../../Common/Headers";

export class Code extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<PageSection>
					<p>
						Over the years, I have developed several apps for web and mobile.
						Some notable examples include a boolean algebra calculator and an
						<span className='italic'> augmented reality dashboard</span>,
						which was sponsed by 
						<a className='code-link' href='https://www.eaton.com' target='_blank'>Eaton</a> 
						and won 2nd place at my senior design expo.
					</p>
					<p>
						I'm currently compiling my past projects and finishing some new ones for inclusion on this portfolio.
						I also developed this site itself using React, TypeScript, and pure CSS.
					</p>
					<PageSection header={<PrimaryHeader title={'What\'s Next?'} />}>
						<p>I am in the final stages of completing my most extensive personal project yet - an embeddable music theory visualization tool.</p>
						<p className='project-goals-header'>My primary goals are to...</p>
						<ul className='project-goals'>
							<li>Independently learn the ReactJS framework</li>
							<li>Complete a substantial project demonstrating good design and best practices</li>
							<li>Learn music theory concepts</li>
							<li>Create a useful, open-source tool that is highly configurable and extensible</li>
						</ul>
					</PageSection>
					<PageSection>
						<div className='comming-soon italic'>More Coming Soon!</div>
					</PageSection>
				</PageSection>
			</>
		);
	};
}