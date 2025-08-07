import { Student } from './student.js';

export class Employee {
    constructor() {}

    ShowempInfo() {
        let student = new Student(101, 'Aditya Sharma');
        student.getDetails();
    }
}

export function add(a, b) {
    return a + b;
}
