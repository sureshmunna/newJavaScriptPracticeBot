// const s = 'Hello World!, hi';

// console.log(s.substring(0,5).toUpperCase());
// console.log(s.split());
// console.log(s.split(', '));

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// const fruits =['apple' , 'orrange' , 'pears'];
// console.log(fruits[1]);
// fruits[3]='grapes'
// // and we can do push 

// fruits.push('mangos');
// fruits.unshift('strawberry');
// console.log(Array.isArray(fruits));//true
// console.log(Array.isArray('hello'));//false
// console.log(fruits.indexOf('orrange'));


// const person ={
//     firstname : 'john',
//     lastname :'Doe',
//     age:30,
//     hobbies : ['music','movies', 'sports'],
//     address : {
//         street : '50 main st',
//         city : 'Boston',
//         state : 'MA'
//     }
// }
// console.log(person );
// console.log(person.firstname );

// person.email = 'john@gmail.com'

// console.log(person);

// const todos =[
//     {
//         id:1,
//         text:'Take Out Trash',
//         isCompleted : true
//     },
//     {
//         id:2,
//         text:'Meeting with boss',
//         isCompleted : true
//     },
//     {
//         id:3,
//         text:'Dentist appt',
//         isCompleted : true
//     }
// ];
// console.log(todos);

// const todoJSON= JSON.stringify(todos);
// console.log(todoJSON);

// //for 
// for (let i = 0; i <= 10; i++) {
//     console.log(`for loop Number : ${i}`);
// }


// for (let i=0 ; i < todos.length; i++){
//     console.log(todos[i].text);
// }

// //another way 
// for (let todo of todos){
//     console.log(todo.text);
// }

// todos.forEach(function (todo) {
//     console.log(todo.text);
// })

// const todotext = todos.map(function (todo){
//     return todo.text;
// })

// console.log(todotext);

// const todoCompleted = todos.filter(function (todo){
//     return todo.isCompleted === true;
// })

// console.log(todoCompleted);

// const todotext1 = todos.filter(function (todo){
//     return todo.isCompleted === true;
// }).map(function (todo){
//     return todo.text;
// })
// console.log(todotext1);

// //////////////////////////////////////////

// // function addNumbers(num1,num2){
// //     console.log(num1+num2);//10
// // }
// //addNumbers(5,5)

// // function addNumbers(num1 =1,num2=1){
// //     console.log(num1+num2);//2
// // }

// function addNumbers(num1 =1,num2=1){
//     console.log(num1+num2);//10
// }

// addNumbers(5,5)

// //we can use arrow function 

// // const addnums = (num1 =1 , num2=1)=> {
// //     return num1 + num2;
// // }

// // console.log(addnums(5,5));

// // const addnums = (num1 =1 , num2=1)=> {
// //     console.log(num1 + num2) ;
// // }

// // addnums(5,5);


// // const addnums = (num1 =1 , num2=1)=> num1+ num2; // this is one line way of doing

// // console.log(addnums(5,4));

// const addnums = (num1)=> num1+ 5; // this is one line way of doing

// console.log(addnums(5));

// //its like
// todos.forEach((todo) => console.log(todo));


// //constructor function 
// // function Person(firstname, lastname, dob){
// //     this.firstname = firstname ;
// //     this.lastname = lastname ;
// //     // this.dob = dob;
// //     this.dob = new Date(dob);
// //     this.getBirthYear = function(){
// //         return this.dob.getFullYear();
// //     }
// // }

// // const person1 = new Person('John' , 'Doe' , '4-3-1980');
// // // console.log(person1);
// // console.log(person1.dob.getFullYear());

// // console.log(person1.dob.getBirthYear());

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //constructor function 
// function Person(firstname, lastname, dob){
//     this.firstname = firstname ;
//     this.lastname = lastname ;
//     // this.dob = dob;
//     this.dob = new Date(dob);
//     // this.getBirthYear = function(){
//     //     return this.dob.getFullYear();
//     // }
// }

// const person1 = new Person('John' , 'Doe' , '4-3-1980');
// // console.log(person1);
// console.log(person1.dob.getFullYear());

// console.log(person1.dob.getBirthYear());

// // we can also do with prototypes

// Person.prototype.getBirthYear = function (){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function (){
//     return `${this.firstname} ${this.lastname}`;
// }


// class Person {
//     constructor(firstname, lastname, dob){
//         this.firstname = firstname ;
//         this.lastname = lastname ;
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }
//     getFullName(){
//     return `${this.firstname} ${this.lastname}`;
//     }
// }

// //select element  
// // console.log(document.getElementById('my-form'));
// // console.log(document.querySelector('h1'));

// // //multiselector 
// // console.log(document.querySelectorAll('.item'));
// // console.log(document.getElementsByClassName('.item'));

// // const items = document.querySelectorAll('.item');

// // items.forEach((item) => console.log(item));

// // const ul= document.querySelector('.items');

// // ul.firstElementChild.textContent = 'Hello' ;
// // ul.children[1].innerHTML = 'brand';
// // ul.lastElementChild.innerHTML = <h1>Hello</h1>

