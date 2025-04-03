
let name
function moveZeroes(nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            count++;
        } else {
            nums[i - count] = nums[i];
        }
    }
    for (let i = nums.length - count; i < nums.length; i++) {
        nums[i] = 0;
    }

    return nums


    let i = 0;

    for (let j = 1; j <= nums.length - 1; j++) {
        if (nums[i] === 0 && nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        } else if (nums[i] !== 0) {
            i++;
        }
    }
}







console.log(moveZeroes([0, 1, 0, 3, 12]));