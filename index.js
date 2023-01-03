// Task 1

// let x = 1; 
// let y = 2; 
// let res1 = String(x) + String(y);
// console.log(res1);
// console.log(typeof res1);

// let res2 = Boolean(x) + String(y);
// console.log(res2);
// console.log(typeof res2); 

// let res3 = x != y;
// console.log(res3); 
// console.log(typeof res3);  

// let res4 = x*y*"y+y";
// console.log(res4);
// console.log(typeof res4); 

// Task 2
/*
    let num = prompt ("Enter number");
if (num % 2 == 0 && num > 0) 
    {
    console.log ("Numbers is pair");
    }
else if (num % 7 == 0) 
    {
    console.log ("Number is multiple 7");
    } 
else 
{
    console.log ("Number is not multiple 7 and not pair");
}*/

// Task 3

/*const difArray = [];
difArray [0] = 7585;
difArray [1] = "Some letters";
difArray [2] = 2>0;
difArray [3] = null;
console.log (difArray.length);
difArray[4] = prompt ("Enter something");
console.log (difArray [4]);
difArray.shift();
console.log (difArray); */

// Task 4

//let cities = ["Rome", "Lviv", "Warsaw"]; 
//let allInOneCity = cities.join("*"); 


// Task 5
//let age = prompt ("How old are you?");
//let isAdult = (age > 18 ) ? "Ви досягли повнолітнього віку" : "Ви ще надто молоді";
//console.log (isAdult);

// Task 6

/* let a = prompt('Enter the length of side A');
   let b = prompt('Enter the length of side B');
   let c = prompt('Enter the length of side C');

   if ((a > 0 && a !== NaN) && (b > 0 && b !== NaN) && (c > 0 && c !== NaN)){

     const p = (a + b + c) / 2;
     const triangleSquare = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    
     console.log(triangleSquare.toFixed(3));

     if (Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) || Math.pow(b, 2) + Math.pow(c, 2) == Math.pow(a, 2) || Math.pow(c, 2) + Math.pow(a, 2) == Math.pow(b, 2)){
    
         console.log('Entered values have built right Triangle');
 } 

     else { 
         console.log('With entered values you can not build right Triangle')};
 }    

 else {
     console.log('Enter valid value');
 }
 */

// Task 7
//case 1

let currentDate = new Date;
let currentHour = currentDate.getHours();
// //case 1
// if (currentHour > 0 && currentHour <= 5) 
// {
// console.log ("Доброї ночі");
// }
// else if (currentHour > 5 && currentHour <=11) {
//     console.log ("Доброго ранку");
// }
// else if (currentHour > 11 && currentHour <=17) {
//     console.log ("Доброго дня");
// }
// else if (currentHour > 17 && currentHour <=23) {
//     console.log ("Доброго вечора");
// }

//case 2
// switch (currentHour){
//         case 0:
//         case 1:
//         case 2: 
//         case 3: 
//         case 4:
//             console.log('Доброї ночі');
//                 break;
    
//         case 5:
//         case 6: 
//         case 7: 
//         case 8: 
//         case 9: 
//         case 10:
//             console.log("Доброго ранку");
//                 break;  
    
//         case 11:
//         case 12: 
//         case 13:
//         case 14:
//         case 15:
//         case 16:
//             console.log('Доброго дня');
            
//         case 17:
//         case 18:
//         case 29:
//         case 20:
//         case 21: 
//         case 22: 
//         case 23:
//             console.log('Доброго вечора');
// }