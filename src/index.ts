
// let obj: {
//     name: string,
//     age: number,
//     profession: string,
//     isMarried: boolean,
//     hi: Function
// };
// obj = {
//     name: 'shadhin',
//     age: 30,
//     profession: 'web',
//     isMarried: false,
//     hi: function() {return this.name, this.isMarried}
// }
// console.log(obj.hi);


// obj = [];
// obj.push(22, 'shadhin')


// const myFunc = (a:string, b: string, c?: string) => {
//     console.log(`Hello ${a} ${b} ${c}`);
    
// }
// myFunc('dear', 'Bangladesh','');


// interface User {
//     name: string;
//     id: number;
//     age: number;
//     prof: string;
// }

// let user: User = {
//     name: 'shadhin',
//     id: 1,
//     age: 30,
//     prof: 'web-dev'
// }

// console.log(user);

// const funNum = (num1:number, num2:number) => {
//     console.log(num1 + num2);
// }
// funNum(30, 199);

// let arr: string[];
// arr = ['Shad','key'];
// arr.push('mobile')
// arr.shift()
// arr.pop()
// arr.unshift('hello')


// console.log(arr)


// type Menobj = {
//     name: string;
//     age: number;
//     prof: string
// }

// const user = (men: Menobj) => {
//     console.log(men)
    
// }

// let data = {name: 'shadhin', age: 30, prof: 'web-dev'};
// user(data)

// type obj = {
//     name: string;
//     age: number;
//     isMarried: boolean

// }

// let arr: object[] = [];

// arr.push({name:'shadhin', age: 30});


// console.log(arr);


// class PracticeClass {
//     private name: string;
//     public age: number;
//     readonly profession: string;

//     constructor(n:string, age: number, prof: string){
//         this.name = n;
//         this.age = age;
//         this.profession = prof;
         
//     }
//     fun() {
//         console.log(`Name is: ${this.name} i'am a ${this.profession} and my age is: ${this.age}`);
//     }
// }

// const shadhin = new PracticeClass('Shadhin reza', 30, 'Web-developer');

// shadhin.name = 'Aysha'
// shadhin.age = 50
// shadhin.profession = 'Software developer'
// console.log(shadhin.name);
// console.log(shadhin.age);
// console.log(shadhin.profession);


// type obj = {
//     name: string;
//     prof: string;
//     age: number;
//     isMarried: boolean;
// }


// let arr: obj[] = [];

// arr.push({name: 'shadhin', prof: 'web', age: 30, isMarried: false});
// arr.push({name: 'shadhin', prof: 'web', age: 30, isMarried: false});

// console.log(arr);

// let addfun = <T extends {name:string, age: number}> (obj:T) => {
//     const id = Math.floor(Math.random() * 101);
//     return {...obj, id};
// }

// // const user = addfun({name:'shadhin', age: 30});
// const user = addfun({name: 'shadhin', age: 30,country: 'Bangladesh'})
// console.log(user);













