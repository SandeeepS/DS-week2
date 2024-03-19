function selectionSort(arr){
    for(let i = 0 ; i < arr.length - 1;i++){
        let smallestIndex = i;
        for(let j = i+1 ; j < arr.length; j++){
            if(arr[i] < arr[j]){
                smallestIndex = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
    }

    console.log(arr);
}

const arr = [3,4,1,5,3,8,7];
selectionSort(arr);