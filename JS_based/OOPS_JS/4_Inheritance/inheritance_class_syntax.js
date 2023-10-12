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

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    takeBusinessLoan(amount){
        console.log('Taking business Loan ',amount);
    }
}

const acc1 = new CurrentAccount('person1',100)
console.log(acc1);
acc1.deposit(1000)
console.log(acc1);