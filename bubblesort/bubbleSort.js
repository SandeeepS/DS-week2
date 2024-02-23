function bubbleSort(arr){
    let swapped ;
    do{
        swapped = false;
        for(let i = 0 ; i < arr.length - 1 ; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
                swapped = true;
            }
        }
    }while(swapped)
    console.log(arr);
}

const arr = [3,6,5,4,9,1,4];
bubbleSort(arr);
