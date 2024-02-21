showprimes(200);
function showprimes(limit) {
  for (let number = 2; number <= limit; number++) {
    if (isprime(number)) console.log(number);
  }
  function isprime(number) {
    for (let factor = 2; factor < number; factor++)
      if (number % factor === 0) return false;
    return true;
  }
}
