//ticket price 120 tk
//securiti gard (1) 500 tk 
// staf (8) lunch 50 tk

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
let result = calculateMoney(93);
console.log(result);