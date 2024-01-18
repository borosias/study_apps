const ads = [
    { name: 'ad1', price: 1.8, show: 0 },
    { name: 'ad2', price: 1.55, show: 0 },
    { name: 'ad3', price: 1.13, show: 0 },
    { name: 'ad4', price: 0.48, show: 0 },
];

function spreadTrafficEvenly(banners) {
    const totalShows = 1000000;
    for (let i = 0; i < totalShows; i++) {
        leastConnection(banners).show += 1;
    }
}

function leastConnection(obj) {
    let minConn = obj[0];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].show < minConn.show) {
            minConn = obj[i]
        }
    }
    return minConn
}



spreadTrafficEvenly(ads);

console.log(ads);