//invoke a prompt for the user to enter information for their readme as a function
//when the function is called on, it takes in user information
//user will be made an object with different properties used to store their data
//User data will be based on their inputs into fields =>
//Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//User input into specified fields will be used as text fields in corresponding readme document
//license option
//github username prompt is added as a link to github under 'questions' section
//email address prompt links under questions section with info on contacting
//Table of Contents section directs user to corresponding section inside of readme file.

//import inquirer module
const inquirer = require("inquirer");
// import fs module
const fs = require("fs");
//call inquirer prompt which takes in user data
inquirer
  .prompt([
    {
      type: "input",
      message: "Project Title",
      name: "title",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },

    {
      type: "input",
      message: "Installation Details",
      name: "installation",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      message: "How to Use",
      name: "usage",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "list",
      message: "Which license would you prefer to use?",
      name: "license",
      choices: ["The MIT License", "Apache License", "GNU License"],
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      message: "Contributions",
      name: "contribute",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      message: "Tests",
      name: "tests",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      message: "Contact for Questions",
      name: "questions",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      message: "GitHub Username",
      name: "github",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
    {
      type: "input",
      message: "Input Email",
      name: "email",
      validate: (value) => {
        if (value) {
          return true;
        } else {
          return "Please input a value";
        }
      },
    },
  ])
  //promise chain which takes user data to make a template for the readme file
  .then(
    ({
      title,
      installation,
      usage,
      license,
      contribute,
      tests,
      github,
      email,
    }) => {
      const data = `# ${title}
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  ${license}
  ## Contributors
  ${contribute}
  ## Tests
  ${tests}
  ## Questions
  * Git Hub: ${github}
  * Email: ${email}`;
      //call function that takes in name of readme file and responses from the prompt as arguments
      newReadMe(title, data);
    }
  );
//function that writes a new file using the responses as data
function newReadMe(projectName, data) {
  fs.writeFile(`${projectName}.md`, data, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("README generated successfully");
  });
}
