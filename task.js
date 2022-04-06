`use strict`


// let arr = [1, 5, 6, 4, 6];
// let arr1 = arr.length-1;
// console.log(arr);
// for(let i=0; i<=arr1/2;i++){
// let t = arr[i];
// arr[i] = arr[arr1-i];
// arr[arr1-i]=t;
// }
// console.log(arr);




//***************************************************** */



// function uppercase(str)
// {
//   let array1 = str.split(' ');
//   let newarray1 = [];
    
//   for(let x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// console.log(uppercase("tamara"));


//********************************************************* */

// let str = "abcdcba";
// function Palindrome(str){
// let x = str.length-1;
// for (let i = 0; i<x/2;i++ ){
//     let x = str[i];
//     let t = str[x-i];
//     if (x==t){
//         console.log("true");
//         return true;
//     }
// }
// console.log("false");
// return false;
// }



let str = "abcdcba";
let str2= str.split("").reverse().join("");
if (str==str2){
console.log(true);
}
else{ 
console.log(false);
}






