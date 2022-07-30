const Employee = require("../lib/Employee");

test("Creates an employee ", () => {
    const employee = new Employee("George", 666666, "georgelovesserenity@festivus.com");

    expect(employee.name).toBe("George");
    expect(employee.id).toBe(666666);
    expect(employee.email).toBe("George", 666666, "georgelovesserenity@festivus.com")
});


test("Gets name of  employee", () => {
    const employee = new Employee("George", 666666, "georgelovesserenity@festivus.com")

    expect(employee.getName()).toBe("Will");
});


test("Gets ID of employee", () => {
    const employee = new Employee("George", 666666, "georgelovesserenity@festivus.com")

    expect(employee.getId()).toBe(666666);
});


test("Gets email of employee", () => {
    const employee = new Employee("George", 666666, "georgelovesserenity@festivus.com")

    expect(employee.getEmail()).toBe("georgelovesserenity@festivus.com");
});


test("Gets role of employee", () => {
    const employee = new Employee("George", 666666, "georgelovesserenity@festivus.com");

    expect(employee.getRole()).toBe("Employee");
});