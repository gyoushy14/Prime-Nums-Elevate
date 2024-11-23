const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printPrimes(n, m) {
    for (let i = n; i <= m; i++) {
        console.log(isPrime(i) ? i : 'Not prime number');
    }
}
printPrimes(7, 20)