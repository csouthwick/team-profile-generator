const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { managerQuestions, mainMenu, engineerQuestions, internQuestions } = require('./utils/questions');
const generatePage = require('./src/page-template');
const writeFile = require('./utils/generate-site');

const promptManager = () => {
  inquirer.prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
      const team = {
        manager: new Manager(name, id, email, officeNumber),
        engineers: [],
        interns: []
      };

      promptMainMenu(team);
    });
};

const promptMainMenu = team => {
  inquirer.prompt(mainMenu)
    .then(({ action }) => {
      switch (action) {
        case 'Add an engineer':
          promptEngineer(team);
          break;
        case 'Add an intern':
          promptIntern(team);
          break;
        case 'Generate the finished team profile':
          saveTeamProfile(generatePage(team));
          break;
      }
    });
};

const promptEngineer = team => {
  inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, github }) => {
      team.engineers.push(new Engineer(name, id, email, github));
      promptMainMenu(team);
    });
};

const promptIntern = team => {
  inquirer.prompt(internQuestions)
    .then(({ name, id, email, school }) => {
      team.interns.push(new Intern(name, id, email, school));
      promptMainMenu(team);
    });
};

const saveTeamProfile = pageHtml => {
  writeFile(pageHtml)
    .then(status => {
      console.log(status.message);
    })
    .catch(err => {
      console.log(err);
    });
};

promptManager();
