import * as React from "react";
import "./TextBlock.css";

export class TextBlock extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
				<div className='text-block'>
					{this.props.text}
				</div>
		);
	};
}