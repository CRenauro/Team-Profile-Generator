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
const Employee = require("./lib/Employee");

switch (mainApp) {
    case 1:
       const createEmployee = () => {
           inquirer.prompt([
               {
                   type:"list",
                   name:"role",
                   message: "What is your role?",
                   choices: ["Employee", "Manager", "Engineer", "Intern"]
               },
               {   
                   type: "input",
                   name: "employeeName",
                   message: "What is your name?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter at least one character.";
                   }
               },
               {
                   type: "input",
                   name: "employeeId",
                   message: "What is the employee's Id?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a valid ID.";
                   }
               },
               {
                   type: "input",
                   name: "employeeEmail",
                   message: "What is the employee's email?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a valid email.";
                   },
               },
           ])
           .then(response => {
               const employee = new Employee (
                   response.employeeName,
                   response.employeeId,
                   response.employeeEmail
               );
               const employeeCardHtml = employeeCard(employee);
               fullTeam.push(employeeCardHtml);
               console.log(error);
           });
       }
   case 2:
       const createManager = () => {
           inquirer.prompt([
               {   
                   type: "input",
                   name: "managerName",
                   message: "What is your name?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter at least one character.";
                   }
               },
               {
                   type: "input",
                   name: "managerId",
                   message: "What is the manager's Id?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a valid Id.";
                   }
               },
               {
                   type: "input",
                   name: "managerEmail",
                   message: "What is the manager's email?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a valid email.";
                   }
               },
               {
                   type: "input",
                   name: "officeNumber",
                   message: "What is your office number?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a number.";
                   },
               },
           ])
           .then(response => {
               const manager = new Manager (
                   response.managerName,
                   response.managerId,
                   response.managerEmail,
                   response.officeNumber
               );
               const managerCardHtml = managerCard(manager);
               fullTeam.push(managerCardHtml);
           }); 
       }
   case 3:
       const createEngineer = () => {
           inquirer.prompt([
               {   
                   type: "input",
                   name: "engineerName",
                   message: "What is the Engineer's name?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter at least one character.";
                   }
               },
               {
                   type: "input",
                   name: "engineerId",
                   message: "What is the engineer's Id?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a valid ID.";
                   }
               },
               {
                   type: "input",
                   name: "engineerEmail",
                   message: "What is the manager's email?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter a valid email.";
                   }
               },
               {
                   type: "input",
                   name: "engineerGithub",
                   message: "What is your Github user name?",
                   validate: answer => {
                       if (answer !== "") {
                           return true;
                       }
                   return "Please enter your user name.";
                   }
               }
           ])
           .then(response => {
               const engineer = new Engineer (
                   response.engineerName,
                   response.engineerId,
                   response.engineerEmail,
                   response.engineerGithub
               );
               const engineerCardHtml = engineerCard(engineer);
               fullTeam.push(engineerCardHtml);
               console.log(error);
           });
       }
   case 4:
       const createIntern = () => {
       inquirer.prompt([
           {   
               type: "input",
               name: "internName",
               message: "What is your name?",
               validate: answer => {
                   if (answer !== "") {
                       return true;
                   }
               return "Please enter at least one character.";
               }
           },
           {
               type: "input",
               name: "internId",
               message: "What is the intern's Id?",
               validate: answer => {
                   if (answer !== "") {
                       return true;
                   }
               return "Please enter a valid ID.";
               }
           },
           {
               type: "input",
               name: "internEmail",
               message: "What is the intern's email?",
               validate: answer => {
                   if (answer !== "") {
                       return true;
                   }
               return "Please enter a valid email.";
               }
           },
           {
               type: "input",
               name: "internSchool",
               message: "What school did you graduate from?",
               validate: answer => {
                   if (answer !== "") {
                       return true;
                   }
               return "Please enter your school.";
               }
           }
       ])
       .then(response => {
           const intern = new Intern (
               response.internName,
               response.internId,
               response.internEmail,
               response.internSchool
           );
           const internCardHtml = internCard(intern);
           fullTeam.push(internCardHtml);
           console.log(error);
       });
   }
};


function generateHTML() {

   console.log(fullTeam)

   function renderManager() {

   };

   function renderIntern() {

   };

   function renderEngineer() {

   };


};

//call and invoke function to run
mainApp();




// const mainApp = () => {

//     const createEmployee = () => {
//         inquirer.prompt([
//             {
//                 type:"list",
//                 name:"role",
//                 message: "What is your role?",
//                 choices: ["Employee", "Manager", "Engineer", "Intern"]
//             }
//             {   
//                 type: "input",
//                 name: "employeeName",
//                 message: "What is your name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter at least one character.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "employeeId",
//                 message: "What is the employee's Id?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid ID.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "employeeEmail",
//                 message: "What is the employee's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid email.";
//                 },
//             },
//         ])
//         .then(response => {
//             const employee = new Employee (
//                 response.employeeName,
//                 response.employeeId,
//                 response.employeeEmail
//             );
//             const employeeCardHtml = employeeCard(employee);
//             fullTeam.push(employeeCardHtml);
//             console.log(error);
//         });
    
//     const createManager = () => {
//         inquirer.prompt([
//             {   
//                 type: "input",
//                 name: "managerName",
//                 message: "What is your name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter at least one character.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "managerId",
//                 message: "What is the manager's Id?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid Id.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "managerEmail",
//                 message: "What is the manager's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid email.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "officeNumber",
//                 message: "What is your office number?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a number.";
//                 },
//             },
//         ])
//         .then(response => {
//             const manager = new Manager (
//                 response.managerName,
//                 response.managerId,
//                 response.managerEmail,
//                 response.officeNumber
//             );
//             const managerCardHtml = managerCard(manager);
//             fullTeam.push(managerCardHtml);
//         }); 
//     }

//     const createEngineer = () => {
//         inquirer.prompt([
//             {   
//                 type: "input",
//                 name: "engineerName",
//                 message: "What is the Engineer's name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter at least one character.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "engineerId",
//                 message: "What is the engineer's Id?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid ID.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "engineerEmail",
//                 message: "What is the manager's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid email.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "engineerGithub",
//                 message: "What is your Github user name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter your user name.";
//                 }
//             }
//         ])
//         .then(response => {
//             const engineer = new Engineer (
//                 response.engineerName,
//                 response.engineerId,
//                 response.engineerEmail,
//                 response.engineerGithub
//             );
//             const engineerCardHtml = engineerCard(engineer);
//             fullTeam.push(engineerCardHtml);
//             console.log(error);
//         });
//     }

//     const createIntern = () => {
//         inquirer.prompt([
//             {   
//                 type: "input",
//                 name: "internName",
//                 message: "What is your name?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter at least one character.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "internId",
//                 message: "What is the intern's Id?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid ID.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "internEmail",
//                 message: "What is the intern's email?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter a valid email.";
//                 }
//             },
//             {
//                 type: "input",
//                 name: "internSchool",
//                 message: "What school did you graduate from?",
//                 validate: answer => {
//                     if (answer !== "") {
//                         return true;
//                     }
//                 return "Please enter your school.";
//                 }
//             }
//         ])
//         .then(response => {
//             const intern = new Intern (
//                 response.internName,
//                 response.internId,
//                 response.internEmail,
//                 response.internSchool
//             );
//             const internCardHtml = internCard(intern);
//             fullTeam.push(internCardHtml);
//             console.log(error);
//         });
//     } 



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
