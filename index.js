const arr = [100, 180, 260, 310, 40, 535, 695];

const n = arr.length;
console.log('arr length ', n);

let maxima = [];
let minima = [];


for(let i = 0; i < n; i++){
    if(i === 0){
        if(arr[i] > arr[i+1])
            maxima.push(i)
        else if(arr[i] < arr[i+1])
            minima.push(i)    
    }
    else if(i === n-1){
        if(arr[i] > arr[i-1])
            maxima.push(i)
        else if(arr[i] < arr[i-1])
            minima.push(i)
    }
    else if(arr[i] > arr[i-1] && arr[i] > arr[i+1])
        maxima.push(i)
    else if(arr[i] < arr[i-1] && arr[i] < arr[i+1])
        minima.push(i)    
}

console.log('maxima: ', maxima)
console.log('minima: ', minima)

