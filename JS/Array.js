let arr = [1, 2, 3, 4, 5];

// Using map to create a new array with each element multiplied by 2
let mappedarr = arr.map((item) => item * 2);

// Log mapped array
console.log("Mapped Array:");
for (let num of mappedarr) {
    console.log(num); // 2, 4, 6, 8, 10
}
console.log("---------------"); // Divider

// Log original array using for...of loop
console.log("Original Array (for...of):");
for (let num of arr) {
    console.log(num); // 1, 2, 3, 4, 5
}
console.log("---------------"); // Divider

// Log original array using for...in loop
console.log("Original Array (for...in):");

for (let index in arr) {
    console.log(arr[index]); // 1, 2, 3, 4, 5
}
console.log("---------------"); // Divider

// Filter even numbers from original array
let filteredarr = arr.filter((item) => item % 2 === 0);

// Log filtered array
console.log("Filtered Array (Even Numbers):");
filteredarr.forEach((item) => {
    console.log(item); // 2, 4
});
console.log("---------------"); // Divider

const students = [
    {name:'pradeep', marks:80},
    {name:'shet', marks:41},
    {name:'rajesh', marks:60}
];


const filteredStudents = students.filter((st) => {
    return st.marks > 50
}).map((st) => ({...st, grade:'Pass',remark:'Excellent'}));

for (let num of filteredStudents) {
    console.log('items=' + num.name, num.marks, num.grade, num.remark);
}


console.log("---------------");

