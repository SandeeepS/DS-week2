function findUnique(array){
    let obj = {};
    for(let i = 0 ; i < array.length ; i ++){
        if(!obj.hasOwnProperty(array[i])){
            obj[array[i]] = array[i];
        }
    }

    let newArr = Object.values(obj);
    return newArr;
}

let array = [2,2,3,8,7,5,4,3,4,7,8];
console.log(findUnique(array));