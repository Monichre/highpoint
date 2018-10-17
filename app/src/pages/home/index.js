import React, { Component } from "react";
import ReactPlayer from "react-player";
import { VideoLogo } from "../../components/videoLogo";
import Footer from "../../components/footer";
import { homePageLines } from "../../components/lines";
import ProgressBar from "../../components/progressBar";
import anime from "animejs";
import { BROWSER } from "../../utils/browser";
import "./_home.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      muted: true,
      isPlaying: true,
      url:
        "https://player.vimeo.com/external/286249741.sd.mp4?s=0ba1a7ff1be8fe5f7c0bf90006d04f53041c1310&profile_id=165"
    };
  }
  componentDidMount() {
    const { isPlaying } = this.state;
    const internalPlayer = this.player.getInternalPlayer();
    homePageLines();
    if (BROWSER.isSafari) {
      if (internalPlayer) {
        internalPlayer.setAttribute("controls", false);
      }
    }

    const logo_rects = Array.from(
      document.querySelectorAll(".clip__path__line")
    );
    const inner_logo_rects = Array.from(
      document.querySelectorAll(".inner_logo_line")
    );
    const lines = document.querySelector(".lines");
    const backgroundVideo = document.querySelector(".backgroundVideo");
    const border = document.querySelector(".border");
    const inner_svg = document.querySelector(".border .inner svg");

    const mainLineDrawing = anime({
      targets: ".inner .lines .main_path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 200,
      delay: (el, i) => {
        return i * 250;
      },
      loop: 1
    });

    const subDrawing = anime({
      targets: ".inner .lines .sub_path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      duration: 200,
      delay: (el, i) => {
        return i * 250;
      },
      loop: 1
    });

    mainLineDrawing.begin = () => {
      inner_logo_rects.forEach(rect => rect.classList.add("active"));
    };

    mainLineDrawing.complete = () => {
      border.classList.add("active");
      lines.classList.add("active");

      setTimeout(() => {
        inner_svg.classList.add("fadeOut");
        backgroundVideo.classList.add("fadeIn");
        logo_rects.forEach(rect => rect.classList.add("active"));
      }, 1500);
    };
  }

  progressIndicator = () => {
    const internalPlayer = this.player.getInternalPlayer();
    const progressBar = document.querySelector(".progress_bar");
    const progressBarWidth = progressBar.offsetWidth;
    const progress = document.querySelector(".progress");
    const progressBarPin = document.querySelector(".pin");
    const total = this.player.getDuration();
    let currentTime = 0;

    if (total) {
      this.playInterval = setInterval(() => {
        currentTime = this.player.getCurrentTime();
        const percentagePlayed = Math.floor((currentTime / total) * 100);
        const pinLeftValue = parseInt(
          progressBarPin.style.left.replace("%", "")
        );
        const progressWidthValue = parseInt(
          progress.style.width.replace("%", "")
        );
        let newLeftValue = pinLeftValue ? pinLeftValue : 0;
        let newWidthValue = progressWidthValue ? progressWidthValue : 0;

        newLeftValue += percentagePlayed - newLeftValue;

        newWidthValue += percentagePlayed - newWidthValue;

        progress.style.width = `${newWidthValue}%`;
        progressBarPin.style.left = `${newLeftValue}%`;
      }, 10);
    }
  };

  progressFadeInterval = () => {
    const progressBar = document.querySelector(".progress_bar");
    progressBar.classList.add("show_progress");
    setTimeout(() => {
      progressBar.classList.remove("show_progress");
    }, 5000);
  };

  playOrPause = e => {
    const { isPlaying } = this.state;
    const internalPlayer = this.player.getInternalPlayer();
    this.progressFadeInterval();

    this.setState(
      {
        isPlaying: !this.state.isPlaying
      },
      () => {
        isPlaying ? internalPlayer.pause() : internalPlayer.play();
      }
    );
  };

  componentWillUnmount() {
    clearInterval(this.playInterval);
  }

  rewind = () => {
    const current = this.player.getCurrentTime();
    const total = this.player.getDuration();
    this.player.seekTo(total - current);
    clearInterval(this.playInterval);
    this.progressIndicator();
    this.progressFadeInterval();
  };

  fastForward = () => {
    const current = this.player.getCurrentTime();
    this.player.seekTo(current + 30);
    clearInterval(this.playInterval);
    this.progressIndicator();
    this.progressFadeInterval();
  };

  render() {
    const { isPlaying, muted, url } = this.state;
    return (
      <div className="home component">
        <VideoLogo>
          <div className="backgroundVideo">
            <ReactPlayer
              playing={isPlaying}
              playsinline
              onPlay={this.progressIndicator}
              loop={true}
              volume={this.state.muted ? 0 : 1}
              height="100%"
              width="100%"
              muted={muted}
              url={url}
              ref={player => (this.player = player)}
            />{" "}
            <ProgressBar />
          </div>{" "}
        </VideoLogo>{" "}
        <Footer
          isPlaying={isPlaying}
          rewind={this.rewind}
          pause={this.playOrPause}
          fastForward={this.fastForward}
        />{" "}
      </div>
    );
  }
}
