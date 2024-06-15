// // let's get start new journey OOP ;

// // we create object two way 
// // const Obj = {};
// // const Obj1 = {};
// // console.log(Obj);
// // console.log(Obj1);

// const Obj = {
//    key: 'value',
//    name: 'jobayer',
//    age: 19,
//    email: 'jobayerjoban@gamil.com',
//    path: function () {
//       console.log(this.name, this.age, this.email, this.parentsName);

//    }
// };
// Obj.parentsName = 'abull';
// Obj.path();// this is method;

// // how make to method 
// // method stay in Object.
// // and function stay alone ;
// // but they are task in same;
// //1st oop write


// console.log(Obj);
// // I am very excited because I learn new loop in javascript her name is for in loop;
// const Objct = {
//    name: 'Jobayer',
//    age: 19,
//    email: 'jobayerjoban@gamil.com',
//    path: function (){
//       console.log('My name is ' + this.name + 'My old is ' + this.age + 'My email is ' + this.email + 'OuterName is ' + this.OuterName);

//    }
// }
// console.log(Objct);
// Objct.OuterName = 'Joban';
// Objct.path();

// for(let number in Objct){ 
//    console.log(number + ' = ' + Objct[number]);
// }



// const Store = {
//    name: 'Jobayer',
//    age: 19,
//    email: 'jobayerjoban@gamil.com',
//    path: function(){
//       console.log('hello' + this.email);
//    }
// };
// console.log(Store);
// Store.innerName = 'Joban';
// Store.outAge = 20;
// Store.path();
// for(let value in Store){
//    console.log(value + ' = ' + Store[value]);
// }

// Make a class in javascript

// const name = {
//     name: 'Jobayer',
   
// };
// const email = {
//     email: 'jobayrjoban@gamil.com',

// };



// function Person(name, email){

//     const obj = {
//        name: name,
//        email: email,
//     }

//     this.name = name;
//     this.email = email;
//     this.path = function (){
//         console.log(this.name + this.email);
//     }


// }
// // const Obj = new Person('hello', 'joban');
// // console.log(Obj);
// // Obj.path()

// const Obj = new Person('Jobayer ', 'jobayerjoban@gamil.com');
// const person1 = new Person('joban', ' joban@gamil.com');
// const person2 = new Person('what', 'why@gamil.com');
// const person3 = new Person('hello', 'hello@gmail.com');
// // console.log(Obj, person1, person2, person3);
// const allObj = [Obj, person1, person2, person3];
// // for(let value in allObj){
// //     console.log(a);
// // }
// // for(let i = 0; i < allObj.length; i++){
// //    console.log(allObj[i]);
// // }
// // allObj.forEach(function(item){

// //     console.log(item);
// // })

// // allObj.map(function(item){
// //     console.log(item);
// // });
// // allObj.filter(function(item){
// //     console.log(item);
// // });

// for(let outer in allObj){
//     console.log('hello ' + allObj.outer + ',');
// };

// one of the loved keywo
// const Obj = {
//     name: 'Jobayer',
//     age: 19,
//     email: 'jobayerjoban@gamil.com',
//     path: function () {
//         console.log(this.age);
//     }
// };
// new keywored is magic()

// function outer() {
//     function inner(){
//         console.log(this);
//         console.log('I am a inner function in the javascript');
//     }
//      inner();
// };
// outer();

// const Obj = {
//     name: 'Jobayer',
//     age: 19,
//     email: 'jobayerjoban@gamil.com',
//     anotherObj: {
//         name: 'Joban',
//         value: function (){
//             console.log(this.name);
//         }
//     }
// };

// Obj.anotherObj.value.call(Obj);

// const Obj1 = {
//     name: 'Jobayer',
//     age: 10,
//     email: 'jobayerjoban@gamil.com',
//     anotherObj: {
//         name: 'joban',
//         email: 'jobayerjoban@gamil.com',
//         age: 19,

//         value: function (){
//             console.log('value ' + this.age);

//         }.call(Obj1)
        
// //     }
// function add(num) {
 
//     return this.value + num;
    
// };

// const Obj1 = {
//     value: 20,

// };

// const result = add.bind(Obj1);
// const total = result(320);
// console.log(total);

// const Person = {

