const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

function spreadTrafficByPrice(banners) {
    const cumulativePrices = [];
    let totalWeight = 0;

    for (const ad of banners) {
        totalWeight += ad.price;
        cumulativePrices.push(totalWeight);
    }

    let remainingShows = 1000000;

    for (let i = 0; i < remainingShows; i++) {
        const randomValue = Math.random() * totalWeight;
        const selectedIndex = binarySearch(cumulativePrices, randomValue);
        banners[selectedIndex].show++;
    }
}

spreadTrafficByPrice(ads);
console.log(ads);
