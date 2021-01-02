// const CODE = "WHAM_99";

// let guess = prompt("Enter the secrect code...");
//   while (guess !== CODE) {
//     guess = prompt("Will continue to loop until code is correct...");
//   }
//   console.log("Congrats")

let count = 1;

while (count < 200) {
    count += 1;
    console.log(count);
}

let names = [
    ["Joe", "Jack", "Josh", "Jude", "John"],
    ["Saul", "Peter", "Paul"],
    ["Jane", "Sara"]
];

for (let i = 0; i < names.length; i += 1) {
        
        let row = names[i]; // row is to represent each nested array within the names array
        console.log(`Iteration #: ${i + 1}`)

        for (let j = 0; j < row.length; j += 1) { // within each nested array, we now iterating from 0 to final index item.
            console.log(`   ${row[j]}`)
        }
}

// while loops

const games = ["Football", "Rugby", "tennis", "Formula 1", "MMA", "Basketball", "Snooker"];

while (games <= games.length) {
    console.log(games);
    games += 1;
}