import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(e) {
  localStorage.setItem('videoplayer-current-time', e.seconds);
}
const savedTime = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(savedTime)
  .then(function () {})
  .catch(error => console.log(error));
