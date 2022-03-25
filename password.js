const { Console } = require('console');
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question(`Hello welcome to the password validator, please enter password (include one of these char !,?,#,$):`,function(input){
    let specialChar = [`!`,`?`,`#`,`$`]
    tokens = input.split(``);
    
    if(tokens.length < 10 ){
        console.log(`invalid: password is less the 10 letter & need first letter must be capitalized`)
    }else if(tokens[0] === tokens[0].toUpperCase()){
        console.log(`password scecured,Congrates.`) 

    } else {
        console.log(`password needs a capital letter.`)
    }

    reader.close()
});