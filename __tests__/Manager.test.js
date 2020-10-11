const Manager = require('../lib/Manager');


test('creates an manager object', () => {
  const manager = new Manager('Alice', 1, 'alice@company.com', 302);

  expect(manager.name).toBe('Alice');
  expect(manager.id).toBe(1);
  expect(manager.email).toBe('alice@company.com');
  expect(manager.officeNumber).toBe(302);
});

test('returns the manager\'s name', () => {
  const manager = new Manager('Alice', 1, 'alice@company.com', 302);

  expect(manager.getName()).toBe('Alice');
});

test('returns the manager\'s id', () => {
  const manager = new Manager('Alice', 1, 'alice@company.com', 302);

  expect(manager.getId()).toBe(1);
});

test('returns the manager\'s email', () => {
  const manager = new Manager('Alice', 1, 'alice@company.com', 302);

  expect(manager.getEmail()).toBe('alice@company.com', 302);
});

test('returns the manager\'s role', () => {
  const manager = new Manager('Alice', 1, 'alice@company.com', 302);

  expect(manager.getRole()).toBe('Manager');
});