//     name: 'Jobayer',
//     age: 19,
//     email: 'jobayerjoban@gamil.com',

//     path: function(){
//         // console.log(this.name);

//         setTimeout(function(){
//             console.log(this.name + ' hello how are you?');
//         }.bind(this), 2000);
//     }
// };
// console.log(Person);
// Person.path();
// function hello() {
//     this.name = 'jobayer';
// };
//  const j = new hello();
//  console.log(j);


// const Person2 = {

//     name: 'Joban',
//     age: 18,
//     email: 'joban@gmai.com',
//     another: { // leading parent follow kore;
//         name: 'Jobayer',

//         print: function(value){

//             // console.log(this.name);
//             setTimeout(function(){

//                 console.log(this.name + ' How are you?' + value);
//             }.bind(Person2), 2000)
//         }
//     }
// }
// console.log(Person2);
// Person2.another.print('hello');

// function Person(name, email){
//    this.name = name;
//    this.email = email;
// };
// const p1 = new Person('hello ', 'how are');
// const p2 = new Person('how are  you?', 'than');
// console.log(p2);
// console.log(p1);


// const Obj = {};
// Obj.name = 'Jobayer';
// Obj.age = 19;
// Obj.email = 'jobayerjoban@gmail.com';
// Obj.address = 'Shahjadpur';

// Obj.print = function (){
//     console.log(this.name);
// };
// console.log(Obj);
// Obj.print();


// // behind the sencse

// const Obj1 = {
//     name: 'Jobayer',
//     age: 19,
//     email: 'jobayer@gmail.com',
//     address: 'Shahjadpur',
//     print: function(){  // this is real method of the javascript.And the behind sence of method;
                        
//         console.log(this.name);
//     }
// };
// console.log(Obj1);
// Obj1.print();

// // suppose 

// Obj.print() // this the fronet end image of method;




// const Student1 = {};
// Obj.name = 'Jobayer';
// Obj.age = 19;
// Obj.email = 'jobayerjoban@gmail.com';
// Obj.address = 'Shahjadpur';

// Obj.print = function(){
//     console.log(this.name);
// };

// this system can  maintain very tref,



// function Students(name, age, email, address){ // in this time,  it is a simple Object constructor;

//     const hello = Object.create(Students.prototype); 
//      // this value is main value of Obj;

//     hello.name = name;
//     hello.age = age;
//     hello.email = email;
//     hello.address = address;
 

//     hello.prototype = {
//         sister: 'bone',
//     }
//     // Obj.info = userInfo.print;
//     // Obj.info2 = userInfo.path;
//     // Obj.allInfo = userInfo.allInfo;
    

//     return hello;


//     // top behind the sence
//     /* const hello = {
//         name:  'Jobayer,
//         age: 19,
//         email: 'jobayerjoban@gmail.com',
//         address: 'Shahjadpur',
//         print:  function(){
//             console.log('Hello my name is ' + this.name);
//         }
//     }
//      */

// }
// Students.prototype.sisterName = 'moli';
// const Nprototype = {
    
//    path: function () { 

//         console.log(`Hello, my name is ${this.name}`);
//     },
//     path(){
//         console.log('I am ' + this.age + ' years old');
//     },
//     allInfo(){
//         console.log('My name is ' + this.name + ' My old is ' + this.age + ' email is ' + this.email + ' address is ' + this.address + ' And of the end');
//     }
    
    
// }



// const Jobayer = Students('Jobayer', 19, 'jobayerjoban@gmail.com', 'Shahzadpur');
// const value1 = allStudents('Joban', 18, 'joban@gmail.com', 'Sirajgong');

// console.log(Jobayer);
// console.log(value1);




// value.info();
// value1.info();
// value1.info2();
// value.info2();



// const parents = {

//  name: 'Jobayer',
//  age: 19,
//  email: 'jobayerjoban@gamil.com',

// }

// const hello = Object.create(parents);

// // this value is main  value of hello Object;

// hello.name = 'Jakaria',
// hello.email = 'jakaria@gmail.com',
// hello.age = 20,

// console.log(hello);


// prototype is a function but it focus Object;

// create a simple function;

