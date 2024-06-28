const prompt = require("prompt-sync")();
// let rows=prompt("Enter no.of Rows :").replaceAll("-","")
// row=Number(rows)
// for(i=1;i<=row;i++){
//     s=""
//     sum=0
//     for(j=1;j<=i;j++){
//         s+=j+" "
//         sum+=j
//     }
//     console.log(s,"=>",sum)
// }


// const prompt = require("prompt-sync")();

// let table=+prompt("enter a number :")
// for(i=1;i<=table;i++){
//     if(i%2!=0){
//     for(j=1;j<=10;j++){
//         console.log(i,"x",j,"=",i*j)
//     }
//     }
// }




// PS PATTERNS DAY-5
// +==================+
// 1) Write a Program For Below pattern ?
//      *  *  *  *  * 
//       *    	 *   
//        *      *     
//         *   *       
//           *  
// CODE :-

// let row=+prompt("Enter Number of Rows :");
// for(i=row;i>=1;i--){
//     s=""
//     for(k=1;k<=row-i+5;k++){
//         s+=" "
//     }
//     for(j=row;j>=1;j--){
//         if(i==row || j==row || j+i==row+1)
//         s+="* "
//          else{
//     s+="  "
//     }
//     }
//     console.log(s)
// }

// Output :-
// Enter Number of Rows :5
//      *  *  *  *  * 
//       *    	  *   
//        *      *     
//         *   *       
//           *  


// 2) Write a Program to Print Below Pattern ?

// *
// *  *
// *  *  *
// *  *    j  = 1 , j <= count 
// *
// CODE :-
// ----------
// let row = +prompt("Enter Number of Rows :");
// let v=row%2==0?row/2:row%2!=0?row/2+0.5:"Entered Data is Not a Number";
// let s=row-v;
// for(i=1;i<=v;i++){
//    x=""
//    for(j=1;j<=i;j++){
//        x+="* "
//    }
//    console.log(x)
// }
// for(m=s;m>=1;m--){
//     b=""
//     for(n=m;n>=1;n--){
//         b+="* "
//     }
//     console.log(b)
// }

// Output :-
// Enter Number of Rows :7
// * 
// * * 
// * * * 
// * * * * 
// * * * 
// * * 
// * 

// 3) Write a Program  to Print Below Pattern ?
//                1 
//             2   3 
//           4      6 
//         7 8  9  10  
// CODE :-
// let row = +prompt("Enter Number of Rows :");
// value=1
// for(i=1;i<=row;i++)
//    {
//     s="";
//     for(k=1;k<=row-i+10;k++)
//         {
//         s+=" "
//         }
//     for(j=1;j<=i;j++){
//         if(j==i || i==row || j==1)
//             {
//             s+=value+" "
//             }
//              else
//             {
//             s+="  "
//             }
//         value++
//     }  
// console.log(s)
// }

// Output :-
// Enter Number of Rows :4
//               1 
//             2  3 
//            4     6 
//          7 8 9 10 
