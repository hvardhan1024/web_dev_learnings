class BankAccount{
    customerName;
    accountNumber;
    balance;

    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance+=amount;
    }

    withdraw(amount){
        this.balance-=amount;
    }
}

const rakeshAccount = new BankAccount('Rakesh',100)
const rakeshAccount2 = new BankAccount('Rakesh',100)

rakeshAccount.deposit(100)
console.log(rakeshAccount);

// Hoisting works with functions but it dont work with objects 

