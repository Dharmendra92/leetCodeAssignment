/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.
Input: [2,2,1,1,1,2,2]
Output: 2
*/
/**
 * @param {number[]} nums
 * @return {number}
*/
var majorityElement = function(nums) {
    let a = {};
    let j=0;
    for(let i=0;i<nums.length;i++){
        let item = String(nums[i]);
        if(a[item]>0){
            a[item] = a[item] +1;
        }else{
            a[item] =1;
        }
            
    }
    
    for (let property in a) {
       if(a[property]>(nums.length)/2){
           return property;
       }
    }
};
