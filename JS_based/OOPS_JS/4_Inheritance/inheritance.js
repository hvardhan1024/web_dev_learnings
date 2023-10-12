function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
};

// const rakeshAccount = new BankAccount('Rakesh',100)
// console.log(rakeshAccount);

function CurrentAccount(customerName,balance=0){
    // Inheritance - constructor linking
    BankAccount.call(this,customerName,balance)
    this.transactionLimit=50000;
}

// linking prototypes
CurrentAccount.prototype = Object.create(BankAccount.prototype)

CurrentAccount.prototype.takeBusinessLoan = function(amount){
    console.log('Taking business loan '+amount);
}


//  SavingsAccount
function SavingAccount(customerName,balance=0){
    // Inheritance
    BankAccount.call(this,customerName,balance)
    this.transactionLimit=10000;
}

SavingAccount.prototype = Object.create(BankAccount.prototype)

SavingAccount.prototype.takePersonalLoan = function(amount){
    console.log('Taking Personal loan '+amount);
}



const savingAcc1 = new SavingAccount('abc',100)
console.log(savingAcc1);
savingAcc1.deposit(1000)
console.log(savingAcc1);