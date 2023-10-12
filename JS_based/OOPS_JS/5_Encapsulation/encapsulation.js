class BankAccount{
    customerName;
    accountNumber;
    #balance; //balance is a private field

    constructor(customerName,balance=0){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance+=amount;
    }

    withdraw(amount){
        this.#balance-=amount;
    }

    set balance(amount){
        if(isNaN(amount)){
            throw new Error('Amount must be a number')
        }
        this.#balance = amount;
    }

    get balance(){
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount{
    transactionLimit = 50000;

    constructor(customerName,balance=0){
        super(customerName,balance)
    }

    #calculateInterest(amount){
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount){
        this.#calculateInterest(amount)
        console.log('Taking business Loan ',amount);
    }
}

const acc1 = new CurrentAccount('person1',100)
console.log(acc1);

// acc1.balance = -1221; // directly changing the property's value is not a good practice

// after making balance private by adding # , you can no longer modify the balance outside the class !, so now you have to do it using methods

acc1.balance = 400;

console.log(acc1);

console.log(acc1.balance); 

acc1.takeBusinessLoan(100)