// Array exercices

let cars = ['BMW','Mercedes','Opel','Mazda'];

console.log(cars.length);
console.log(cars);

console.log(cars[0]);
console.log(cars[3]);

cars.push('Renault');
cars.unshift('Toyota');
cars.unshift('Seat');

cars.shift('Seat');

cars.reverse();

cars.sort();

let num =[1,2,5,80,15,22,22,23,9,78,56];
function sortingNumber(a,b){
  
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

console.log(num.sort(sortingNumber));


console.log(cars.indexOf('Opel'));
console.log(cars.includes('Opel'));

var str = "Chevrolet,Dacia";

var arr2= str.split(',');
console.log(arr2);

var arr3 = cars.concat(arr2);


console.log(arr3.splice(6,2));
// console.log(arr3.slice(6,8));

console.log(cars);
console.log(arr3);


var studentA = ['Yigit','Bilgi',2010];
var studentB = ['Sena','Turan',1999];
var studentC = ['Ahmet','Turan',1998];

var students = [studentA,studentB,studentC];

console.log(students);