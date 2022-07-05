<template>
	<article class="player-block radio">
			<div class="container">
				<div class="radio-container">
					<div class="radio-player">
						<div class="radio-cover">
							<img class="radio-cover__img" src="../assets/radio/start.jpg" alt="обложка">
						</div>
						<h3 class="radio-header__big">Выбери радиостанцию</h3>
					</div>
					<form class="radio-navigation">
						<h2 class="radio-header">Другие радиостанции</h2>
							
							<ul class="radio-list" v-for="(radio, id) in dataStation" :key="id">
								<radio-items :radio="radio" />
							<!-- <li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/Energy.png" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="energy" name="radioStantion"
											data-radio-stantion="http://ic4.101.ru:8000/region_energy_161">
									<span class="radio-name">Energy</span>
								</label>
							</li>

							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/Record.jpg" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="recordRus" name="radioStantion"
											data-radio-stantion="http://air.radiorecord.ru:8102/rus_320">
									<span class="radio-name">Record Rus</span>
								</label>
							</li>

							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/slowRadio.jpg" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="slowRadio" name="radioStantion"
											data-radio-stantion="http://air.radiorecord.ru:8102/mdl_320">
									<span class="radio-name">Медляк FM</span>
								</label>
							</li>

							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="r../assets/adio/dorojnoe.png" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="roadRadio" name="radioStantion"
											data-radio-stantion="http://dorognoe.hostingradio.ru:8000/dorognoe">
									<span class="radio-name">Дорожное Радио</span>
								</label>
							</li>

							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/90.jpg" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="90years" name="radioStantion"
											data-radio-stantion="http://online.radiorecord.ru:8102/sd90_320">
									<span class="radio-name">90-e</span>
								</label>
							</li>
							
							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/piretStation.jpg" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="piretStation" name="radioStantion"
											data-radio-stantion="http://air.radiorecord.ru:8102/ps_320">
									<span class="radio-name">Пиратская станция</span>
								</label>
							</li>

							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/vip.png" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="piretStation" name="radioStantion"
											data-radio-stantion="http://air.radiorecord.ru:8102/vip_320">
									<span class="radio-name">Vip Mix</span>
								</label>
							</li>

							<li class="radio-item">
								<label>
									<div class="radio-check">
										<img class="radio-img" src="../assets/radio/dr.jpg" alt="обложка">
									</div>
									<input class="radio-btn" type="radio" id="piretStation" name="radioStantion"
											data-radio-stantion="http://online.radiorecord.ru:8102/dub_128">
									<span class="radio-name">DubStep</span>
								</label>
							</li> -->
							</ul>
					</form>
				</div>
			</div>
			
			<footer class="footer-fix radio-footer">
				<button class="radio-stop fa fa-play"></button>
				<span class="fa fa-volume-down volume-icon"></span>
				<input type="range" class="radio-volume" min="0" max="100" step="1" value="100">
				<span class="fa fa-volume-up volume-icon"></span>
			</footer>
		</article>
</template>

<script>
import RadioItems from '../components/RadioItems'
export default {
	data(){
		return {
			dataStation:[
				{id: 1, img: 'RTLGroove.png', station: 'shoutcast.rtl.it:3040/', nameStation: 'RTL Groove'},
				{id: 2, img: 'Energy.png', station: 'ic4.101.ru:8000/region_energy_161', nameStation: 'Energy'},
				{id: 3, img: 'Record.jpg', station: 'air.radiorecord.ru:8102/rus_320', nameStation: 'Record Rus'},
				{id: 4, img: 'slowRadio.jpg', station: 'air.radiorecord.ru:8102/mdl_320', nameStation: 'Медляк FM'},
				{id: 5, img: 'dorojnoe.png', station: 'dorognoe.hostingradio.ru:8000/dorognoe', nameStation: 'Дорожное Радио'},
				{id: 6, img: '90.jpg', station: 'online.radiorecord.ru:8102/sd90_320', nameStation: '90-e'},
				{id: 7, img: 'piretStation.jpg', station: 'air.radiorecord.ru:8102/ps_320', nameStation: 'Пиратская станция'},
				{id: 8, img: 'vip.png', station: 'air.radiorecord.ru:8102/vip_320', nameStation: 'Vip Mix'},
				{id: 9, img: 'dr.jpg', station: 'online.radiorecord.ru:8102/dub_128', nameStation: 'DubStep'},
			]
		}
	},
	components:{
		RadioItems
	}
}
</script>

<style lang="scss">
	@import '../styles/scss/style.scss';

	.radio {
		display: flex !important;
	}
</sc>