const rootSelector = '[data-js-video-player]';

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    playButton: '[data-js-video-player-play-button]',
  };

  stateClasses = {
    isActive: 'is-active',
  }

  rootElement: HTMLElement;
  videoElement: HTMLVideoElement;
  playButtonElement: HTMLButtonElement;

  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.videoElement = this.rootElement.querySelector(this.selectors.video) as HTMLVideoElement;
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton) as HTMLButtonElement;

    this.bindEvents();
  }

  onPlayButtonClick = () => {
    this.videoElement.play();
    this.videoElement.requestFullscreen();
    this.videoElement.controls = true;

    this.playButtonElement.classList.remove(this.stateClasses.isActive);
  }

  onVideoPause = () => {
    this.videoElement.controls = false;
    this.playButtonElement.classList.add(this.stateClasses.isActive);
  }

  onVideoFullscreenChange = () => {
    const isFullscreenEnabled = document.fullscreenElement === this.videoElement;

    if (!isFullscreenEnabled) {
      this.videoElement.pause();
    }
  }

  bindEvents() {
    this.playButtonElement.addEventListener('click', this.onPlayButtonClick);
    this.videoElement.addEventListener('pause', this.onVideoPause);
    this.videoElement.addEventListener('fullscreenchange', this.onVideoFullscreenChange);
  }
}

class VideoPlayerCollection {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element: HTMLElement) => {
      new VideoPlayer(element);
    });
  }
}

export default VideoPlayerCollection;
