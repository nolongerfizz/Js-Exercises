// Greater of three numbers
// Ask for 3 munbers and return the greatest 

// Set prompt
const prompt = require("prompt-sync") ();

function main() {   

    // Initialize a empty list to store data
    let numbers = [];

    // Ask for numbers
    while (true) {

        // Append data to list
        numbers.push(parseInt(prompt("Enter a number: ")))

        // Ask if continue
        let shouldContinue = prompt("Do you want to continue? (Yes/No): ").toLowerCase();

        if (shouldContinue == "no" || shouldContinue == "n") 
        {
            break
        } 
        else 
        {
            continue
        }
                }

    // Store greater number
    console.log(greatestNumber(numbers))


function greatestNumber(number) {
    // Store graters number
    n = 0

    // Itarate over list
     for (let i = 0; i < number.length; i++) {
        if (number[i] > n) {
            n = number[i]
        }
    }
    return n

}

}
main()