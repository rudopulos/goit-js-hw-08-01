import { Player } from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Vimeo('vimeo-player');


function updatePlaybackTime() {
  const currentTime = vimeoPlayer.getCurrentTime();
  localStorage.setItem('videoplayer-current-time', currentTime);
}


vimeoPlayer.on('timeupdate', throttle(updatePlaybackTime, 1000)); 

const storedTime = localStorage.getItem('videoplayer-current-time');
if (storedTime) {
  vimeoPlayer.setCurrentTime(parseFloat(storedTime));
}


vimeoPlayer.on('error', () => {
  const videoError = document.getElementById('video-error');
  videoError.style.display = 'block';
});

