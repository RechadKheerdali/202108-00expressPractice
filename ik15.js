/**
 * nodejs readline module
 */
const iKreadline = require('readline');

const iKrl = iKreadline.createInterface({
    input: process.stdin,
    output: process.stdout
});

iKrl.question('iK how are you \n', iKuserInputP => {
    /*commented out because it will appear twice in the command line */
    // console.log( iKuserInputP )

    //display message to user after user input to the command line
    iKrl.setPrompt('iK Thank you for your answer')
    iKrl.prompt() /*1+*/

    //end the command prompt
    iKrl.close();
});

/**
 * 1+ triggers the iKrl.setPrompt() message
 */