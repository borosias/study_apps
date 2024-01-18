const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

let currentIndex = 0;
let remainingShows = 1000000;

function spreadTrafficByPrice(banners) {
    for (; remainingShows > 0; currentIndex = (currentIndex + 1) % banners.length) {
        const currentAd = banners[currentIndex];
        const weightPercentage = currentAd.price / banners.reduce((sum, ad) => sum + ad.price, 0);
        const adShows = Math.round(remainingShows * weightPercentage) || 1;
        currentAd.show += adShows;
        remainingShows -= adShows;
    }
}

spreadTrafficByPrice(ads);
console.log(ads);




