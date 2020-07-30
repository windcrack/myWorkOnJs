import { addZero } from './suppScript.js'

export const musicPlayerInit = () =>{
   const audio = document.querySelector('.audio'); 
   const audioImg = document.querySelector('.audio-img'); 
   const audioHeader = document.querySelector('.audio-header'); 
   const audioPlyaer = document.querySelector('.audio-player'); 
   const audioNavigation = document.querySelector('.audio-navigation'); 
   const audioButtonPlay = document.querySelector('.audio-button__play'); 
   const audioProgress = document.querySelector('.audio-progress'); 
   const audioProgressTiming = document.querySelector('.audio-progress__timing'); 
   const audioTimePassed = document.querySelector('.audio-time__passed'); 
   const audioTimeTotal = document.querySelector('.audio-time__total');

   const playList = ['hello', 'flow', 'speed'];

   let trackIndex = 0;

   const loadTrack = () => {
       const isPlayed = audioPlyaer.paused;
       const track = playList[trackIndex];
       audioImg.src = `./audio/${track}.jpg`;
       audioHeader.textContent = track.toLocaleUpperCase();
       audioPlyaer.src = `./audio/${track}.mp3`;
       if(isPlayed){
          audioPlyaer.pause();
       }else{
          audioPlyaer.play();
       }
   }

   const prevTrack = () =>{
        if(trackIndex !== 0){
            trackIndex--;
        } else{
            trackIndex = playList.length -1;
        }
        loadTrack();
   }

   const nextTrack = () =>{
        if(trackIndex === playList.length -1){
            trackIndex = 0
        }else{
            trackIndex++;
        }
        loadTrack();
   }

    audioNavigation.addEventListener('click', (event)=>{
        const target = event.target;
        
        if(target.classList.contains('audio-button__play')){
            audio.classList.toggle('play');
            audioButtonPlay.classList.toggle('fa-play');
            audioButtonPlay.classList.toggle('fa-pause');

            if(audioPlyaer.paused){
                audioPlyaer.play();
            }else{
                audioPlyaer.pause();
            }
            const track = playList[trackIndex];
            audioHeader.textContent = track.toLocaleUpperCase();
        }
        if(target.classList.contains('audio-button__prev')){
            prevTrack();
        }

        if(target.classList.contains('audio-button__next')){
            nextTrack();
        }

   });

   audioPlyaer.addEventListener('ended', ()=>{
        nextTrack();
        audioPlyaer.play();
   });

   audioPlyaer.addEventListener('timeupdate', () =>{
       const duration = audioPlyaer.duration;
       const currentTime = audioPlyaer.currentTime;
       const progress = (currentTime / duration) * 100;

       audioProgressTiming.style.width = progress + '%';

       const minutesPassed = Math.floor(currentTime / 60) || '0';
       const secondPassed = Math.floor(currentTime % 60) || '0';

       const minutesTotal = Math.floor(duration / 60) || '0';
       const secondTotal = Math.floor(duration % 60) || '0';

       audioTimePassed.textContent = `${addZero(minutesPassed)}:${addZero(secondPassed)}`;
       audioTimeTotal.textContent = `${addZero(minutesTotal)}:${addZero(secondTotal)}`;
   });

   audioProgress.addEventListener('click', e => {
       const x = e.offsetX;
       const allWidth = audioProgress.clientWidth;
       const progress = (x / allWidth) * audioPlyaer.duration;

       audioPlyaer.currentTime = progress;
   });

   musicPlayerInit.stop = () =>{
        audioPlyaer.pause();
        audioButtonPlay.classList.add('fa-play');
        audio.classList.remove('play');
   }
}