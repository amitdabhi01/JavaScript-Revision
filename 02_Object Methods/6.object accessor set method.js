//  object accessor set method

// example

const studentDetails = {
  name: "amit",
  age: "",

  set studentAge(age) {
    this.age = age;
  },
};

studentDetails.studentAge = 22;

console.log("student age", studentDetails.age);
