const ads = [
    {name: 'ad1', price: 1.8, show: 0},
    {name: 'ad2', price: 1.55, show: 0},
    {name: 'ad3', price: 1.13, show: 0},
    {name: 'ad4', price: 0.48, show: 0},
];

const totalShows = 1000000;

function spreadTrafficEvenly(banners) {
    for (let i = 0; i < totalShows; i++) {
        let selectedIndex = findLowestShowIndex(banners);
        banners[selectedIndex].show += 1;
    }
}

function findLowestShowIndex(banners) {
    let lowestShowIndex = 0;
    let lowestShowCount = banners[0].show;

    for (let i = 1; i < banners.length; i++) {
        if (banners[i].show < lowestShowCount) {
            lowestShowIndex = i;
            lowestShowCount = banners[i].show;
        }
    }

    return lowestShowIndex;
}

spreadTrafficEvenly(ads);

console.log(ads);

