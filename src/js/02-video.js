// import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
const savedTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(savedTime).then(function (seconds) {
  if (savedTime) {
    seconds = savedTime;
  }
});
