function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = (amount) => {
        this.balance += amount;
    };

    this.withdraw = (amount) => {
        this.balance -= amount;
    };
}

const accounts = [];

const accountForm = document.querySelector('#accountForm');
const customerName = document.querySelector('#customerName');
const initialBalance = document.querySelector('#initialBalance');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const account = new BankAccount(customerName.value, +initialBalance.value);
    accounts.push(account);

    console.log(accounts);
});

const depositForm = document.querySelector('#depositForm');
const accountNumber = document.querySelector('#accountNumber');
const amount = document.querySelector('#amount');

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find((acc) => acc.accountNumber === +accountNumber.value);
    
    if (account) {
        account.deposit(+amount.value);
    } else {
        console.log('Account not found.');
    }

    console.log(accounts);
});