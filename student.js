export class Student {
    constructor(sid, sname) {
        this.Studentid = sid;
        this.Studentname = sname;
    }

    getDetails() {
        console.log(`Student Id = ${this.Studentid}`);
        console.log(`Student Name = ${this.Studentname}`);
    }
}