// const Obj1 = {
//     name: 'Jobayer',
//     age: 19,
//     email: 'jobayerjoban@gmail.com',
//     address: 'Shahzadpur',
//     print: function(){
//         console.log(this.name + this.age + this.email);

//     }
// };
// console.log(Obj1);
// Obj1.print();

// // create obj another way;

// const  Obj2 = {}
// Obj2.name = 'Joban';
// Obj2.age = 18;
// Obj2.email = 'joban@gmail.com';
// Obj2.address = 'Shahzadpur';
// Obj2.print = function(){
//     console.log('hello Jobayer ' + this.name + ' How are? ' + this.age);
// };
// console.log(Obj2);
// Obj2.print();


// function constructor 

// function Person(){
//     const Obj3 = {}
//     Obj3.name = 'Joker';
//     Obj3.age = 19;
//     Obj3.email = 'jobayerjoban@gmail.com';
//     Obj3.print = function() {
//         return `hello how are you all ${this.name} hello i am fine`;

//     }
//     return Obj3;
// }
// const result = Person();
// console.log(result);
// // result.print();

// const parents  = {  // this is a parents;
//     value: 'joban',
//     email: 'jobayerjoban@gmail.com',

// }

// const child = Object.create(parents);
// child.name = 'hello';
// child.age = 19;
// console.log(child);
// console.log(child.email);
// const infoS = {
//     print () {
//         return 'Hello ' + this.name + 'How are you? ';
//     }

  
// }


// function Students(name, age, email){

// //  const student = Object.create(infoS) 
//  this.name = name;
//  this.age = age,
// this.email = email;
// //  student.print = infoS.print;
// //  student.path = infoS.path;

// //  return student;
// this.prototype = {
//     name: 'joab',
// }

 
// }

// Students.prototype.sister = 'himel';
// const result = new Students('Jobayer', 19, 'jobayerjoban@gmail.com');
// console.log(result);

// console.log(Students);

// Call , Bind , Apply method;

// Bind 
//  const name = "joban";

// function  binded(name, age){

//     console.log('Hello Jobayer Joban ' + this.name + this.age);
// };



// const a = {
//     name: 'Jobayer',
//     age: 19,
// }
// const b = {
//     name: 'Joban',
//     age: 18,
// };


// const result = binded.bind(b);
// result();


// function person(value, age){
//     console.log(this.name  + "hello " + value + age );

// };

// const g = {
//     name: 'Jobayer',
//     age: 19,

// }
// const person1 = person.bind(g, 19, 38);
// person1();

// const Obj = {

//     name: "Jobayer",
//     age: 19,
//     email: "jobayerjoban@gmail.com",
//     another: {
//         name: "jobayer",

//         value: function(){

//             console.log(this.name);
//         }

//     }
// }
// console.log(Obj);

// const person3 = {
//     name: 'Joban',
//     age: 19,
//     email: 'jobayerjoban@gmail.com',
//     another: {
//         name: 'hello',
//         value:  function(){

//             console.log(this.name);
//         }
//     }
// }
// console.log(person3);
//  person3.another.value.apply(person3);


//  function person6(name, value){
//     return name + value + this.age;
//  }
//  const h = {

//     name: 'Jaker',
//     age: 17,
// }
// const add = person6.bind(h, 2, 3);
// console.log(add());


// const Obj5 = {
//     name: 'OBj',
//     age: 9,
//     email: 'OBj@gmail.com',
//     value:  function(){

//         console.log('hello ' + this.age);
//     }
// }
// console.log(Obj5);
// for(props in Obj5){
//     console.log('Props: ' + props  + ' value: ' + Obj5[props]);
// };


// Practice inheretence;

// function Person(name, age, email){

//     this.name = name;
//     this.age = age;
//     this.email = email;
// }
// const total = new Person('Jobayer', 19, 'jobayerjoban@gmail.com');
// console.log(total)

// function Teacher(names, age, email, job){
//     Person.call(this, names, age, email);
//     this.job = job;
// }
// const pesha = new Teacher(names, age, email, 'tech');
// console.log(pesha);

//function constructor

// function Person(name, age, job){

//     this.name = name;
//     this.age = age;
//     this.job = job;

// }
// const value = new Person('Jobayer', 19, 'teacher');
// console.log(value);

// // make a create another function constructor;

