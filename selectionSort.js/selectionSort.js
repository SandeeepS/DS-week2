function selectionSort(nums){
    for(let i = 0 ; i < nums.length - 1 ; i++){
        let smallestIndex = i;
        for(let j = i+1 ; j < nums.length; j++){
             if(nums[j] < nums[smallestIndex]){
                smallestIndex = j;
             }
        }
        const temp = nums[i];
        nums[i] = nums[smallestIndex];
        nums[smallestIndex] = temp;
    }

   console.log(nums);
}

const nums = [5,6,4,2,3,10,85,40];
selectionSort(nums);