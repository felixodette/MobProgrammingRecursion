function sum(num) {

    if (num < 0) {
        return 0;
    } else {
        return num + sum(num - 1)
    }

}

module.exports = sum;

console.log(sum(5));