const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];
function weightedLeastConnections(objects) {
    let minConnections = objects[0];
    for (let i = 1; i < objects.length; i++) {
        const currentServer = objects[i];
        if (currentServer.show / currentServer.price < minConnections.show / minConnections.price) {
            minConnections = currentServer;
        }
    }
    return minConnections;
}
function spreadTrafficByPrice(banners) {
    weightedLeastConnections(banners).show += 1
}

for(let i = 0; i < 1000000; i++) {
    spreadTrafficByPrice(ads);
}

console.log(ads)