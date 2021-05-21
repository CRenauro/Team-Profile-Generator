//npm
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const managerCard = require("./templates/manager.html");
const internCard = require("./templates/intern.html");
const engineerCard = require("./templates/engineer.html");

const uniqueId = 0;
const fullTeam = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { fileURLToPath } = require("url");
// const Employee = require("./lib/Employee");
// const choices = require("inquirer/lib/objects/choices");

const mainApp = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((answers) => {
      switch (answers.role) {
        case "Manager":
          createManager = () => {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "managerName",
                  message: "What is your name?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                  },
                },
                {
                  type: "input",
                  name: "managerId",
                  message: "What is the manager's Id?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a valid Id.";
                  },
                },
                {
                  type: "input",
                  name: "managerEmail",
                  message: "What is the manager's email?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a valid email.";
                  },
                },
                {
                  type: "input",
                  name: "officeNumber",
                  message: "What is your office number?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a number.";
                  },
                },
              ])
              .then((response) => {
                const manager = new Manager(
                  response.managerName,
                  response.managerId,
                  response.managerEmail,
                  response.officeNumber
                );
                const managerCardHtml = managerCard(manager);
                fullTeam.push(managerCardHtml);
                console.log(fullTeam);
                mainApp();
              });
          };
          createManager();
          break;
        case "Engineer":
          createEngineer = () => {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "engineerName",
                  message: "What is the Engineer's name?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                  },
                },
                {
                  type: "input",
                  name: "engineerId",
                  message: "What is the Engineer's Id?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a valid ID.";
                  },
                },
                {
                  type: "input",
                  name: "engineerEmail",
                  message: "What is the Engineer's email?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a valid email.";
                  },
                },
                {
                  type: "input",
                  name: "engineerGithub",
                  message: "What is the Engineer's Github user name?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter your user name.";
                  },
                },
              ])
              .then((response) => {
                const engineer = new Engineer(
                  response.engineerName,
                  response.engineerId,
                  response.engineerEmail,
                  response.engineerGithub
                );
                const engineerCardHtml = engineerCard(engineer);
                fullTeam.push(engineerCardHtml);
                console.log(fullTeam);
                mainApp();
              });
          };
          createEngineer();
          break;
        case "Intern":
          createIntern = () => {
            inquirer
              .prompt([
                {
                  type: "input",
                  name: "internName",
                  message: "What is the Intern's name?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter at least one character.";
                  },
                },
                {
                  type: "input",
                  name: "internId",
                  message: "What is the Intern's Id?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a valid ID.";
                  },
                },
                {
                  type: "input",
                  name: "internEmail",
                  message: "What is the Intern's email?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter a valid email.";
                  },
                },
                {
                  type: "input",
                  name: "internSchool",
                  message: "What school did you graduate from?",
                  validate: (answer) => {
                    if (answer !== "") {
                      return true;
                    }
                    return "Please enter your school.";
                  },
                },
              ])
              .then((response) => {
                const intern = new Intern(
                  response.internName,
                  response.internId,
                  response.internEmail,
                  response.internSchool
                );
                const internCardHtml = internCard(intern);
                fullTeam.push(internCardHtml);
                console.log(fullTeam);
                mainApp();
              });
          };
          createIntern();
      }
    });
};

function generateHTML() {
  console.log(fullTeam);

  function renderManager() {}

  function renderIntern() {}

  function renderEngineer() {}

  function makeTeam() {
    fs.writeFile(outputPath, render(fullTeam), function (err) {
      if (err) {
        return console.log(err);
      }
    });
  }
}

mainApp();
