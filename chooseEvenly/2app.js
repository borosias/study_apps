const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

function spreadTrafficEvenly(banners) {
    const totalShows = 1000000;
    for (let i = 0; i < totalShows; i++) {
        const randomIndex = Math.floor(Math.random() * banners.length);
        banners[randomIndex].show += 1;
    }
}

spreadTrafficEvenly(ads);

console.log(ads);