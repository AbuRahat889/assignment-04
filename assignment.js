

function  calculateMoney(ticketSale){
    if(ticketSale <= 0 ){
        let error = console.log("Invalid Number");
        return error;
    }
    else{
        let totalTicketPrice = ticketSale * 120;
        let lunchCost = 8 * 50;
        let securitiCost = 500;
        let totoalCost = lunchCost + securitiCost;

        let reaming = totalTicketPrice - totoalCost;

        return reaming;

    }
}



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



function deleteInvalids(array) {

    if (Array.isArray(array) === true) {
        let onlyNumber = [];
        for (let i = 0; i <= array.length; i++) {
            let type = typeof (array[i])
            if (type === 'number') {
                onlyNumber.push(array[i]);
            }
        }
        
        return onlyNumber;
    }
    else{

        return 'invalid';
    }
}



function password(obj) {

    let numberOfKey = Object.keys(obj);
    let birthDaty = String(obj.birthYear);
    
    if(numberOfKey.length === 3 && birthDaty.length === 4){
        
        let letter = obj.siteName;
        letter = letter[0].toUpperCase() + letter.slice(1);
        let appPassword = letter + '#' + obj.name + '@' + obj.birthYear;
        
        return appPassword;
    }
    else{
        return 'invalid';
    }
}


function monthlySavings(array, cost) {

    let costType = typeof (cost);
    if (Array.isArray(array) === false && costType !== 'number') {

        return 'Invalid';
    }
    else {

        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] >= 3000) {
                let tax = array[i] * 20 / 100;
                sum = sum + tax;
            }

        }

        let totalCost = sum + cost;

        let totalIncome = 0;
        for (let i = 0; i < array.length; i++) {
            totalIncome = totalIncome + array[i];
        }

        let savings = totalIncome - totalCost;

        if (savings >= 0) {
            return savings;
        }
        else {
            return 'Earn More';
        }

    }
}

