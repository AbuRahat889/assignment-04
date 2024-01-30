
// A y i e o u w 

function checkName(name) {
    let checkString = typeof (name);

    if (checkString !== 'string') {
        return 'invalid';
    }
    else {
       name = name.toUpperCase();

        if(name.at(-1) === 'A' || name.at(-1) === 'Y' || name.at(-1) === 'I' || name.at(-1) === 'E' || name.at(-1) === 'O' || name.at(-1) === 'U' || name.at(-1) === 'W'){

            return 'Good Name';
        }
        else{

            return 'Bad Name';
        }
    }
}


let reault = checkName('shamimaApw')
// checkName(15)
console.log(reault)