// function Teacher(name, age, job, sub){

//     Person.apply(this, [name, age, job]);
//     this.sub = sub;
// }

// const final = new Teacher('hello', 19, 'teacher', 'CSE');
// console.log(final);


// function People(name, age, job){

//     this.name = name;
//     this.age = age;
//     this.job = job;

// }
// const newObj = new People('Joban', 19, 'student');
// console.log(newObj);


// function teacher1(name, age, job, sub){

//     People.apply(this, [name, age, job]);
//     this.sub = sub;
// }
// const vlu = new People('John', 83, 'teacher', 'English');
// console.log(vlu);
// console.log(vlu.name);
// console.log(vlu.age);


// Prototype based Inheritance;
// function Person(name, age, job){

//     this.name = name; 
//     this.age = age;
//     this.job = job;

//     this.prototype = function(){

//         console.log(this.name);
//     }
    
// }
// Person.prototype.sub = 'CSE';
// Person.prototype.value = 'national';
// Person.prototype = {
//     name: 'vale',
//     age :99,
//     village: 'chithulia',

// }


// const newObj = new Person('Jobayer', 19, 'Teacher');
// console.log(newObj);

// newObj.prototype();

// const arr = [1, 2, 3, 4, 5, 7, 8, 9, 19];
// arr.push = 3;

// console.log(arr);
// console.dir(arr);

// const  Obj = {};
// Obj.name = 'Jobeyer';

// console.dir(Obj);

// New Topic __proto vs Prototype;
// function Person(name, age){

//     this.name = name;
//     this.age = age;

// }
// const value = new Person('Jobayer', 19);
// console.log(value);


// class Person2{ // this means Person prototype;

//     constructor(name){
//         this.name = name;

//     }
//     hello(age){

//         console.log(this.age);

//     }
// };
// const Obj = new Person2('Jobayer'); // this means __proto__

// console.log(Obj);

// const Obj1 = new Person2(19);
// console.log(Obj1);


// class hello{
//     constructor(name, value){
//         this.name = name;
//         this.value = value;

//     }
//     job(name, value, age){

//         constructor.apply(this, [name, value]);
//         this.age = age;
            
    
//     }
// };
// const value1 = new hello('Jobayer', 0);
// console.log(value1);
// const value2 = new hello('Joban', 1, 19);
// console.log(value2);


// // We make a class 

// class Names{
//     constructor(name, age, value){

//         this.name = name;
//         this.age = age;
//         this.value = value;

//     };
//     constructor1(name, age, value, job){

//         constructor.call(this, name, age, value);
//         this.job = job;

//     }
//     constructor2(name, age, value, job, sub){

//        constructor1.call(this, name, age, value, job);
//        this.sub = sub;

//     }
//     constructor3(name, age, value, job, sub, path){

//         constructor2.call(this, name, age, value, job, sub);
//         this.path = path;

//     }
// }
// const value0 = new  Names('Jobayer', 19, 56);
// const value9 = new  Names('Joban', 19, 4, 'Teacher');
// const value8 = new Names('John', 56, 3, 'proffecher' , 'Holder');
// const value7 = new Names('Jon', 19, 3,'Privete','cse', 'Hero');
// console.log(value0);
// console.log(value9);
// console.log(value8);
// console.log(value7);


// Object oriented motamuti Practice sesh;
// class Names {

//     constructor(name, age, value){
//         this.name;
//         this.age;
//         this.value;
//     }
// }
// function Constructor(name, age, value){
//     const Obj = {};
//     Obj.name = name;
//     Obj.age = age;
//     Obj.value = value;

// }
// const value =  Constructor('Jobayer', 19, 'five');
// console.log(value);

//Disadvantage of procedural programming ;

// Procedural programming is good.But there is some serious issues, when we create   software real world. 

// Execute stack;

//In these code firstly all code pass by global execution context;
// then  when code run then code  go to execution context;

let name = 'Jobayer';

function first(){

    console.log('This is a first item');

    second();
}
function second(){ // execution context two;

    console.log('this is a second item');

    third();

}

function third(){ //execution context three;

    console.log('This is a third item');

}

first(); // execution context 1, 


//  we are find out five execution mode in those code , And  this concept of  execution stack;

const a = 10;
