// use case of the closure

let user = {
    balance : 500,
    deposit: function(amount){
        if(typeof amount === "number" && amount>0){
        this.balance+=amount;
        return this.balance;
        }
    },
    getBalace : function(){
        return this.balance;
    }
};

console.log(user.deposit(20));
console.log(user.getBalace());
