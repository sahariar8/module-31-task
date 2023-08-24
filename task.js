//Task-1
const odd = [1,3,5,7,9,];
const even = odd.map(p => p+1);
console.log(even);
//hoye gase.....Yeah............

//Task-2

const number = [33,50,79,79,90,101,30];
let newNumber = [];
for (const num of number) {
        if(num % 10 === 0){
            newNumber.push(num);
        }
}
console.log(newNumber);

//using find method

const get = number.filter( p => p % 10 === 0)
console.log(get);

//Alhamdulillah

const find = number.find( p => p % 10 === 0);
console.log(find);

//Task - 3

const instructor = [
    {name:"sahariar",age:26,position:"senior"},
    {name:"Alam",age:28,position:"Junior"},
    {name:"sahariar",age:25,position:"senior"},
];

// const search = instructor.forEach( p => {
//     if(p.position === "senior"){
//         console.log(p);
//     }
// });

//Alhamdulillah !! hoye gase...

//normal way...

for (const p of instructor){
    if(p.position === "senior"){
        console.log(p);
    }
}

//task-4(normal way)

const people = [
    {name:"sahariar",age:26,position:"senior"},
    {name:"Alam",age:28,position:"Junior"},
    {name:"sahariar",age:26,position:"senior"},
]
let age = 0;
for (const p of people){
     age += p.age;
}
// console.log(age);

//Alhamdulillah done!!

//using Reduce

const sum = people.reduce((x,y)=>x+y.age,0);
console.log(sum);
  
//Alhamdulah done


//distructuring...

const {name,position} = people;
// console.log(name);
function min(nums) { 
    return Math.min(nums)
 }
 const cube=x=> x*x*x; 
 console.log(cube(2))
 const [a, b] = [1,2,3,4,45,5]; 
 console.log(a+b);

 const {x, y, z} = {x: 1, y1: 2, z: 3};
 console.log(y)
 const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);

const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];
const newfr =friends.find(friend=>friend.length==5)
console.log(newfr)
const product = {name: 'Laptop', model:'Yoga 3', price:49000, dusk: '512SSD'}
const {price} = product;
console.log(price)