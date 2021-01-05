const footballClubs = ["arsenal", "tottenham", "liverpool", "manchester"]

// footballClubs.splice(2,1)


let input = prompt("Type view or delete")

if (input === "view") {
    console.log(footballClubs)
}

if (input === "delete") {
    footballClubs.splice(prompt("Enter the index you want to delete"))
    console.log(`${footballClubs.splice()} has been deleted..`)
}
console.log(footballClubs)