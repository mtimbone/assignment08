//STEP 1

let favorites = ["Office Space", "Tropic Thunder", "Reservoir Dogs", "Pulp Fiction", "Hearbreak Kid"]; {
    console.log(favorites[1]);
}
//STEP 2  Constructor Function

let movies2 = new Array(5);
movies2[0] = "Office Space"
movies2[1] = "Tropic Thunder"
movies2[2] = "Reservoir Dogs"
movies2[3] = "Pulp Fiction"
movies2[4] = "Heartbreak Kid"
console.log(movies2[0]);


//STEP 3

let movies3 = new Array(5);
movies3[0] = "Office Space"
movies3[1] = "Tropic Thunder"
movies3[2] = "Wall Street"
movies3[3] = "Reservoir Dogs"
movies3[4] = "Pulp Fiction"
movies3[5] = "Heartbreak Kid"
console.log(movies3.length);


//STEP 4

let movies4 = ["Office Space", "Tropic Thunder", "Reservoir Dogs", "Pulp Fiction", "Hearbreak Kid"];
delete movies4[0]
console.log(movies4);

//STEP 5   ES 5  For In Loop

let movies5 = ["Office Space", "Tropic Thunder", "Reservoir Dogs", "Pulp Fiction", "Wall Street", "Top Gun", "Hangover"]; 

for (let movie in movies5) {
     console.log (`${movies5[movie]}`);
 }

 
//STEP 6    the FOR / OF Loop

let movies = ["Office Space", "Tropic Thunder", "Reservoir Dogs", "Pulp Fiction", "Hearbreak Kid", "Top Gun", "Hangover"]; 

for (let movie of movies) {
     console.log(movie);
 }

//STEP 7   

let movies7 = ["Office Space", "Tropic Thunder", "Reservoir Dogs", "Pulp Fiction", "Hearbreak Kid", "Top Gun", "Hangover"]; 

 console.log(movies7.sort());


//STEP 8

let mostFavMovies = ["Office Space", "Tropic Thunder", "Reservoir Dogs", ];
let leastFavMovies = ["Waterworld", "Dune", "Hackers"];
let a = [`Movies I Like: 

`]
let b = [`

Movies I regret watching:

`]


a.forEach((item) => {

    console.log(`${item}`);

});

mostFavMovies.forEach((item) => {

    console.log(`${item}`);

});

b.forEach((item) => {

    console.log(`${item}`);

});

leastFavMovies.forEach((item) => {
    console.log(`${item}`);
});


//STEP 9

let mostFavMovies9 = ["Office Space", "Tropic Thunder", "Reservoir Dogs",]; 
let leastFavMovies9 = ["Waterworld", "Dune", "Hackers"];
let movies9 = mostFavMovies.concat(leastFavMovies)
console.log(movies9.reverse());



//STEP 10

let mostFavMovies10 = ["Office Space", "Tropic Thunder", "Reservoir Dogs",]; 
console.log(mostFavMovies10.slice(2));


//STEP 11

let mostFavMovies11 = ["Office Space", "Tropic Thunder", "Reservoir Dogs",]; 
console.log(mostFavMovies11.slice(0,1));



//STEP 12    Slice and Splice.

let leastFavMovies12 = ["Waterworld", "Dune", "Hackers", "RoboCop"];

console.log(leastFavMovies12.splice(1));
leastFavMovies12.splice(1, 2, "Office Space", "Wall Street")
console.log(leastFavMovies12);


//STEP 13

let movies13 = [["Office Space", 1], ["Tropic Thunder", 2], ["Reservoir Dogs", 3], ["Pulp Fiction", 4], ["Hearbreak Kid", 5]];

movies13.filter((item) => {
	console.log(`${item[0]}`);
});



//STEP 14


let employees = ["Zak", "Jessica", "Mark", "Fred", "Sally"];
let i = [`Employees:

`];

i.forEach((item) => {
       console.log(`${item}`);
    
    });

employees.forEach((item) => {
       console.log(`${item}`);
    
    });



//STEP 15 Filter

function filter_array_values(arr) {
  arr = arr.filter(isEligible);
  return arr;
}

function isEligible(value) {
  if(value !== false || value !== null || value !== 0 || value !== "") {
    return value;
  }
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


//STEP 16  Get random number


let num16 = [1, 5, 7, 23, 4, 27, 9, 81, 30, 55, 124, 172, 25];

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
console.log(random_item(num16));


//STEP 17  Write a javaScript Function to get the largest number from a numeric array


let num = [1, 5, 7, 23, 4, 27, 9, 81, 30, 55, 124, 172, 25];
console.log(Math.max(...num));

//or

let num17 = [1, 5, 7, 23, 4, 27, 9, 81, 30, 55, 124, 172, 25];
let max = Math.max(...num17);
console.log(max);


