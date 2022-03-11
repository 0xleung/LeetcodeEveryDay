/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 function twoSum(nums, target) {
    let cache = new Map();
    for(let i = 0; i < nums.length; i++ ){
        let k = target - nums[i];
        if(cache.has(k)){
            return [cache.get(k), i];
        }
        cache.set(nums[i], i);
    }
    return [];
};

const main = ()=>{
    const rst = twoSum([2,7,11,15], 9)
    console.log(rst);
}

main();