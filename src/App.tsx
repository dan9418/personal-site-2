import * as React from "react";
import * as ReactDOM from "react-dom";
import "./App.css";

export class App extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
			<>
                <div id="top">
                    Menu
                </div>
				<div id='left'>
                    Contact
                </div>
                <div id='right'>
                    Main
                </div>
			</>
		);
	};
}

const domContainer = document.querySelector('#app');
ReactDOM.render(<App/>, domContainer);