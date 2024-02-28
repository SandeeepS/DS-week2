function quickSort(arr){
      if(arr.length < 2){
        return arr;
      }

      let pivot = arr[0];
      let leftArr = [];
      let rightArr   = [];

      for(let i = 1 ; i < arr.length ; i ++){
        if(arr[i] < pivot){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i])
        }
      }

      return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const arr = [ 5,2,13,7,5,1];
console.log(quickSort(arr));