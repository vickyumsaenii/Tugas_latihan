// 1 

function checkPrime(n) {
  var faktor = 0;

  for (var i = 1; i <= n; i++) {
    if (n % i === 0) {
      faktor
    }
  }

  // if (faktor === 2)
  return faktor === 2 ? true : false;
}

function printPrimes(num) {
  // code here
  var i = 1;
  var x = 0;
  while (x <num) {
    if (checkPrime(i) === true) {
      console.log(i)
      x++
    }
    i++
  }
  
}
printPrimes(10)