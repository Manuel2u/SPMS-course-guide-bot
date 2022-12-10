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
  l200ActurialSciSecondSem: {
    subject1: "ECON 202 : Element of Economics II",
    subject2: "DCIT 204 : Database Fundamentals",
    subject3: "MATH 225 : Vector Mechanics",
    subject4: "STAT 230 : Data Mining",
    subject5: "STAT 224 : Introductory Probability II",
    subject6: "ACTU 204 : Introduction to Financial Mathematics II",
    subject7: "MATH 224 : Introductory Abstract Algebra",
    subject8: "MATH 220: Introduction to Computational Mathematics",
  },
  l200ComputerScienceFirstSem: {
    subject1: "DCIT 201 : Programming I",
    subject2: "DCIT 203 : Digital and Logic systems design",
    subject3: "DCIT 205 : Multimedia and Web Design",
    subject4: "DCIT 207 : Computer Organization & Architecture",
    subject5: "MATH 223 : Calculus II",
    subject6: "CBAS 210 : Academic Writing II",
  },
  l200ComputerScienceSecondSem: {
    subject1: "DCIT 200 : Internship",
    subject2: "DCIT 202 : Mobile Application Development",
    subject3: "DCIT 204 : Data Structures and Algorithms",
    subject4: "DCIT 206 : Systems Administration",
    subject5: "DCIT 208 : Software Engineering",
    subject6: "DCIT 212 : Numerical and Computational Methods",
    subject7: "UGRC 234 : Intro to African Stud: Philosophy of African",
  },
  l200MathematicsFirstSem: {
    subject2: "Math 223 : Calculus II",
    subject1: "CBAS 210 : Academic Writing II",
    subject3: "MATH 225 : Vector and Mechanics",
    subject4: "MATH 224 : Introductory Probability I",
  },
  l200MathematicsSecondSem: {
    subject1: "STAT 224 : Introductory Probability II",
    subject2: "MATH 220 : Introduction to Computational Mathematics",
    subject3: "MATH 224 : Introductory Abstract Algebra",
    subject4: "MATH 222: Vector Mechanics",
    subject5: "UGRC 234 : Intro to African Stud: Philosophy of African",
  },
  l200StatisticsFirstSem: {
    subject1: "STAT 240 : Introduction Statistical Computing",
  },
  l200StatisticsSecondSem: {},
  l200PhysicsFirstSem: {
    subject1: "CBAS 210 : Academic Writing II",
    subject2: "MATH 223 : Calculus II",
    subject3: "PHYS 205 : Practical Physics III",
    subject4: "PHYS 241 : Atomic Physics and Quantum Phenomena",
    subject5: "PHYS 245 : Electromagnetism I",
    subject6: "STAT 223 : Elementary Statistical Methods",
    subject7: "MATH 225 : Vector and Mechanics",
  },
  l200PhysicsSecondSem: {
    subject2: "PHYS 246 : Nuclear Physics I",
    subject1: "UGRC 234 : Intro to African Stud: Philosophy of African",
    subject3: "PHYS 206 : Practical Physics IV",
    subject4: "PHYS 242 : Oscillations and Waves",
    subject5: "PHYS 244 : Mathematical Methods I",
    subject6: "PHYS 248 : Introduction to Physics of Materials",
    subject7: "PHYS256  : Computational Methods in Physics I",
  },
  l200ChemistryFirstSem: {},

  l300ChemistrySingleMajorFirstSem: {
    subject1: " CHEM 301 : Mathematics for Chemists ",
    subject2: " CHEM 341 : Spectroscopy and Structure Elucidation  ",
    subject3: " CHEM 343 : Chemistry of Aromatic Compounds  ",
    subject4: " CHEM 355 : Inorganic Chemistry II  ",
    subject5: " CHEM 311 : Physical Chemistry Laboratory  ",
    subject6: " CHEM 351 : Inorganic Chemistry Laboratory  ",

  },
  l300ChemistrySingleMajorSecondSem: {
    subject1: " CHEM 312 : Thermodynamics I  ",
    subject2: " CHEM 344 : Carbanions and their Reactions ",
    subject3: " CHEM 346 : Molecular Rearrangement Reactions ",
    subject4: " CHEM 352 : Coordination Chemistry  ",
    subject5: " CHEM 374 : Analytical Chemistry II ",
    subject6: " CHEM 332 : Organic Chemistry Laboratory II ",
    subject7: " CHEM 372 : Analytical Chemistry Laboratory II  ",
  },

  l300ChemistryCombineMajorFirstSem: {
    subject1: "CHEM 343 : Chemistry of Aromatic Compounds ",
    subject2: "CHEM 355 :  Inorganic Chemistry II ",
    subject3: "CHEM 311 :  Physical Chemistry Laboratory ",
    subject4: "CHEM 351 : Inorganic Chemistry Laboratory",


  },
  l300ChemistryCombineMajorSecondSem: {
    subject1: "CHEM 312 : Thermodynamics I ",
    subject2: "CHEM 374 : Analytical Chemistry II ",
    subject3: "CHEM 344 : Carbanions and their Reactions",
    subject4: "CHEM 346 : Molecular Rearrangement Reactions ",
    subject5: "CHEM 352 : Coordination Chemistry",
    subject6: "CHEM 332 : Organic Chemistry Laboratory II",
    subject7: "CHEM 372 : Analytical Chemistry Laboratory II",
  },

  l300ComputerScienceSingleMajorFirstSem: {
    subject1: "DCIT 301 : Operating Systems",
    subject2: "DCIT 303 : Computer Networks",
    subject3: "DCIT 305 : Database Fundamentals",
    subject4: "DCIT 313 : Introduction to Artificial Intelligence",
    subject5: "MATH 359 : Discrete Mathematics",
    subject6: "DCIT 307 : Mini-Project  ",
    subject7: "DCIT 309 : Embedded Systems and IoT ",
    subject8: "DCIT 311 : Machine Learning ",

  },
  l300ComputerScienceSingleMajorSecondSem: {
    subject1: "DCIT 302 : Human Computer Interaction",
    subject2: "DCIT 304 : Research Methods",
    subject3: "DCIT 308 : Data Structures and Algorithms II",
    subject4: "DCIT 312 : Information Security Management",
    subject5: "DCIT 318 : Programming II ",
    subject6: "DCIT 306 : Cloud Computing",
    subject7: "DCIT 316 : Computational models for Social Media Mining",

  },
  l300ComputerScienceCombineMajorFirstSem: {
    subject1: "DCIT 301 : Operating Systems ",
    subject2: "DCIT 303 : Computer Networks  ",
    subject3: "DCIT 305 : Database Fundamentals ",
    subject4: "DCIT 309 : Embedded Systems and IoT ",
    subject5: "DCIT 313 : Introduction to Artificial Intelligence  ",

  },
  l300ComputerScienceCombineMajorSecondSem: {
    subject1: "DCIT 302 : Human Computer Interaction ",
    subject2: "DCIT 308 : Data Structures and Algorithms II ",
    subject3: "DCIT 304 : Research Methods",
    subject4: "DCIT 318 : Programming II",

  },



};

export default options;
