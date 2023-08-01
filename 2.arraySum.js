function arraySum(arr){
    const len = arr.length;
    let sum=0;
    for(let i=0; i<len; i++){
        sum += arr[i]
    }
    return sum
}

const arr=[2,4,6,8,10,1,3,5,7,9]
console.log(arraySum(arr))