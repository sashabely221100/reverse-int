module.exports = function reverse(n) {
    return (n < 0) ? Number(String(n * (-1)).split('').reverse().join('')) : Number(String(n).split('').reverse().join(''));

}