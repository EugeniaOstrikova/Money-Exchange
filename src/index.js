// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var boxMoney = {};
    var arrCoins = [50, 25, 10, 5, 1];
    var objCoins = {
        50: "H",
        25: "Q",
        10: "D",
        5: "N",
        1: "P"
    };
    function residueDetermination(dividend, divisor){
        var firstValue = dividend;
        dividend = dividend % divisor;
        var quantityMoney = (firstValue - dividend) / divisor;
        boxMoney[objCoins[divisor]] = quantityMoney;
        return dividend;
    }
    var arrCoinssLength = arrCoins.length;
    for(var i=0; i<arrCoinssLength; i++){
        var difference = currency - arrCoins[i];
        var money = arrCoins[i];
        if(currency > 10000){
            boxMoney.error = "You are rich, my friend! We don't have so much coins for exchange";
            break
        }
        else if(difference >= 0){
            currency = residueDetermination(currency, money);
        }
        else continue;
    }
    console.log(boxMoney);
    return boxMoney
};
