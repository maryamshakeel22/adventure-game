#! /usr/bin/env node
//Shebang
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
console.log(chalk.yellow.bold("\n\t\t\t" + "*".repeat(25)));
console.log(chalk.magenta.bgCyan.bold("\t\t\tWelcome To Adventure Game"));
console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(25)));
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: chalk.magentaBright("PLease Enter Your Name:")
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: chalk.magentaBright("Select your Opponent:"),
    choices: ["Skeleton", "Assassin", "Zombie"]
});
let p1 = new Player(player.name);
// let o1 = new Player(opponent.select)
let o1 = new Opponent(opponent.select);
do {
    // Skeleton
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: chalk.magentaBright("Select your Opponent:"),
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                    console.log(chalk.red.bold.italic("\t\t\tYou Loose Better Luck Next Time"));
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(7)));
                    console.log(chalk.green.bold.italic("\t\t\tYou Win"));
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(7)));
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion fuel is${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                console.log(chalk.red.bold.italic("\t\t\tYou Loose, Better Luck Next Time"));
                console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                process.exit();
            }
        }
    }
    // Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: chalk.magentaBright("Select your Opponent:"),
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                    console.log(chalk.red.bold.italic("\t\t\tYou Loose Better Luck Next Time"));
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(7)));
                    console.log(chalk.green.bold.italic("\t\t\tYou Win"));
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(7)));
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion fuel is${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                console.log(chalk.red.bold.italic("\t\t\tYou Loose, Better Luck Next Time"));
                console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                process.exit();
            }
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "opt",
            message: chalk.magentaBright("Select your Opponent:"),
            choices: ["Attack", "Drink Portion", "Run For Your Life.."]
        });
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                    console.log(chalk.red.bold.italic("\t\t\tYou Loose Better Luck Next Time"));
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(7)));
                    console.log(chalk.green.bold.italic("\t\t\tYou Win"));
                    console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(7)));
                    process.exit();
                }
            }
            if (ask.opt == "Drink Portion") {
                p1.fuelIncrease();
                console.log(chalk.bold.italic.green(`You Drink Health Portion fuel is${p1.fuel}`));
            }
            if (ask.opt == "Run For Your Life..") {
                console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
                console.log(chalk.red.bold.italic("\t\t\tYou Loose, Better Luck Next Time"));
                console.log(chalk.yellow.bold("\t\t\t" + "*".repeat(30)));
            }
            process.exit();
        }
    }
} while (true);
