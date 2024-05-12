import inquirer from "inquirer"
import chalk from "chalk"

let todoList = [];
let conditions = true;

console.log(chalk.magenta.italic("\n \tWellcome to Sara- Todo-List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
          name:"task",
          type: "input",
          message:"Enter your New Task : " 
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-List successfully`);

    let AddMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task? ",
            default: "false"
        }
    ]);
    conditions = AddMoreTask.addmore
}
console.log("Your updated Todo-List:" ,todoList );