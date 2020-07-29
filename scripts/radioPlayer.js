export const radioPlayerInit = () =>{
    const radio = document.querySelector('.radio');
    const radioCoverImg = document.querySelector('.radio-cover__img');
    const radioHeader = document.querySelector('.radio-header__big');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioVolume = document.querySelector('.radio-volume');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const changeIconPlay = () =>{
        if(audio.paused){
            radio.classList.remove('play');
            radioStop.classList.remove('fa-stop');
            radioStop.classList.add('fa-play');
        }else{
            radio.classList.add('play');
            radioStop.classList.add('fa-stop');
            radioStop.classList.remove('fa-play');
        }
    }

    const selectItem = element => {
        radioItem.forEach(item => {
            item.classList.remove('select');
        })
        element.classList.add('select');
    }

    radioNavigation.addEventListener('change', (event) =>{
        const target = event.target;
        const parrent = target.closest('.radio-item');

        selectItem(parrent);

        const title = parrent.querySelector('.radio-name').textContent;
        const urlImg = parrent.querySelector('.radio-img').src;

        radioHeader.textContent = title;
        radioCoverImg.src = urlImg;
        audio.src = target.dataset.radioStantion;
        radioStop.disabled = false;
        audio.play();
        changeIconPlay();
    })

    radioStop.addEventListener('click', () =>{
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
        changeIconPlay();
    });
    
    radioVolume.addEventListener('input', ()=>{
        audio.volume = radioVolume.value / 100;
    });
}