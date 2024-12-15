interface Teacher {
    readonly firstName: string;   // Read-only, can only be set at initialization now they are defined as readonly
    readonly lastName: string;    // Read-only, can only be set at initialization
    fullTimeEmployee: boolean;    // Mandatory attribute
    yearsOfExperience?: number;   // Optional attribute
    location: string;             // Mandatory attribute

    // Allow any other properties hich means that any other property can be added to the object
    [key: string]: any;
}

// extend the Teacher interface to create a new object
interface Directors extends Teacher {
    numberOfReports: number;      // Mandatory attribute
}

// interface for the printTeacher function
interface printTeacherFunction {
    (firstName: string,lastName: string): string;
}
// implement the printTeacher function
const printTeacher: printTeacherFunction = function (firstName: string, lastName: string): string {
    const firstInitial=firstName.charAt(0);
    return `${firstInitial}. ${lastName}`;
};

// Define an interface for the constructor of the class
interface StudentConstructor {
    new(firstName: string, lastName: string): Student;
}
// Define an interface for the class
interface Student {
    workOnHomework(): string;
    displayName(): string;
}
// Implement the class
class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string {
        return this.firstName;
    }
}