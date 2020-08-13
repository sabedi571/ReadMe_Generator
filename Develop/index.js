const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Please enter your title. This will display on the top of your README"
    },
    {
      type: "input",
      name: "desrip",
      message: "Description?"
    },
    {
      type: "input",
      name: "table",
      message: "Table of Contents?"
    },
    {
      type: "input",
      name: "install",
      message: "Installation?"
    },
    {
      type: "input",
      name: "usage",
      message: "Usage?"
    },
    {
      type: "input",
      name: "license",
      message: "License?"
    },
    {
      type: "input",
      name: "contrib",
      message: "Contributing?"
    },
    {
      type: "input",
      name: "test",
      message: "Tests?"
    },
    {
      type: "input",
      name: "quest",
      message: "Questions?"
    }
  ]);
}
function generateHTML(answers) {
  return `TITLE
${answers.title}
Description
${answers.descrip}
Table of Contents
${answers.table}
Installation
${answers.install}
Usage
${answers.usage}
License
${answers.license}
Contribution
${answers.contrib}
Testing
${answers.test}
Questions
${answers.quest}`;
}
promptUser()
  .then(function(answers) {
    const html = generateHTML(answers);
    return writeFileAsync("README.md", html);
  })
  .then(function() {
    console.log("Successfully wrote to index.html");
  })
  .catch(function(err) {
    console.log(err);
  });