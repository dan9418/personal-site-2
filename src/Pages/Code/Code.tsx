import * as React from "react";
import "./Code.css";
import { PageSection } from "../../Common/Headers";

export class Code extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
				<PageSection>
					<p>Throughout college, I designed a few Android applications, including a boolean algebra calculator and an “augmented reality dashboard.” The latter was sponsored by Eaton for my senior design project and won 2nd place at the Spring 2017 Pitt Design Expo in my department.</p>
				</PageSection>
			</>
		);
	};
}