const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Alice', 1, 'alice@company.com');

  expect(employee.name).toBe('Alice');
  expect(employee.id).toBe(1);
  expect(employee.email).toBe('alice@company.com');
});

test('returns the employee\'s name', () => {
  const employee = new Employee('Alice', 1, 'alice@company.com');

  expect(employee.getName()).toBe('Alice');
});

test('returns the employee\'s id', () => {
  const employee = new Employee('Alice', 1, 'alice@company.com');

  expect(employee.getId()).toBe(1);
});

test('returns the employee\'s email', () => {
  const employee = new Employee('Alice', 1, 'alice@company.com');

  expect(employee.getEmail()).toBe('alice@company.com');
});

test('returns the employee\'s role', () => {
  const employee = new Employee('Alice', 1, 'alice@company.com');

  expect(employee.getRole()).toBe('Employee');
});
