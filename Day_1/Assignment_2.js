// Declare a global variable and shadow it inside a function using both `var` and `let` to see how they behave
// differently when printed.

const browserVersion = "chrome";

function getBrowserVersion() {

    if(browserVersion == "chrome"){
        let browserVersion = "chrome";
        

    }
    console.log(browserVersion);
    
}

getBrowserVersion();

