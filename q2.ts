// รหัส นศ.: 660610765
// ชื่อ-สกุล : ธีรภัทร พิพัฒน์บุณยารัตน์

// define interface for Student object
interface Student {
  name: string;
  score: number;
}

// assign interface/type to the function definition properly
function findTopNames(students: Student[]) {
  const topStudents: Student[] = students.filter((student: Student) => student.score > 8);
  return topStudents.map((student: Student) => student.name);
}

// assign interface/type to the student1 object properly
const students1 = [
  { name: "john", score: 10 },
  { name: "jane", score: 9 },
  { name: "jim", score: 8 },
];

console.log(findTopNames(students1));

module.exports = findTopNames;
