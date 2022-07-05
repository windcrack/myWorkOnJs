<template>
  <div id="app">
  <router-link to="/">
		<h1 class="header"><span class="red-text">Sound</span>inlive</h1>
	</router-link>
    <div class="player">
      <router-link class="player-btn player-video" to="/video">Видео <br /> ( в разработке )</router-link>
      <router-link class="player-btn player-audio" to="/music">Музыка <br /> ( в разработке )</router-link>
      <router-link class="player-btn player-radio" to="/radio">Радио</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import 'styles/scss/style.scss';
  @import 'styles/normalize.css';
</style>
