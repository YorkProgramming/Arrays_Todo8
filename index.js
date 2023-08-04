//1.
//Smarter Sum

/* Use time-space tradeoff to accelerate average running time for iSigma(num) 
that returns sum of integers from 1 to num. 

Recall iSigma(1)=1, iSigma(2)=3, iSigma(3)=6, iSigma(4)=10.*/

function iSigma(num){
    var sum = 0;

    for(var i = 0; i <= num; i++){
        sum += i;
    }

    return sum;
}

//Example:
console.log(iSigma(4));

//We set a sum variable to 0.
//We loop through the number.
//We add the number to the sum.
//We return the sum.

//#########################################################################################################

//2.
//Faster Factorial

/* Remember Factorial(num)? 
It returned the product of positive integers from 1 to num. 

Examples: Factorial(1) = 1, Factorial(2) = 2, Factorial(3) = 6. 

For these purposes, Factorial(0) = 1. 

Recreate this function, 
but use a time-space tradeoff to accelerate the average running time. */

function factorial(num){
    var product = 1;

    for(var i = 1; i <= num; i++){
        product *= i;
    }

    return product;
}

//Example:
console.log(factorial(3));

//We set a product variable to 1.
//We loop through the number.
//We multiply the number to the product.
//We return the product.

//#########################################################################################################