const inquirer= require("inquirer");
const fs= require("fs");
const Engineer= require("./lib/Engineer.js")
const Intern= require("./lib/Intern.js")
const Manager= require("./lib/Manager.js")
const Htmlgenerator= require("./src/createHtml")

const teamArray =[];

function createMgr() {
    inquirer.prompt([
        {type: "input", name: "manager.name", message: "What is your manager's name?"},
        {type: "input", name: "manager.id", message: "What is your manager's ID?"},
        {type: "input", name: "manager.email", message: "What is your manager's email?"},
        {type: "input", name: "manager.phone", message: "What is your manager's office number?"}
    ]).then (response=>{
        const mgrInstance=new Manager(response.manager.name, response.manager.id, response.manager.email, response.manager.phone)
        teamArray.push(mgrInstance)

        trafficController()

    })
}

function createEngr() {
    inquirer.prompt([
        {type: "input", name: "engineer.name", message: "What is your engineer's name?"},
        {type: "input", name: "engineer.id", message: "What is your engineer's ID?"},
        {type: "input", name: "engineer.email", message: "What is your engineer's email?"},
        {type: "input", name: "engineer.github", message: "What is your engineer's Github ID?"}
    ]).then (response=>{
        const engrInstance=new Engineer(response.engineer.name, response.engineer.id, response.engineer.email, response.engineer.github)
        teamArray.push(engrInstance)

        trafficController()
        
    })
}

function createIntern() {
    inquirer.prompt([
        {type: "input", name: "intern.name", message: "What is your intern's name?"},
        {type: "input", name: "intern.id", message: "What is your intern's ID?"},
        {type: "input", name: "intern.email", message: "What is your intern's email?"},
        {type: "input", name: "intern.school", message: "What is your intern's school name?"}
    ]).then (response=>{
        const internInstance=new Intern(response.intern.name, response.intern.id, response.intern.email, response.intern.school)
        teamArray.push(internInstance)

        trafficController()
        
    })
}


function trafficController () {
    inquirer.prompt([
        {type:"list", name: "addmember", message: "What type of Employee would you like to add?", choices: ["Manager", "Engineer", "Intern", "None"]}
    ]).then(response=>{
        if(response.addmember==="Manager") {
            createMgr()
        }
        else if (response.addmember==="Intern") {
            createIntern()
        }
        else if (response.addmember==="Engineer") {
            createEngr()
        }
        else {buildHtml()}
    })
}

function buildHtml(){
fs.writeFileSync("./final/booyah.html", Htmlgenerator(teamArray))
}
trafficController()