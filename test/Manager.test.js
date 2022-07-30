const Manager = require("../lib/Manager");

test("Create a manager object", () => {
    const manager = new Manager("Frank Sinatra", 444444, "blueeyes@theman.com", 420);

    expect(manager.name).toBe("Frank Sinatra");
    expect(manager.id).toBe(444444);
    expect(manager.email).toBe("blueeyes@theman.com");
    expect(manager.officeNumber).toBe(420);
});

test("Gets manager's name", () => {
    const manager = new Manager("Frank Sinatra", 444444, "blueeyes@theman.com", 420);

    expect(manager.getName()).toBe("Frank Sinatra");
});

test("Gets manager's ID", () => {
    const manager = new Manager("Frank Sinatra", 444444, "blueeyes@theman.com", 420);

    expect(manager.getId()).toBe(444444);
});

test("Gets manager's email", () => {
    const manager = new Manager("Frank Sinatra", 444444, "blueeyes@theman.com", 420);

    expect(manager.getEmail()).toBe("blueeyes@theman.com");
});

test("Gets manager's office number", () => {
    const manager = new Manager("Frank Sinatra", 444444, "blueeyes@theman.com", 420);

    expect(manager.getOfficeNumber()).toBe(420);
})

test("Gets manager's role", () => {
    const manager = new Manager("Frank Sinatra", 444444, "blueeyes@theman.com", 420);

    expect(manager.getRole()).toBe("Manager");
});