// // const btn =  document.querySelector('.btn');
// // btn.style.background = 'red';

// const btn =  document.querySelector('.btn');

// btn.addEventListener('click' , (e) =>{
//     e.preventDefault();
//     document.querySelector('my-form').style.background='#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.item').lastElementChild.innerHTML = '<h1>Hello</h1>';

// });

// const myForm= document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userlist =document.querySelector('#users');

// myForm.addEventListener('submit' , onSubmit);

// function onSubmit(e){
//     e.preventDefault();

//     if(nameInput.value === '' || emailInput.value === ''){
//         msg.classList.add('error');
//         msg.innerHTML = 'Please Enter all fields';

//         setTimeout(() => msg.remove(), 3000);
//     }else{ 
//        // console.log('success');
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

//         userlist.appendChild(li);

//         //clearFields 

//         nameInput.value = '';
//         emailInput.value = '';
        
//     }
// }


 const numberss = [1,2,3,4,5,6,7,8,9,10,11,12];

// const evenNumbers= numberss.filter( function (number){
//     return number % 2 === 0;
// });

// // short version 

// const evennum = numberss.filter((number) => number % 2 ===0);

// //same with forEach

// const evnum = [] ;

// numberss.forEach((number) => {
//     if (number % 2 === 0) {
//         evnum.push(number);
//     }
// })
// console.log(evnum);

// const companies = [
//     {name : 'Company One' , category: 'Finance' , start : 1981 , end : 2004},
//     {name : 'Company Two' , category: 'Retail' , start : 1981 , end : 2004},
//     {name : 'Company three' , category: 'Auto' , start : 1981 , end : 2004},
//     {name : 'Company Four' , category: 'technology' , start : 1981 , end : 2004},
//     {name : 'Company Five' , category: 'Retail' , start : 1981 , end : 2004},
// ];

// const companynames = companies.map((company)=> console.log(company.name));

// console.log(companynames)

// const Comapnyinfo = companies.map((company)=> {
//     return {
//         name : company.name,
//         category : company.category
//     };
// });

// console.log(Comapnyinfo);

// const companyYears = companies.map((company) => {
//     return {
//         name : company.name,
//         yearsOfEstablished : company.end - company.start +  'years';
//     }
// })

// console.log(companyYears);

// chain map methods 

// const squareAndDouble = numberss
// .map((number)=>(Math.sqrt(number)))
// .map((sqrt) => sqrt *2);

// console.log(squareAndDouble);

// // another way

// const squareAndDouble2 = numberss.map( function (number){
//     return Math.sqrt(number);
// }).map(function (sqrt) {
//     return sqrt * 2; 
// });

// console.log(squareAndDouble2);

//chaining different methods 

const evendoble = numberss
.filter((number) => number %  2 === 0)
.map((number) => number *2);

console.log(evendoble);

const sum = numberss.reduce(function (accumulator, currentValue ){
    return accumulator + currentValue;
},10);
console.log(sum);

const sum1 = numberss.reduce((acc,curv) => acc + curv ,5);

console.log(sum1);

// using a for loop
const sum2 = ()=> {
    let acc =0;
    for (const num of numberss){
        acc += num;
    }
    return acc;
}

console.log(sum2());

//Event Listeners

const clearbtn = document.querySelector('#clear');


function onClear(){
    const itemlist = document.querySelector('ul');
    const items = itemlist.querySelector('li');
    itemlist.innerHTML = '';
    items.forEach((item) => item.remove()); 
}

//java Script eventListeners

clearbtn.onclick= function (){
    alert('clear items')
}

clearbtn.onclick = function (){
    console.log('clear Items');
}

// onclick only perform one but AddEventListener will perform many 

clearbtn.addEventListener('click' , () => alert('clear items'));

clearbtn.addEventListener('click' , () => console.log('clear items'));

clearbtn.addEventListener('click' , onClear);



//event bubbling if we have events throuh dom tree the bublling will comes from buttom to document to
//prevent it we use e.stopproPagation(); 
//its just bubbles up if you have another click event on a parent thats going to fire off unless you stop propagation 
// now you should only call stopPropagation if you have a reason for it for instance if we actually had a parent and child with the same event 
// listener  and dont just call it for the hell of it 
// and there is a method call stopImmediatePropagation and this is used if you have multiple handlers on a single event and 
// you want to stop the event for all of them 

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');

const form = document.querySelector('form');

button.addEventListener('click', (e) =>{
    alert("Button was clicked");
    e.stopPropagation(); // if we cant give this every click function will execute bcz of event bubbling
})
div.addEventListener('click', (e) =>{
    alert("Button was clicked");
})

form.addEventListener('click', (e) =>{
    alert("Button was clicked");
})

document.body.addEventListener('click', (e) =>{
    alert("Button was clicked");
})

/// for of loop we use it iterate through arrays , strings , and maps

/// for in loop is allow you to loop through objects bcz it will give like key value pairs
