// 1) Find the total numbers of pairs, formed by the given space separated numbers.

// Enter numbers: 10 20 10 30 20 20 20
// output: 3 pairs

// Enter numbers: 10 20 30 50 50
// output: 1 pair



const prompt = require("prompt-sync")();
let arr =prompt("enter Some number with Space Between :").split(" ").map(Number);
let emp =[];
let pair=0
for(n of arr){
    if(!emp.includes(n)){
        emp.push(n)
    }
}
for(i of emp){
    count=0;
    for(j of arr){
        if(i==j){
            count++

        }
    }
    if(count%2==0 && count!=0){
    console.log(`${i} has ${count/2} pairs`)
    pair+=count/2
    }
    else{
        console.log(`${i} has ${(count-1)/2} pairs`)
        pair+=(count-1)/2
    } 
}
console.log("Total Pairs in given series of Numbers is :"+pair)