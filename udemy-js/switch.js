

// // let category = 'beyaz eşya';

// // switch(category){


// //     case 'telefon':
// //         console.log('telefon kategorisi');
// //     break;
    
// //     case 'bilgisayar':
// //         console.log('bilgisayar kategorisi');
// //     break;
    
// //     default:
// //         console.log('boş');
// // }

// let day;

// switch(new Date().getDay()){

//     case 0:
//         day = 'Pazar';
//     break;  
    
//     case 1:
//         day = 'Pazartesi';
//     break;      

//     case 2:
//         day = 'Salı';
//     break;      

//     case 3:
//         day = 'Çarşamba';
//     break;      

//     case 4:
//         day = 'Perşembe';
//     break;      

//     case 5:
//         day = 'Cuma';
//     break;      

//     case 6:
//         day = 'Cumartesi';
//     break;      


// }

// console.log(day);

// const firstName = 'Melih';
// const age = 19;


// switch(true){
//     case age>0 && age < 12 :
//         console.log(`${firstName} is a child `);
//         break;

//     case age>=13 && age<=19 :
//         console.log(`${firstName} is a teenager`);
//         break;

//     default:
//         console.log(`${firstName} is an adult`);    
// } 


//lab

// var trafigeCikis = new Date('04/20/2023');
// trafigeCikis.setHours(0,0,0,0);
// var trafiktekiMs = Date.now() - trafigeCikis.getTime();

// var trafiktekiGun = Math.floor(trafiktekiMs/(1000*60*60*24));

// if(trafiktekiGun>0 && trafiktekiGun <= 365 ){
//     console.log('1.servis bakım süreniz geldi');
// }
// else if(trafiktekiGun > 365 && trafiktekiGun <= 365*2) {
//     console.log('2.servis bakım süreniz geldi.');
// }
// else if(trafiktekiGun > 365*2 && trafiktekiGun<= 365*3){
//     console.log('3.servis bakım süreniz geldi');
// }

// else{
//     console.log('bilinmeyen bir süre');
// }


// console.log(trafiktekiGun);


//lab2

var result = prompt("who's there");

if(result == 'cancel'){
    console.log('cancelled');
}else if(result == 'admin'){
    console.log('welcome admin');
    var pass = prompt("enter your pass: ")
    if(pass =='cancelled'){
        console.log('cancelled');
    }else if(pass == '1234'){
        console.log('welcome admin');
    }else{
        console.log('wrong pass.');
    }
}else{
    console.log('I dont know you');
}



