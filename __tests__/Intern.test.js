const Intern = require('../lib/Intern');


test('creates an intern object', () => {
  const intern = new Intern('Carol', 3, 'carol@company.com', 'UCF');

  expect(intern.name).toBe('Carol');
  expect(intern.id).toBe(3);
  expect(intern.email).toBe('carol@company.com');
  expect(intern.school).toBe('UCF');
});

test('returns the intern\'s name', () => {
  const intern = new Intern('Carol', 3, 'carol@company.com', 'UCF');

  expect(intern.getName()).toBe('Carol');
});

test('returns the intern\'s id', () => {
  const intern = new Intern('Carol', 3, 'carol@company.com', 'UCF');

  expect(intern.getId()).toBe(3);
});

test('returns the intern\'s email', () => {
  const intern = new Intern('Carol', 3, 'carol@company.com', 'UCF');

  expect(intern.getEmail()).toBe('carol@company.com');
});

test('returns the intern\'s role', () => {
  const intern = new Intern('Carol', 3, 'carol@company.com', 'UCF');

  expect(intern.getRole()).toBe('Intern');
});

test('returns the intern\'s school', () => {
  const intern = new Intern('Carol', 3, 'carol@company.com', 'UCF');

  expect(intern.getSchool()).toBe('UCF');
});
