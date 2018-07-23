import React, { Component } from 'react'
import { ProcessPieceDefault } from '../processPiece'
import './_panel.scss'

export default class Panel extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { type, item } = this.props
    console.log(this.props)
    return type === 'process' ? (
      <ProcessPanel {...this.props.item} />
    ) : (
      <aside className={`panel ${this.props.className}`}>
        <h2 className="panel-header">{this.props.item.title}</h2>
        <p className="panel-info">{this.props.item.description.description}</p>
        <button className="panel-button">
          <a href="process">View Process</a>
        </button>
      </aside>
    )
  }
}

const ProcessPanel = props => (
  <aside className={`panel process`}>
    <h2 className="panel-header">{props.title}</h2>
		<TabMenu process={props} />
		<p className="panel-info">{props.description.description}</p>
  </aside>
)

const TabMenu = (props) => (
  <section className="font-sans process_timeline_menu">
    <div className="container m-auto max-w-xl flex item-baseline justify-center border-b-2 border-grey-light mb-10">
      <h2 className="text-base text-grey-dark font-bold tracking-wide uppercase py-4 px-6 border-b-2 border-black -mb-4">
        Before
      </h2>
      <h2 className="text-grey-dark text-base font-bold tracking-wide uppercase py-4 px-6">After</h2>
    </div>
  </section>
)
