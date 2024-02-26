function mergeSort(arr){
    if(arr.length < 2){
        return arr;
    }

    let middle = Math.floor(arr.length / 2 );
    let leftArr = arr.slice(0,middle);
    let rightArr = arr.slice(middle);
    
    return merge(mergeSort(leftArr),mergeSort(rightArr));
}

function merge(leftArr,rightArr){
    const sortdArr = [];
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <= rightArr[0]){
            sortdArr.push(leftArr.shift())
        }else{
            sortdArr.push(rightArr.shift())
        }
    }
    return [...sortdArr, ...leftArr, ...rightArr]
}

const arr = [8,20,-2,4,-6]
console.log(mergeSort(arr));