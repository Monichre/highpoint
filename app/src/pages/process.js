import React, { Component } from 'react'
import { QuiltedGrid } from '../components/grid/quilted'
import AppStore from '../flux/stores'
import { cornerLines } from '../components/lines'
import { animated } from 'react-spring'

class ProcessPage extends Component {
  componentDidMount() {
    cornerLines()
  }
  render() {
    const { processes } = AppStore.data
    return (
      <animated.div style={{ ...this.props.style }} className="process_page component">
        <QuiltedGrid>
          {processes.map(process => (
            <div className="item">
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
            </div>
          ))}
        </QuiltedGrid>
      </animated.div>
    )
  }
}

export default ProcessPage
