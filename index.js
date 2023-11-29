// admin sets doorCode
    // use const
    // change to function once login function is added
// door stays locked
    // 
// guest hits unlock icon on door pad
    // display changes to 0-9 numeric keypad
    // allows user to input code    

// guest enters correct door code to unlock door for a delayed time
// guest enters wrong code

const doorCode = 5055;
let isLocked = true;
let display = "home";

// user presses unlock icon on display numpad is displayed for user input.
function numDisplay () {
    display = "numpad";
}


/**
 * function: keypadInput
 * 
 * description: runs numDisplay function to show 0 - 9 numeric keypad on display. Takes the users prompt and assigns it variable.
 * 
 * @returns userCode
 */
function keypadInput() {
    let userCode = prompt("Enter Door Code:");
    return userCode;
}

// unlock door function
// check if userCode === doorCode then sets isLocked to false.

function unlockDoor(userCode, doorCode) {
    if(userCode === doorCode) {
        isLocked = false;
        // get curent time assign it to open time
        // add + delay time in seconds assign it to lock time
        // when current time is lock time lock door
    }
}

console.log(isLocked);