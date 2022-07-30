const Engineer = require("../lib/Engineer");

test("Creates an engineer", () => {
    const engineer = new Engineer("Doris Day", 777777, "doris@day.com", "doris_day");

    expect(engineer.name).toBe("Doris Day");
    expect(engineer.id).toBe(777777);
    expect(engineer.email).toBe("doris@day.com");
    expect(engineer.github).toBe("doris_day");
});


test("Gets name of engineer's name", () => {
    const engineer = new Engineer("Doris Day", 777777, "doris@day.com", "doris_day");

    expect(engineer.getName()).toBe("Doris Day");
});


test("Gets engineer's ID", () => {
    const engineer = new Engineer("Doris Day", 777777, "doris@day.com", "doris_day");

    expect(engineer.getId()).toBe(777777);
});


test("Gets engineer's email", () => {
    const engineer = new Engineer("Doris Day", 777777, "doris@day.com", "doris_day");

    expect(engineer.getEmail()).toBe("doris@day.com");
});


test("Gets engineer's office number", () => {
    const engineer = new Engineer("Doris Day", 777777, "doris@day.com", "doris_day");

    expect(engineer.getGithub()).toBe("doris_day");
})


test("Gets engineer's role", () => {
    const engineer = new Engineer("Doris Day", 777777, "doris@day.com", "doris_day");

    expect(engineer.getRole()).toBe("Engineer");
});