//remove duplicatess from the elements ;
function removeDuplicates(arr){
    let obj = {};
    for(let i = 0 ; i < arr.length; i++){
        if(!obj.hasOwnProperty(arr[i])){
            obj[arr[i]] = arr[i];
        }
    }
    let newArr = Object.values(obj);
    console.log(newArr);
}
const arr = [3,2,5,3,2,8,7,8,6];
removeDuplicates(arr);