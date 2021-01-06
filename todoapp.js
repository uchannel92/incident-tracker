const array = []

let input = prompt("Todo: Hit the enter key to continue..")

while(input !== "q" && input !== "quit") {

        input = prompt(`Type the following to continue - 
        quit | view | new | delete | length | first | last `)

    if (input === "view") {
        
        console.log("*****")
        for (let i = 0; i < array.length; i ++) {
            console.log(i, array[i])         
        }
        console.log("*****")

        if (array.length < 1) {
            console.log("There are no items to display..")
        }
    }

    if (input === "new") {
        input = array.push(prompt("Add a new item to array"));
        console.log(`"${array[array.length -1]}" has been added.`)
    }

    // To use splice, the user will prompt the index in the input, the 1 at the end indicates to remove 1 item!
    if (input === "delete") {
        input = array.splice(prompt("Specify the array index you want to delete.."), 1)
        console.log(`"${input}" has been deleted..`)
    }

    // todo length

    if (input === "length") {
        input = array.length
        console.log(`Your list now includes ${array.length} items.`)
    }

    // first todo item

    if (input === "first") {
        input = array[0]
        console.log(`the first item in the array is: ${array[0]}`)
    }

    // last item entered in todo

    if (input === "last") {
        input = array[array.length -1]
        console.log(`"${array[array.length -1]}" is the last item in the array.`)
    }

}
console.log("we have exited..")
