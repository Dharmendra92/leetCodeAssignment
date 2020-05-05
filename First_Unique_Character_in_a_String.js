/**
 *Problem Statement
 *Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
 s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
 */
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let arr = [];
    for(let i=0;i<s.length;i++){
        let index=s.charCodeAt(i)-96;
        if(arr[index]>0){
            arr[index] = arr[index]+1;
        }else{
            arr[index] =1;
        }  
    }
    
    for(let j=0;j<s.length;j++){
        if(arr[s.charCodeAt(j)-96]===1){
            return j;
        }
    }
    return -1;
    
};