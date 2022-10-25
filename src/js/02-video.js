import Player from '@vimeo/player';
import Throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const onPlay = function (data) {
    const currentTime = JSON.stringify(data.seconds)
    localStorage.setItem("videoplayer-current-time", currentTime)
};

player.on('timeupdate', Throttle(onPlay, 1000));


const resumePlayback = function () {
    const savedTime = localStorage.getItem("videoplayer-current-time");
        if (savedTime) {
            player.setCurrentTime(savedTime);
        }
    }

player.on("loaded", resumePlayback);

