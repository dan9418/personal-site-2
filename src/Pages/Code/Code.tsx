import * as React from "react";
import "./Code.css";
import { PageSection, PrimaryHeader, SecondaryHeader } from "../../Common/Headers";
import { Gallery } from "../Art/Gallery/Gallery";

export class Code extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<PageSection>
					<PageSection header={<PrimaryHeader title={'Web Apps'} />}>
						<PageSection header={<SecondaryHeader title={'Play What'} />}>
							<p>
								Play What is a React component library and framework I developed for visualizing music theory concepts.
								It provides a simple API for configuring viewer components and creating your own.
							</p>

							<p>
								Examples and interactive documentation can be found on the <a href='https://dan9418.github.io/play-what-sample/' target='_blank'>project site</a>.
							</p>
						</PageSection>

						<PageSection header={<SecondaryHeader title={'Portfolio Site'} />}>
							<p>
								I have been maintaining a personal website since my freshman year of college.
								I use my site as a sandbox to learn new technologies and keep a portfolio of my projects.
								The current iteration is powered by React, TypeScript, and pure CSS.
							</p>
						</PageSection>
					</PageSection>

					<PageSection header={<PrimaryHeader title={'Mobile Apps'} />}>

						<PageSection header={<SecondaryHeader title={'Augmented Reality Dashboard'} />}>
							<p>
								My most recent mobile app was an
								<span className='italic'> augmented reality dashboard</span>,
								developed for my senior design project at Pitt.
								It was sponsored by
								<a className='code-link' href='https://www.eaton.com' target='_blank'>Eaton</a>
								and won 2nd place at my department's design expo.
							</p>

							<p>
								The app used an AR library to recognize mock electrical switchgear and retrieve its status over a wifi network.
							</p>

							<Gallery
								name='Augmented Reality Dashboard'
								description='Senior design project'
								images={[
									{
										name: '',
										year: null,
										caption: 'The App In Action',
										path: './img/galleries/apps/ard.jpg'
									},
									{
										name: '',
										year: null,
										caption: 'My Team & Sponsor',
										path: './img/galleries/apps/eaton.jpg'
									}
								]}
							/>

						</PageSection>

						<PageSection header={<SecondaryHeader title={'Boolean Algebra Calculator'} />}>
							<p>
								My first mobile project was an Android application for solving boolean expressions.
								It is no longer on the app store, but I plan to modernize it and convert it to a web app someday.
							</p>

							<Gallery
								name='Bit Decryptor'
								description=''
								images={[
									{
										name: '',
										year: null,
										caption: 'Screenshot',
										path: './img/galleries/apps/bit_decryptor.jpg'
									},
									{
										name: '',
										year: null,
										caption: 'Logo',
										path: './img/galleries/apps/bit_decryptor_logo.png'
									}
								]}
							/>

						</PageSection>

					</PageSection>
				</PageSection>
			</>
		);
	};
}