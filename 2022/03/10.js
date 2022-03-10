var findMedianSortedArrays = function(nums1, nums2) {
    const _arr = nums1.concat(nums2).sort((a,b)=>a<b?-1:1)
    const len = _arr.length
    const mid = Math.ceil(len/2)
    return !(len%2) ? (_arr[mid-1] + _arr[mid])/2 : _arr[mid-1]
};

const main = () => {
    const rst = findMedianSortedArrays([1,3], [2,4])
    console.log(rst)
}

main();