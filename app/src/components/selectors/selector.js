import React, {Component} from 'react' 

export default class Selector extends Component {
  constructor(props) {
    super(props)
  }
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
			<a href="#" className={`${componentClass} w-1/4 flex flex-col items-center text-center text-xs text-black no-underline`} onClick={this.props._handleClick.bind(this, this.props.id)}>
				<div className="bg-black text-white rounded-full h-4 w-4 flex items-center justify-center mb-2 z-10" />
				<label className="font-bold uppercase tracking-wide">{this.props.index + 1}</label>
			</a>
		);
	}
}
