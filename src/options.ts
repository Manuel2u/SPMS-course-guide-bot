const options = {
  levelOptions: {
    firstYear: "Level 100",
    secondYear: "Level 200",
    thirdYear: "Level 300",
    fourthYear: "Level 400",
  },
  programOption: {
    option1: "Single Major",
    option3: "Major-Minor",
    option2: "Combined-Major",
  },

  courseOptionsL100: {
    physicalScience: "Physical Science",
    mathematicalScience: "Mathematical Science",
    earthScience: "Earth Science",
    informationTechnology: "Information Technology",
  },

  continuingStudentsSingleMajorOptions: {
    option1: "Acturial Science",
    option2: "Computer Science",
    option3: "Mathematics",
    option4: "Statistics",
    option5: "Physics",
    option6: "Chemistry",
    option7: "Geology",
    option8: "Geophysics",
    option9: "Applied Geophysics",
    option10: "Biomathematics",
    option11: "Information Technology",
    option12: "Applied Geology",
  },

  continuingStudentsCombinedMajorOptions: {
    option1: "Chemistry and a Biological Science Program",
    option2: "Chemistry and Physics",
    option3: "Computer Science and Mathematics",
    option4: "Computer Science and Physics",
    option5: "Computer Science and  Statistics",
    option6: "Mathematics and Physics",
    option7: "Mathematics and Statistics",
    option8: "Physics and Statistics",
    option9: "Physics and Mathematics",
  },
  continuingStudentsMajorMinorOptions: {
    option1: "Geology with Physics",
    option2: "Geology with Mathematics",
    option3: "Geology with Chemistry",
    option4: "Mathematics with Physics",
    option5: "Mathematics with Computer Science",
    option6: "Mathematics with Statistics",
    option7: "Mathematics with Geology",
    option8: "Physics with Computer Science",
    option9: "Physics with Geology",
    option10: "Physics with Mathematics",
    option11: "Statistics with Computer Science",
    option12: "Statistics with Mathematics",
    option13: "Physics with Statistics",
  },

  semesterOptions: {
    firstSemester: "First Semester",
    secondSemester: "Second Semester",
  },

  physicalScienceForPhysicsAndCompSciFirstSemester: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject3: "DCIT 101 : Introduction to Computer Science",
    subject4: "MATH 121 : Algebra and Trigonometry",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceForPhysicsAndCompSciSecondSemester: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus I",
    subject4: "PHYS 106 : Practical Physics II",
    subject5: "PHYS 144 : Electricity and Magnetism",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforChemsitryAndBioScienceFirstSemester: {
    subject2: "CHEM 113 : Foundation Chemistry I",
    subject3: "CHEM 120 : General Chemistry Laboratory",
    subject1: "ABSC 101 : Introductory Animal Biology",
    subject4: "MATH 121 : Algebra and Trigonometry",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforChemsitryAndBioScienceSecondSemester: {
    subject1: "BOTN 104 : Introductory Plant Biology",
    subject2: "CHEM 114 : Foundation Chemistry II",
    subject3: "MATH 122 : Calculus I",
    subject4: "PHYS 106 : Practical Physics II",
    subject5: "PHYS 144 : Electricity and Magnetism",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforMathsAndPhysicsFirstSemester: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject3: "MATH 121 : Algebra and Trigonometry",
    subject4: "MATH 123 : Vectors and Geometry",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforMathsAndPhysicsSecondSemester: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject2: "MATH 122 : Calculus I",
    subject3: "MATH 126 : Algebra and Geometry",
    subject4: "PHYS 106 : Practical Physics II",
    subject5: "PHYS 144 : Electricity and Magnetism",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforPhysicsAndStatisticsFirstSemester: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject3: "MATH 121 : Algebra and Trigonometry",
    subject4: "STAT 101 : Introduction to Statistics",
    subject5: "PHYS 105 : Practical Physics I",
    subject6: "PHYS 143 : Mechanics and Thermal Physics",
    subject7: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforPhysicsAndStatisticsSecondSemester: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject2: "MATH 122 : Calculus I",
    subject3: "PHYS 106 : Practical Physics II",
    subject4: "PHYS 144 : Electricity and Magnetism",
    subject5: "STAT 102 : Introduction to Probability",
    subject6: "UGRC 110 : Academic Writing 1",
  },

  physicalScienceforGeophysicsFirstSem: {
    subject1: "CHEM 113 : Foundation Chemistry I",
    subject2: "CHEM 120 : General Chemistry Laboratory",
    subject7: "EASC 101 : Physical Geology",
    subject3: "MATH 121 : Algebra and Trigonometry",
    subject4: "PHYS 105 : Practical Physics I",
    subject5: "PHYS 143 : Mechanics and Thermal Physics",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  physicalScienceforGeophysicsSecondSem: {
    subject1: "CHEM 114 : Foundation Chemistry II",
    subject6: "EASC 102 : Historical Geology",
    subject7: "EASC 106 : Geological Field Excursions",
    subject2: "MATH 122 : Calculus I",
    subject3: "PHYS 106 : Practical Physics II",
    subject4: "PHYS 144 : Electricity and Magnetism",
    subject5: "UGRC 110 : Academic Writing 1",
  },

  mathematicalScienceforComputerScienceFirstSem: {
    subject1: "DCIT 101 : Introduction to Computer Science",
    subject2: "DCIT 103 : Office Productivity Tools",
    subject3: "MATH 121 : Alegbra and Trigonometry",
    subject4: "Math 123 : Vectors and Geometry",
    subject5: "STAT 111 : Introduction to Statistics and Probability I",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  mathematicalScienceforComputerScienceSecondSem: {
    subject1: "DCIT 102 : Computer Hardware Fundamentals and Circuits",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus 1",
    subject4: "MATH 126 : Algebra and Geometry",
    subject5: "STAT 112 : Introduction to Statistics and Probabilty II",
    subject6: "UGRC 110 : Academic Writing I",
  },

  mathematicalScienceforActurialScienceFirstSem: {
    subject1: "DCIT 101 : Introduction to Computer Science",
    subject2: "ECON 101 : Introduction to Economics I",
    subject3: "MATH 121 : Alegbra and Trigonometry",
    subject4: "Math 123 : Vectors and Geometry",
    subject5: "STAT 111 : Introduction to Statistics and Probability I",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  mathematicalScienceforActurialScienceSecondSem: {
    subject1: "ECON 102 : Introduction to Economics II",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus 1",
    subject4: "MATH 126 : Algebra and Geometry",
    subject5: "STAT 112 : Introduction to Statistics and Probabilty II",
    subject6: "UGRC 110 : Academic Writing I",
  },

  mathematicalScienceforBioMathSecondSem: {
    subject1: "ABCS 101 : Introduction to Animal Biology",
    subject2: "DCIT 104 : Programming Fundamentals",
    subject3: "MATH 122 : Calculus 1",
    subject4: "MATH 126 : Algebra and Geometry",
    subject5: "STAT 112 : Introduction to Statistics and Probabilty II",
    subject6: "UGRC 110 : Academic Writing I",
  },

  mathematicalScienceforBioMathFirstSem: {
    subject1: "DCIT 101 : Introduction to Computer Science",
    subject2: "BOTN 104 : Growth of Flowering Plants",
    subject3: "MATH 121 : Alegbra and Trigonometry",
    subject4: "Math 123 : Vectors and Geometry",
    subject5: "STAT 111 : Introduction to Statistics and Probability I",
    subject6: "UGRC 150 : Critical Thinking and Practical Reasoning",
  },

  earthScienceFirstSem: {},
  l200ActurialSciFirstSem: {
    subject1: "ECON 201 : Element of Economics I",
    subject2: "STAT 240 : Introduction Statistical Computing",
    subject3: "STAT 220 : Introduction to Acturial Sciences",
    subject4: "UGRC 210 : Academic Writing II",
    subject5: "STAT 201 : Introductory Probability I",
    subject6: "ACTU 203 : Introduction to Financial Mathematics I",
    subject7: "MATH 223 : Calculus II",
    subject8: "STAT 223 : Elementary Statistical Methods",
  },
};

export default options;
