#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let todoList = [];
let conditions = true;
console.log(chalk.magenta.italic("\n \tWellcome to Sara- Todo-List Application\n"));
console.log("\t ~~==~~==~~==~~==~~==~~==~~==~~== \n");
let main = async () => {
    while (conditions) {
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Select an option you want to do: ",
                choices: ["Add Task", "Update Task", "Delete Task", "View To-do List", "Exit"]
            }
        ]);
        if (option.choice === "Add Task") {
            await addTask();
        }
        else if (option.choice === "Update Task") {
            await updateTask();
        }
        else if (option.choice === "Delete Task") {
            await deleteTask();
        }
        else if (option.choice === "View To-do List") {
            await viewTask();
        }
        else if (option.choice === "Exit") {
            conditions = false;
        }
    }
};
//function for add new task
let addTask = async () => {
    let new_task = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Enter your new task: "
        }
    ]);
    todoList.push(new_task.task);
    console.log(`\n ${new_task.task} task added successfully in your To-do list.\n`);
};
//function for view to-do tasks
let viewTask = async () => {
    console.log("\n Your To-do List \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`);
    });
    console.log("\n");
};
//function for delete task
let deleteTask = async () => {
    await viewTask();
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Énter the `index.no` of the task you want to delete: "
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedTask} task has been deleted successfully!\n`);
};
//function for update To-do task
let updateTask = async () => {
    await viewTask();
    let update_task = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter the `index.no` of the task you want to update: "
        },
        {
            name: "newTask",
            type: "input",
            message: "Enter your new task: "
        }
    ]);
    todoList[update_task.index - 1] = update_task.newTask;
    console.log(`\n Index.no ${update_task.index} task update successfully! [for update list check option: "view To-do List"]\n`);
};
main();
