    // let val;

    // val = window.document;
    // val = document.all;
    // val = document.all.length;
    // val = document.all[10];
    // val = document.head;
    // val = document.body;
    // val = document.anchors;
    // val = document.URL;
    // val = document.domain;
    // val = document.images;
    // val = document.title;
    // val = document.forms;
    // val = document.forms[0];
    // val = document.forms[0].id;
    // val = document.forms[0].method;
    // val = document.forms[0].action;
    // val = document.scripts;
    // val = document.scripts[2];
    // val = document.scripts[2].getAttribute('src');


    // console.log(val);

// /// SINGLE ELEMENT...**************
//     let val;

//     val = document.getElementById('header');
    
//     val.style.fontSize= '45px';
//     val.style.color= 'red';
//     val.style.fontWeight = 'bold' ;

//     val.innerText = ' my ToDo App';


//     console.log(val);

    // console.log(document.querySelector('#header'));
    // console.log(document.querySelector('.card-header'));
    // console.log(document.querySelector('div'));

    // val = document.querySelector('li').style.color = 'red';
    // document.querySelector('li:last-child').style.color = 'blue';
    // document.querySelector('li:nth-child(2)').style.color = 'yellow';

    // document.querySelector('li:nth-child(4)').textContent = 'task item';

    // document.querySelector('li').classList.add('active');


    // SUMMARY
    // SINGLE ELEMENTS --- documents.getElementById() or document.querySelector()


//     ////************************************ */


///////**********MULTIPLE ELEMENTSSS  *****************/*/*/* */




//classname
// let val;

// val= document.getElementsByClassName('list-group-item');
// //val= document.getElementsByClassName('list-group-item')[0];

// val[1].style.color = 'blue';
// val[1].style.fontSize = '25px';
// val[2].textContent = 'new item';

// for(let i =0 ; i< val.length; i++){
//     val[i].style.color = 'blue' ; 
//     val[i].style.fontSize = '25px';
//     val[i].textContent = 'new item';
// }

////document.getElementsByTagName()

// val = document.getElementsByTagName('li');
// val = document.getElementById('task-list');
// val = val.getElementsByTagName('a');


//document.querySelectorAll() ----- AVANTAJI FOREACH methodunu kullanabiliyoruz
                                //çünkü nodeList olarak geliyor elemanlar.

// val = document.querySelectorAll('li');

// val.forEach(function(item,index){
//     item.textContent = `${index+1} - hello`

// });

//  val = document.querySelectorAll('li:nth-child(even)');

//  val.forEach(function(item) {

//      item.style.background = 'yellow';
    

    
// });


// console.log(val);



//*************////////////////********************************** */


// let val;
// let list = document.querySelector('.list-group');

// val=list.childNodes;
// val=list.childNodes[0];
// val=list.childNodes[0].nodeType; //textNode
// val=list.childNodes[1].nodeType;  // elementnode

// val =list.children;
// val =list.children[2].textContent='new item';
// val = list.children[3].children ;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.childElementCount;

// val = list.parentNode;

// val = list.parentElement;
// val = list.parentElement.parentElement;

// val = list.children[0].nextSibling;
// val = list.children[0].nextElementSibling;


// for (let i = 0; i < list.children.length; i++) {
//     console.log(list.children[i]);
    
// }






// console.log(val);


/////////////*****************//////////********************************** */ */


//CREATE ELEMENT

// const li = document.createElement('li');

// //add class
// li.className = 'list-group-item list-group-item-secondary';
// // add attr.
// li.setAttribute('title','new item');
// li.setAttribute('data-id','5');

// //text node

// const text = document.createTextNode('new item');
// li.appendChild(text);

// const a = document.createElement('a');
// a.setAttribute('href','#');
// a.className = 'delete-item float-right';
// a.innerHTML = '<i class="fas fa-times"></i>';

// //append to a li element.
// li.appendChild(a);

// //append li to ul

// document.querySelector('#task-list').appendChild(li);


// console.log(li);

//*******///************/************************* */ */

const taskList = document.querySelector('#task-list');

//removing element

//taskList.remove();
//taskList.childNodes[1].remove();
//taskList.children[0].remove();

//removing attr
//taskList.children[0].removeAttribute('class');

// for (let index = 0; index < taskList.children.length; index++) {
//     taskList.children[index].removeAttribute('class');
    
// }

///*** Update Elements */

// const cardHeader = document.querySelector('.card-header');

// //create element

// const h2 = document.createElement('h2');
// h2.setAttribute('class','card-header');
// h2.appendChild(document.createTextNode('My new Task List'));



// const parent = document.querySelector('.card');
// parent.replaceChild(h2,cardHeader);

//classes***

let val;
link = taskList.children[0].children[0];

val=link.className;
val = link.classList;

link.classList.add('new');
link.classList.remove('new');

//attr.
val = link.getAttribute('class');

link.setAttribute('data-id',5);
val = link.getAttribute('data-id');
val = link.getAttribute('href');

val = link.hasAttribute('href');

console.log(val);
