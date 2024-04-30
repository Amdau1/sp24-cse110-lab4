for (let key in stat) {
    if (key[0] === 'r' || stat[key] % 2 !== 0) {
        console.log(stat[key]);
    }
}
