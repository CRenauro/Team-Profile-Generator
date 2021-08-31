const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const members = [];

const mainApp = () => {
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
          message: "What is the manager's office number?",
          validate: (answer) => {
            if (answer !== "") {
              return true;
            }
            return "Please enter a valid office number.";
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
        members.push(manager);
        buildTeam();
      });
  };
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
            return "Please enter your Github user name.";
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
        members.push(engineer);
        buildTeam();
      });
  };
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
        members.push(intern);
        buildTeam();
      });
  };
  buildTeam = () => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "teamMembers",
          choices: ["Manager", "Engineer", "Intern", "Finish"],
        },
      ])
      .then((response) => {
        const role = response.teamMembers;
        if (role == "Manager") {
          createManager();
        } else if (role == "Engineer") {
          createEngineer();
        } else if (role == "Intern") {
          createIntern();
        } else if (role == "Finish") {
          makeTeam();
        }
      });
  };
  buildTeam();
};
makeTeam = () => {
  fs.writeFileSync(outputPath, render(members), "utf-8");
};
mainApp();
