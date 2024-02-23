
function factorial(n) {
     // Base case, if n is 0 or 1, return 1
     if (n === 0 || n === 1) {
         return 1;
     }
     // Recursive case, return n multiplied by the factorial of n-1
     else {
         return n * factorial(n - 1);
     }
 }
 
 console.log(factorial(5)); 
 console.log(factorial(6)); 