
let name
function moveZeroes(nums) {
  


    let i = 0;

    for (let j = 1; j <= nums.length - 1; j++) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        } else if (nums[i] !== 0) {
            i++;
        }
    }

    return nums
}







console.log(moveZeroes([0, 2, 0, 0, 12]));