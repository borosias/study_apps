const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];
const totalShows = 1000000;

function stringHash(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = (hash << 5) - hash + str.charCodeAt(i);
    }
    return hash % ads.length;
}
function spreadTrafficEvenly(adName, banners) {
    const index = stringHash(adName);
    banners[index].show += 1;
}

for (let i = 0; i < totalShows; i++) {
    const adName = ads[i % ads.length].name;
    spreadTrafficEvenly(adName, ads);
}

console.log(ads);
