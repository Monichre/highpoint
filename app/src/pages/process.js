import React, { Component } from 'react'
import { QuiltedGrid } from '../components/grid/quilted'
import AppStore from '../flux/stores'
import { cornerLines, processPortfolioLines } from '../components/lines'
import { animated } from 'react-spring'
import {Link} from 'react-router-dom'

class ProcessPage extends Component {
  componentDidMount() {
    processPortfolioLines()
    cornerLines()
  }
  render() {
    const { processes } = AppStore.data
    return (
      <animated.div style={{ ...this.props.style }} className="process_page component">
      <h1 style={{textAlign: 'center', textTransform: 'uppercase', fontSize: '45px', letterSpacing: '4px'}}>Process</h1>
        <QuiltedGrid>
          {processes.map(process => (
            <Link  to={`/process/${process.title}`} className="item">
              <div className="content" style={{backgroundImage: `url(${process.afterImages[0].fields.file.url})`}}>
                <h2>{process.address}</h2>
              </div>
              <div className="previews">
                {process.blueprints.map(blueprint => (
                  <div className="preview-image">
                    <img src={blueprint.fields.file.url} />
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </QuiltedGrid>
      </animated.div>
    )
  }
}

export default ProcessPage
