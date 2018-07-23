import React, {Component} from 'react' 
import Selector from './selector'
import './_selector.scss'

export default class Selectors extends Component {
  constructor(props) {
    super(props)
  }
	handleClick = (id, e) => {
		console.log(id, e)
    e.preventDefault()
    this.props._changeActive(id)
  }
  componentDidMount() {
    console.log(this.props)
  }
	render() {
		return (
			<div className="selectors font-sans flex justify-between portfolio_side_nav">
				{this.props.items.map((item, i) => 
					<Selector 
						key={item.title}
						id={i}
						index={i}
						_handleClick={this.handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</div>
		);
	}
}