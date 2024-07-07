#! /usr/bin/env node
import inquirer from "inquirer";
// ---------------- games variable ----------------------
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// --------------- player variables -------------------
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
// ----------------- while loop condition ---------------------
let gameRunning = true;
console.log("Welcome to DeadZone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
    while (enemyHealth > 0) {
        console.log(`Your Health: ${heroHealth}`);
        console.log(`${enemy} Health: ${enemyHealth} `);
        let optins = await inquirer.prompt({
            name: "ans",
            type: "list",
            message: "What would you like to do?",
            choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
        });
        if (optins.ans === "1. Attack") {
            let attackDamageToEnemy = 50;
            let damageToEnemy = Math.floor(Math.random() * attackDamageToEnemy + 1);
            let damageToHero = Math.floor(Math.random() * enemyAttackDamageToHero + 1);
            enemyHealth -= damageToEnemy;
            heroHealth -= damageToHero;
            console.log(`You strike the ${enemy} for ${damageToEnemy}`);
            console.log(`${enemy} strike you for ${damageToHero} damage.`);
            if (heroHealth < 1) {
                console.log("You have taken too much damage. You are to be continued.");
                break;
            }
            ;
        }
        else if (optins.ans === "2. Take Health Potion") {
            if (numHealthPotion > 0) {
                heroHealth += healthPotionHealAmount;
                numHealthPotion--;
                console.log(`You use health potion for ${healthPotionHealAmount}`);
                console.log(`You now have ${heroHealth} health`);
                console.log(`you have ${numHealthPotion} health potion left`);
            }
            else {
                console.log(`You have no  health potion left. Defeat enemy for a chance get health potion`);
            }
        }
        else if (optins.ans === "3. Run") {
            console.log(`You run away from ${enemy}`);
            continue Game;
        }
    }
    if (heroHealth < 1) {
        console.log(`You are out from battle. You are too weak`);
        break;
    }
    console.log(`${enemy} was defeated!`);
    console.log(`You have ${heroHealth} health`);
    let randimNumber = Math.floor(Math.random() * 100 + 1);
    if (randimNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(`Enemy give you health potion`);
        console.log(`Your health is ${heroHealth}`);
        console.log(`Your health potion is ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt({
        name: "ans",
        type: "list",
        message: "What would you like to do now?",
        choices: ["1. Continue", "2. Exit"]
    });
    if (userOption.ans === "1. Continue") {
        console.log("You are continue on your adventure");
    }
    else {
        console.log("You successfully exit from DeadZone");
        break;
    }
    ;
    console.log("Thank you for playing.\n");
}
