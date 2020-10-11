const Engineer = require('../lib/Engineer');


test('creates an engineer object', () => {
  const engineer = new Engineer('Bob', 2, 'bob@company.com', 'bob');

  expect(engineer.name).toBe('Bob');
  expect(engineer.id).toBe(2);
  expect(engineer.email).toBe('bob@company.com');
  expect(engineer.github).toBe('bob');
});

test('returns the engineer\'s name', () => {
  const engineer = new Engineer('Bob', 2, 'bob@company.com', 'bob');

  expect(engineer.getName()).toBe('Bob');
});

test('returns the engineer\'s id', () => {
  const engineer = new Engineer('Bob', 2, 'bob@company.com', 'bob');

  expect(engineer.getId()).toBe(2);
});

test('returns the engineer\'s email', () => {
  const engineer = new Engineer('Bob', 2, 'bob@company.com', 'bob');

  expect(engineer.getEmail()).toBe('bob@company.com');
});

test('returns the engineer\'s role', () => {
  const engineer = new Engineer('Bob', 2, 'bob@company.com', 'bob');

  expect(engineer.getRole()).toBe('Engineer');
});

test('returns the engineer\'s GitHub username', () => {
  const engineer = new Engineer('Bob', 2, 'bob@company.com', 'bob');

  expect(engineer.getGithub()).toBe('bob');
});
