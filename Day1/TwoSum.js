/* 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

*/

//---------------------------BRUTE FORCE TECHNIQUE---------------------- O(N^2)
let nums = [2,7,11,15]
let target = 9

const twoSum = function (nums, target) {
    for(let i = 0; i< nums.length; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i, j];
            }
        }
    }
}

console.log(twoSum(nums, target));

//---------------------------Optimised Approach--------------------------  O(N)
const twoSumByMap = function(nums, target){

   const map = new Map()

   for(let i = 0; i<nums.length; i++){
     let complement = target - nums[i];

    if(map.has(complement)){
        return [map.get(complement), i]
    }

    map.set(nums[i], i)
   }
   return [];
}

console.log(twoSumByMap(nums, target));



/*

EXPLAINATION:

Step by Step Explanation for Optimized:

1. Map banate hain → const map = new Map();

       - Ye ek storage hai jisme hum number → index rakhte hain.

       - Matlab agar humne pehle koi number dekha hai, to uska index map me save kar denge.

2. Loop start karte hain (for (let i = 0; i < nums.length; i++))

       -   Har element check karenge ek ek karke.

3. Complement nikalte hain → let complement = target - nums[i];

         -   Matlab, agar mujhe target banana hai, aur mere paas nums[i] hai,
            to mujhe aur kaunsa number chahiye? → complement.

         -   Example:

         -   Agar target = 9 aur nums[i] = 2 hai → complement = 9 - 2 = 7.

         -   Matlab mujhe 7 chahiye to pair banega.

4. Check karte hain map me → if (map.has(complement))

          -  Agar ye complement pehle array me aa chuka hai (aur map me store hai),
            to iska matlab pair mil gaya.

5. Return karo → [map.get(complement), i]

           - map.get(complement) = uska purana index

           -    i = current index

6. Nahi mila to store kar do → map.set(nums[i], i);

`           -    Agar abhi tak pair nahi mila, to current number ko map me daal do future ke liye.



*/