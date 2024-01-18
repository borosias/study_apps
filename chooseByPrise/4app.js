const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

let currentIndex = 0;

function weightedRoundRobin(objects) {
    let totalWeight = 0;
    objects.forEach(obj => totalWeight += obj.price);

    let randomValue = Math.random() * totalWeight;
    let accumulatedWeight = 0;

    for (let i = 0; i < objects.length; i++) {
        accumulatedWeight += objects[i].price;
        if (randomValue <= accumulatedWeight) {
            return objects[i];
        }
    }
}

function spreadTrafficWeightedRoundRobin(banners) {
    weightedRoundRobin(banners).show += 1;
}

for (let i = 0; i < 1000000; i++) {
    spreadTrafficWeightedRoundRobin(ads);
}

console.log(ads);

