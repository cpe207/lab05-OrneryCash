// รหัส นศ.: 660610765
// ชื่อ-สกุล : ธีรภัทร พิพัฒน์บุณยารัตน์
// assign interface/type to the function definition properly
function findTopNames(students) {
    var topStudents = students.filter(function (student) { return student.score > 8; });
    return topStudents.map(function (student) { return student.name; });
}
// assign interface/type to the student1 object properly
var students1 = [
    { name: "john", score: 10 },
    { name: "jane", score: 9 },
    { name: "jim", score: 8 },
];
console.log(findTopNames(students1));
module.exports = findTopNames;
