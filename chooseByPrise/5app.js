const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

function randomWithRetry(objects) {
    let totalWeight = 0;
    objects.forEach(obj => totalWeight += obj.price);

    for (let attempt = 0; attempt < 3; attempt++) {
        let randomValue = Math.random() * totalWeight;
        let accumulatedWeight = 0;

        for (let i = 0; i < objects.length; i++) {
            accumulatedWeight += objects[i].price;
            if (randomValue <= accumulatedWeight) {
                return objects[i];
            }
        }
    }
    return null;
}

function spreadTrafficRandomWithRetry(banners) {
    const selectedBanner = randomWithRetry(banners);
    if (selectedBanner) {
        selectedBanner.show += 1;
    }
}

for (let i = 0; i < 1000000; i++) {
    spreadTrafficRandomWithRetry(ads);
}

console.log(ads);
