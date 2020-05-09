//Given a positive integer num, write a function which returns True if num is a perfect square else False.
//Note: Do not use any built-in library function such as sqrt.
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    for(let i=1;i*i<=num;i++){
        console.log(num,i)
        if(num%i==0 && num/i==i){
            return true;
        }
    }
    return false;
};