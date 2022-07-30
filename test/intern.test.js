const Employee = require("../lib/Employee");

test("Creates a new employee", () => {
    const employee = new Employee("Marie Mcgee", 222222, "marie@coffeeslave.com");

    expect(employee.name).toBe("Marie Mcgee");
    expect(employee.id).toBe(222222);
    expect(employee.email).toBe("marie@coffeeslave.com");
});


test("Gets employee's name", () => {
    const employee = new Employee("Marie Mcgee", 222222, "marie@coffeeslave.com");

    expect(employee.getName()).toBe("Marie Mcgee");
});


test("Gets employee's ID", () => {
    const employee = new Employee("Marie Mcgee", 222222, "marie@coffeeslave.com");

    expect(employee.getId()).toBe(222222);
});


test("Gets employee's email", () => {
    const employee = new Employee("Marie Mcgee", 222222, "marie@coffeeslave.com");

    expect(employee.getEmail()).toBe("marie@coffeeslave.com");
});


test("Gets employee's role", () => {
    const employee = new Employee("Marie Mcgee", 222222, "marie@coffeeslave.com");

    expect(employee.getRole()).toBe("Employee");
});