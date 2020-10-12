// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

const generateManager = manager => {
  return `
<div class="card m-2 shadow-sm">
  <div class="card-header bg-primary text-light">
    <h2 class="card-title">${manager.getName()}</h2>
    <h3 class="card-subtitle">${manager.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.getId()}</li>
      <li class="list-group-item">Email: <a class="card-link" href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
      <li class="list-group-item">Office number: ${manager.officeNumber}</li>
    </ul>
  </div>
</div>
`;
};

const generateEngineers = engineers => {
  return engineers.map(engineer => {
    return `
<div class="card m-2 shadow-sm">
  <div class="card-header bg-primary text-light">
    <h2 class="card-title">${engineer.getName()}</h2>
    <h3 class="card-subtitle">${engineer.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.getId()}</li>
      <li class="list-group-item">Email: <a class="card-link" href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
      <li class="list-group-item">GitHub: <a class="card-link" href="https://github.com/${engineer.getGithub()}/">${engineer.getGithub()}</a></li>
    </ul>
  </div>
</div>
`;
  }).join('');
};

const generateInterns = interns => {
  return interns.map(intern => {
    return `
<div class="card m-2 shadow-sm flex-wrap">
  <div class="card-header bg-primary text-light">
    <h2 class="card-title">${intern.getName()}</h2>
    <h3 class="card-subtitle">${intern.getRole()}</h3>
  </div>
  <div class="card-body">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email: <a class="card-link" href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>
</div>
`;
  }).join('');
};

module.exports = team => {
  const { manager, engineers, interns } = team;

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header class="jumbotron text-center bg-dark text-light">
      <h1>My Team</h1>
    </header>
    <main class="container d-flex p-2">
      ${generateManager(manager)}
      ${generateEngineers(engineers)}
      ${generateInterns(interns)}
    </main>
  </body>
</html>
`;
};
