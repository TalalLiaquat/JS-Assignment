// Temperature
var temperatureCelsius = parseFloat(prompt("Enter the current temperature in Celsius:"));


if (temperatureCelsius > 30) {
    alert("It's a hot day!");
} else {
    alert("The weather is moderate.");
}



//Mark Sheet
var subject1 = parseFloat(prompt("Enter marks for Subject 1:"));
var subject2 = parseFloat(prompt("Enter marks for Subject 2:"));
var subject3 = parseFloat(prompt("Enter marks for Subject 3:"));
var subject4 = parseFloat(prompt("Enter marks for Subject 4:"));
var subject5 = parseFloat(prompt("Enter marks for Subject 5:"));

var totalMarks = subject1 + subject2 + subject3 + subject4 + subject5;

var percentage = (totalMarks / 500) * 100;


var grade;
if (percentage >= 80) {
    grade = 'A+';
} else if (percentage >= 70) {
    grade = 'A';
} else if (percentage >= 60) {
    grade = 'B';
} else if (percentage >= 50) {
    grade = 'C';
} else if (percentage >= 40) {
    grade = 'D';
} else {
    grade = 'Fail';
}

document.write("<h1>Mark Sheet</h1>");
document.write("<p>Marks Obtained in Subject 1: " + subject1 + "</p>");
document.write("<p>Marks Obtained in Subject 2: " + subject2 + "</p>");
document.write("<p>Marks Obtained in Subject 3: " + subject3 + "</p>");
document.write("<p>Marks Obtained in Subject 4: " + subject4 + "</p>");
document.write("<p>Marks Obtained in Subject 5: " + subject5 + "</p>");
document.write("<p>Total Marks Obtained: " + totalMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");


