
const managerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the team manager\'s name?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the team manager\'s name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the team manager\'s employee ID?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the team manager\'s employee ID');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the team manager\'s email address?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the team manager\'s email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: 'What is the team manager\'s office number?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the team manager\'s office number');
        return false;
      }
    }
  }
];

const mainMenu = [
  {
    type: 'list',
    message: 'What would you like to do?',
    name: 'action',
    choices: ['Add an engineer', 'Add an intern', 'Generate the finished team profile']
  }
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the engineer\'s name?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the engineer\'s name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the engineer\'s employee ID?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the engineer\'s employee ID');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the engineer\'s email address?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the engineer\'s email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the engineer\'s GitHub username?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the engineer\'s GitHub username');
        return false;
      }
    }
  }
];

const internQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is the intern\'s name?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the intern\'s name');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the intern\'s employee ID?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the intern\'s employee ID');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the intern\'s email address?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the intern\'s email address');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the name of the intern\'s school?',
    validate: usernameInput => {
      if (usernameInput) {
        return true;
      } else {
        console.log('Please enter the name of the intern\'s school');
        return false;
      }
    }
  }
];

module.exports = { managerQuestions, mainMenu, engineerQuestions, internQuestions };
