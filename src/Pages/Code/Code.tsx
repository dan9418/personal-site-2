import * as React from "react";
import "./Code.css";
import { Gallery } from "../Art/Gallery/Gallery";
import { PlayWhatDemo } from "./PlayWhatDemo";

export function Code(props) {

	return (
		<div>
			<div>
				<h2>Web Apps</h2>

				<div>
					<h3>Play What</h3>

					<p>
						Play What is a React component library and framework I developed for visualizing music theory concepts.
						It provides a simple API for configuring viewer components and creating your own.
					</p>

					<p>
						Examples and interactive documentation can be found on the <a href='https://dan9418.github.io/play-what-sample/' target='_blank'>project site</a>.
					</p>

					<PlayWhatDemo />

				</div>

				<div>
					<h3>Portfolio Site</h3>
					<p>
						I have been maintaining a personal website since my freshman year of college.
						I use my site as a sandbox to learn new technologies and keep a portfolio of my projects.
						The current iteration is powered by React, TypeScript, and pure CSS.
					</p>
				</div>
			</div>

			<div>
				<h2>Mobile Apps</h2>
				<div>
					<h3>Augmented Reality Dashboard</h3>
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
								name: 'The App In Action',
								year: null,
								caption: '',
								path: './img/galleries/apps/ard.jpg'
							},
							{
								name: 'My Team & Sponsor',
								year: null,
								caption: '',
								path: './img/galleries/apps/eaton.jpg'
							}
						]}
					/>

				</div>

				<div>
					<h3>Boolean Algebra Calculator</h3>

					<p>
						My first mobile project was an Android application for solving boolean expressions.
						It is no longer on the app store, but I plan to modernize it and convert it to a web app someday.
					</p>

					<Gallery
						name='Bit Decryptor'
						description=''
						images={[
							{
								name: 'Screenshot',
								year: null,
								caption: '',
								path: './img/galleries/apps/bit_decryptor.jpg'
							},
							{
								name: 'Logo',
								year: null,
								caption: '',
								path: './img/galleries/apps/bit_decryptor_logo.png'
							}
						]}
					/>

				</div>

			</div>
		</div>
	);
}