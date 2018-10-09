import React, { Fragment, Component } from "react";
import { VideoThumb, FullScreenVideo } from "./videoThumb";
import ImageThumb from "./imageThumb";
import "./_index.scss";

export default class MediaThumb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openVideoModal: false
    };
  }

  toggleVideo = e => {
    e.preventDefault();
    this.setState({
      openVideoModal: !this.state.openVideoModal
    });
  };

  render() {
    const videoModal = this.state.openVideoModal ? (
      <FullScreenVideo {...this.props} closeVideo={this.toggleVideo} />
    ) : null;

    return this.props.item.media === "video" ? (
      <Fragment>
        {videoModal}
        <VideoThumb {...this.props} toggleVideo={this.toggleVideo} />
      </Fragment>
    ) : (
      <ImageThumb {...this.props} />
    );
  }
}
