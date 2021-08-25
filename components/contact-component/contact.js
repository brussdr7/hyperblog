class integrant {
    constructor({ name, mail, pass }) {
        this.name = name;
        this.mail = mail;
        this.pass = pass;
    }
}

const listStudents = [];
function addStudent(student) {
    listStudents.push(student);
}

function getStudent() {
    const inputName = document.getElementById("name");
    const valueName = inputName.value;
    const inputMail = document.getElementById("mail");
    const valueMail = inputMail.value;
    const inputPass = document.getElementById("pass");
    const valuePass = inputPass.value;

    const student = new integrant({ name: valueName, mail: valueMail, pass: valuePass });
    addStudent(student);
    return console.log(student);
}

