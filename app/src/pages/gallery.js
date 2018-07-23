import React, { Component } from 'react'
import {config, animated } from 'react-spring'
import Gallery from '../components/gallery'

export default class GalleryPage extends Component {
  render() {
    // const galleryItems = this.props.data.allContentfulAsset.edges.map(item => {
    //   return { ...item.node }
    // })
    const galleryItems = []
    return (
      <animated.div  style={{ ...this.props.style }} className="GalleryPage">
      <Gallery galleryItems={galleryItems} />
      </animated.div>
    )
  }
}
