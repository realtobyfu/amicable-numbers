var first, second;
first = prompt("What is the first number?");
second = prompt("What is the second number?");

let arr1 = get_factors(first);
let arr2 = get_factors(second);

var sum1 = 0;
var sum2 = 0;
for (let i = 0; i < arr1.length; i++) {
  sum1 = sum1 + arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
  sum2 = sum2 + arr2[i];
}
if (sum1 == second || sum2 == first) {
  ami = "The numbers:  " + first + " and " + second + " are amicable";
} else {
  ami = "The numbers:  " + first + " and " + second + " are not amicable";
}

function get_factors(n) {
  var factors = [];
  for (let i = 0; i < n; i++) {
    if (n % i == 0) {
      factors.push(i);
    }
  }
  return factors;
}
