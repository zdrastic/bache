'use strict';
const API_URL = 'https://api.coingecko.com/api/v3';

const getCoinInfo = async (id) => {
    const res = await fetch(API_URL + `/coins/${id}`);
    let data = await res.json()

    return {
        name: data.name,
        image: data.image.small,
        percent: data.market_data.price_change_percentage_24h,
        price: data.market_data.current_price.usd
    }

}

const renderCoin = async (coinID, elementClass) => {
    const coin = await getCoinInfo(coinID);

    let firstBlock = document.querySelector('.currency-1'),
        secondBlock = document.querySelector('.currency-2');


    function addInfo(elementClass, parent) {
        let element = parent.querySelector(elementClass),
            name = element.querySelector('.currency__name'),
            img = element.querySelector('.currency__image'),
            price = element.querySelector('.currency__price-value'),
            percent = element.querySelector('.currency__percent'),
            percentBlock = element.querySelector('.currency__percent-block');

        name.innerHTML = coin.name;
        img.src = coin.image;
        price.innerHTML = coin.price;
        percent.innerHTML = coin.percent.toFixed(2);
        if (coin.percent > 0) {
            percentBlock.classList.add('positive')
        }
    }
    addInfo(elementClass, firstBlock)
    addInfo(elementClass, secondBlock)

}
// getCoins()
if(document.querySelector('.currency-1')) {
    renderCoin("ethereum", ".coin-1")
    renderCoin("litecoin", ".coin-2")
    renderCoin("bitcoin", ".coin-3")
    renderCoin("ripple", ".coin-4")
    renderCoin("solana", ".coin-5")
}

