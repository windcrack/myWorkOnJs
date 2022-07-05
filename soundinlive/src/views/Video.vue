<template>
    <article class="player-block video">
        <div class="container">
            <div class="video-container">
                <video src="../video/rocket_launching.mp4" class="video-player" poster="../assets/play.svg"></video>
                <nav class="video-navigation">
                    <!-- <button class="video-button video-button__play fa fa-play"></button> -->
                    <button class="video-button video-button__play"><font-awesome-icon :icon="['fas', 'play']" /></button>
                    <button class="video-button video-button__stop fa fa-stop"></button>
                    <p class="video-time video-time__passed">00:00</p>
                    <input type="range" class="video-progress" min="0" max="100" step="0.1" value="0">
                    <p class="video-time video-time__total">00:00</p>
                    <span class="fa fa-volume-down volume-icon"></span>
                    <input type="range" class="video-volume" min="0" max="100" step="1" value="100">
                    <span class="fa fa-volume-up volume-icon"></span>
                </nav>
                
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'Video',
}
</script>

<style lang="scss">
    @import '../styles/scss/style.scss';
    .video{
        display: flex !important;
    }
</style>