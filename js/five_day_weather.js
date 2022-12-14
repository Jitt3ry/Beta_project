// import { getHourlyWeather } from "./api";

const tabFiveday = document.querySelector('.header__tabs');
const currentBlock = document.querySelector('.current');
const cards = document.querySelector('.cards');

tabFiveday.addEventListener('click', e => {
    if(e.target.id === 'btn') {
        currentBlock.style.display = 'none';
        
            const cards = document.querySelector('div');
            cards.classList.add('cards')

            const cardMain = document.createElement('div');
            cardMain.classList.add('card__main');
            cardMain.append(cards)

            const cardHeadaer = document.createElement('div');
            cardHeadaer.classList.add('card__header');
            cardHeadaer.append(cardMain);

            const cardHeadaerText = document.createElement('h2');
            cardHeadaerText.classList.add('card__header-main');
            const cardes = document.querySelector('.card__header-main')
            cardHeadaerText.append(cardMain);
            cardes.innerHTML = 'gghhttt'
    }
})