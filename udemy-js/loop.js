let cars = ['Opel','BMW','Toyota'];

let people = [
    
    {firstName: 'Ada',lastName:'Bilgi'},
    {firstName: 'yigit',lastName:'Bilgi'},
    {firstName: 'çınar',lastName:'Bilgi'},
    {firstName: 'melih',lastName:'Bilgi'},




];

console.log(people);



//for-in

// for(let i in cars){
//     console.log(cars[i]);
// }

//foreach


// cars.forEach(function(item){

//     console.log(item);


// });


// for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
    
// }
//map: returns an array

// let val = people.map(function(item){
//     return item.firstName +  ' ' + item.lastName
// });

// console.log(val);

// let numbers = [1,5,6,8,10];

// let num = numbers.map(function(n){
//     return n*n;
// });

// console.log(num);

//lab

var hak = 5;
var tahmin;
var sayi = Math.floor((Math.random()*10)+1);

console.log(sayi);

while(hak>0){   
    hak--;

    tahmin = Number(prompt('bir sayı giriniz.'));

    if(sayi == tahmin){
        console.log('Tebrikler');
        break;
    }else if (sayi > tahmin){
        console.log('yukarı');1
    }else console.log('aşağı');
    console.log(hak + ' hakkınız kaldı.');

    if(hak==0){
        console.log('hakkınız bitti.');
        break;
    }


}