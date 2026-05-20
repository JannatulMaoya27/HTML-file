let planets = [ "Mercury", "Venus", "Earth"];
planets.push("Mars");
console.log(planets);

planets.pop();
console.log(planets);

planets.unshift("pluto");
console.log(planets);

planets.shift();
console.log(planets);

let numbers = [5.31];
console.log(Math.round(numbers));
console.log(Math.floor(numbers));
console.log(Math.ceil(numbers));
console.log(Math.random()*5);

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[0][2]);
console.log(matrix[1][1]);
console.log(matrix[2][0]);

function step3() {
    console.log("Step 3");
}

function step2() {
    console.log("Step 2");
    step3();
    console.log("again step 2");
    
}

function step1() {
    console.log("Step 1");
    step2();
    console.log("again step 1");
    
}

step1();
