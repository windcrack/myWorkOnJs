<template>
    <article class="player-block audio">
        <div class="container">
            <div class="audio-container">
                <div class="audio-cover">
                    <img class="audio-img" src="../assets/hello.jpg" alt="обложка">
                </div>
                <h3 class="audio-header">Крути пластинку</h3>
                <audio class="audio-player" src="audio/hello.mp3"></audio>
            </div>
        </div>
        <footer class="footer-fix audio-footer">
            <nav class="audio-navigation">
                <div class="audio-btns">
                    <button class="audio-button audio-button__prev fa fa-step-backward"></button>
                    <button class="audio-button audio-button__play fa fa-play"></button>
                    <button class="audio-button audio-button__next fa fa-step-forward"></button>
                </div>
                <span class="audio-time audio-time__passed">00:00</span>
                <div class="audio-progress">
                    <div class="audio-progress__timing"></div>
                </div>
                <span class="audio-time audio-time__total">00:00</span>
            </nav>
        </footer>
    </article>
</template>

<script>
    export default {
        name: 'Music',
    }
</script>

<style lang="scss">
    @import '../styles/scss/style.scss';
    .audio{
        display: flex !important;
    }
</style>