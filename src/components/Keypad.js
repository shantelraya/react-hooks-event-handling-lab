// Code Keypad Component Here
import React from "react";

function Keypad (){
    function keypadInput() {
        console.log("Entering password...")
    }

    return <input type="password" onChange={keypadInput} />
    }

export default Keypad;