// const CODE = "WHAM_99";

// let guess = prompt("Enter the secrect code...");
//   while (guess !== CODE) {
//     guess = prompt("Will continue to loop until code is correct...");
//   }
//   console.log("Congrats")

// let count = 1;

// while (count < 200) {
//     count += 1;
//     console.log(count);
//     if (count === 44) {
//         break
//     } else {
//         count ++
//     }
// }


// let names = [
//     ["Joe", "Jack", "Josh", "Jude", "John"],
//     ["Saul", "Peter", "Paul"],
//     ["Jane", "Sara"]
// ];

// //For of loop nested

// for (let row of names) {
//     for (let index of row) {
//         console.log(`${row.length}, ${index}`);
//     }
// }

// for (let i = 0; i < names.length; i += 1) {
        
//         let row = names[i]; // row is to represent each nested array within the names array
//         console.log(`Iteration #: ${i + 1}`)

//         for (let j = 0; j < row.length; j += 1) { // within each nested array, we now iterating from 0 to final index item.
//             console.log(`   ${row[j]}`)
//         }
// }

// // while loops

// const games = ["Football", "Rugby", "tennis", "Formula 1", "MMA", "Basketball", "Snooker"];

// while (games <= games.length) {
//     games += 1;
//     console.log(games);
// }


//For of loop nested

// let tottenham = [
//     ['lloris', 'Hart', 'Gazza'],
//     ['Davies', 'Alderweireld', 'Dier', 'Sanchez', 'Aurier'],
//     ['PEH', 'Winks', 'Ndomble', 'Sissoko', 'GLC'],
//     ['Dele', 'Kane', 'Son', 'Bergwijn'],
// ]

// for (let positions of tottenham){
//     console.log(`Player position:`)
//     for (let names of positions) {
//         console.log(`   ${names}`)
//     }
// }

// const numbers = [1,2,3,4,5,6,7,8,9]; //DON'T CHANGE THIS LINE PLEASE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let squared of numbers) {
//     console.log(Math.pow(squared, 2))
// }