

//***/// MOUSE EVENTS*/*/**/*/*/* */

// const btn =document.querySelector('#btnDeleteAll');
// const btn2 = document.querySelector('#btnAddNewTask');
// const ul = document.querySelector('#task-list');

// btn.addEventListener('click',function (params) {

//     let val;
//     val = params;

//     val=params.target;
//     val = params.target.id;
    
//     val = params.target.classList;
//     val = params.type;

//     console.log(val);

//     params.preventDefault();
    
// });

// btn.addEventListener('click',btnClick);
// btn2.addEventListener('click',btnClick);

// function btnClick() {

//     console.log('btn clicked!');
    
// }

//click
// btn.addEventListener('click',eventHandler);
// ul.addEventListener('click',eventHandler);

//double click
// btn.addEventListener('dblclick',eventHandler);

//mouse down
//btn.addEventListener('mousedown',eventHandler);

//mouse up
//btn.addEventListener('mouseup',eventHandler);

//mouse-enter
//ul.addEventListener('mouseenter',eventHandler);

//mouseleave
//ul.addEventListener('mouseleave',eventHandler);

//mouse-over
//ul.addEventListener('mouseover',eventHandler);

//mouse-out
//ul.addEventListener('mouseout',eventHandler);


//mouse move

// const h5  = document.querySelector('h5');

// ul.addEventListener('mousemove',eventHandler);

// function eventHandler(params) {
    
//     console.log(`event type: ${params.type}`);

//     h5.textContent = `mouse x : ${params.offsetX}, mouse y : ${params.offsetY}`
    
// }

//*/*/*/*/******************************************************* */

//***/// KEYBOARD EVENTS*/*/**/*/*/* */



// const input = document.querySelector('#txtTaskName');

// // input.addEventListener('keydown',eventHandler);
// // input.addEventListener('keyup',eventHandler);
// // input.addEventListener('keypress',eventHandler);
// // input.addEventListener('focus',eventHandler);
// // input.addEventListener('blur',eventHandler);
// // input.addEventListener('cut',eventHandler);
// // input.addEventListener('paste',eventHandler);
// // input.addEventListener('select',eventHandler);


// const form = document.querySelector('form');
// const select = document.querySelector('#select');

// //form.addEventListener('submit',eventHandler);
// select.addEventListener('change',eventHandler);

// function eventHandler(params) {
//     console.log('event type ' + params.type);
//     //console.log('key code : ' +params.keyCode);
//     //console.log('value : ' +params.target.value);


//     //params.target.style.backgroundColor = 'yellow';
//     //params.target.style.backgroundColor = 'blue';

//     params.preventDefault();
// }



//*/*/*/*/******************************************************* */

//************Event Bubbling**********************************//// */


const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const card = document.querySelector('.card');
const container = document.querySelector('.container');


// form.addEventListener('click',function(e) {
//     console.log('form');
//     e.stopPropagation(); //diğer partları durdurmak için
    
// });

// cardBody.addEventListener('click',function(e) {
//     console.log('cardBody');
//     e.stopPropagation();
    
// });

// card.addEventListener('click',function(e) {
//     console.log('card');
//     e.stopPropagation();
    
// });

// container.addEventListener('click',function(e) {
//     console.log('container');
//     e.stopPropagation();
    
// });

//event capturing--dıştan içe



// form.addEventListener('click',function(e) {
//     console.log('form');
//     e.stopPropagation(); //diğer partları durdurmak için
    
// },true);

// cardBody.addEventListener('click',function(e) {
//     console.log('cardBody');
//     e.stopPropagation();
    
// },true);

// card.addEventListener('click',function(e) {
//     console.log('card');
//     e.stopPropagation();
    
// },true);

// container.addEventListener('click',function(e) {
//     console.log('container');
//     e.stopPropagation();

// },true);
    

// const deleteItems = document.querySelectorAll('.fa-times');

// deleteItems.forEach(function(params) {
//     params.addEventListener('click',function (params) {
//         params.target.parentElement.parentElement.remove(); 
//         params.preventDefault();
        
//     });
    
// });

// console.log(deleteItems);

const ul = document.querySelector('ul');

ul.addEventListener('click', function(params) {

    if(params.target.className=== 'fas fa-times'){
        params.target.parentElement.parentElement.remove();
        params.preventDefault();
    }
    
});











//*/*/*/*/******************************************************* */