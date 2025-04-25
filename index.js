//1 
const bankAccount = {
    ownerName: "Kirill",
    accountNumber: 123,
    balance: 1234,
    withdrawed: 0,

    deposit(newBalance) {
        this.balance = newBalance;

    },

    withdraw(withdrawed) {
        this.balance -= withdrawed;
        this.withdrawed += withdrawed;
    }
}

let newBalance = parseFloat(prompt("Enter balance:"));

bankAccount.deposit(newBalance);

let withdrawed = parseFloat(prompt("Enter amount to withdraw:"));

bankAccount.withdraw(withdrawed);

console.log(bankAccount);

//2
const weather = {
    temperature: 10,
    humidity: 50,
    windSpeed: 5,

    getWeather() {
        if (this.temperature < 0) {
            console.log(true);
            alert(`${this.temperature}`)
        } else {
            console.log(false);
            alert(`${this.temperature}`)
        }
    }
}

weather.getWeather();

//3
const user = {
    name: "Kirill",
    email: "lenaplop980@icloud.com",
    password: "1q2w3erfsx",

    login() {


        if (this.email.includes("@")) {
            console.log("Passed");

        } else {
            console.log("Not passed, the email isn't valid");

        }

        if (this.password.length > 7) {
            console.log("Passed");
        } else {
            console.log("Not Passed, password is too short");
        }
    }
}

user.login();

//4
const movie = {
    title: "Cursed disk",
    director: "Kirill",
    year: 2026,
    rating: 9,

    raitingt() {
        if (this.rating > 8) {
            console.log(true);

        } else {
            console.log(false);

        }
    }
}

movie.raitingt();