// ToDo empty array

// const todo = [];
// let input = prompt("Type something..")

// while (input === "q") {
//     break;

//     if (input === "add") {
        
//     }
// }

// console.log("App exited..")

// below commands to implement:
// new: (Not implemented)
// list: (Not implemented)
// delete: (Not implemented)
// quit: (Not implemented) `

// while loop
// let input = prompt(`Todo App Options: new, delete, list, quit ${todo}`)

// while(todo) {

//     if (todo === "new") { 
//         prompt(`Add to list: ${todo.push()}`)
//         console.log(todo)      
//         console.log("Add a new todo");
//     } 

    // if (prompt === "delete") {
    //     console.log("delete from todo");
    // }

    // if (prompt === "list") {
    //     console.log("list the todo");
    // }

    // if (prompt() === "quit") {
    //     console.log("Exit the app..");
    // }
// }

// quit function

// ###############

// input = array.push(prompt(`Add new players to array:`));
// input = array.push(prompt(`Add new players to array:`));

// const array = [1]

// asking to prompt 3 times..

// while(array !== 'quit') {
//     array.push(prompt("Add another name"));

//     if (array === "quit") {
//         break;
//     }
 
//  }

// console.log(array)

// Iterating Each item in array...
// for (let i = 0; i < array.length; i++) {
//     console.log(i, array[i])
// }

// Accomplished - adding to array and listing array

// outstanding
// My issue is using the while loop and breaking while loop. Syntax
// implement the quit
// delete
// quit
// list iterarted array on command.

// how to loop and exit
// const exit = "exit";

// let todo = prompt("Todo options. type commands to continue: add|view|delete|exit.");

// let array = []

// while(array !== exit) {
//     todo = prompt(`Repeat: Todo options, press 'exit' to exit.`);

// }
// console.log("You have quit, type anything to exit.")


// how break command works.
for(let i = 10; i > 0; i --) {
    console.log(i)
    if (i === 2) break;
}

// quit function has been implemented...!!

const array = []

let input = prompt("Todo hit enter to continue..")

while(input !== "q") {

        input = prompt("Type the following to continue - view new delete quit")

    if (input === "view") {
        for (let i = 0; i < array.length; i ++) {
            console.log(i, array[i])         
        }
    }

    if (input === "new") {
        input = array.push(prompt("new item to array"));
        console.log(`${array[array.length -1]} has been added.`)
    }

    if (input === "delete") {
        input = array.pop()
        console.log(`${array[array.length -1]} has been deleted.`)
    }
    // work on using splice to delete items !!!
    

    // first todo item
    // last item entered in todo
    // todo length
}
console.log("we have exited..")
