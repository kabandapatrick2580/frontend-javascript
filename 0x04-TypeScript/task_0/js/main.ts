interface Student {
    firstname: string;
    lastname: string;
    age: number;
    location: string;
}
// Create Student one
const studentOne: Student = {
    firstname: 'John',
    lastname: 'Doe',
    age: 25,
    location: 'USA'
};

// Create Student two
const studentTwo: Student = {
    firstname: 'Jane',
    lastname: 'Doe',
    age: 22,
    location: 'UK'
};

// Create an array of students
const studentsList: Student[] = [studentOne, studentTwo];
// render table using vanilla javascript
const table = document.createElement('table');
const tableHeader = document.createElement('tr');

// Add headers for the table
const headerOne = document.createElement('th');
headerOne.textContent = 'Firstname';
const headerTwo = document.createElement('th');
headerTwo.textContent = 'Location';

// Append the headers to the table row
tableHeader.appendChild(headerOne);
tableHeader.appendChild(headerTwo);

// append the header row to the table
table.appendChild(tableHeader);

// Iterate over students list and create table rows
studentsList.forEach((student) => {
    const row = document.createElement('tr');
    const cellOne = document.createElement('td');
    cellOne.textContent = student.firstname;
    const cellTwo = document.createElement('td');
    cellTwo.textContent = student.location;

    row.appendChild(cellOne);
    row.appendChild(cellTwo);

    table.appendChild(row);
});
// append the table to the body
document.body.appendChild(table);
