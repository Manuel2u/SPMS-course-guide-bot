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
  },
  continuingStudentsMajorMinorOptions: {
    option1: "Geology with Physics",
    option2: "Geology with Mathematics",
    option3: "Geology with Chemistry",
    option4: "Mathematics with Physics",
    option5: "Mathematics with Computer Science",
    option6: "Mathematics with Statistics",
    option7: "Mathematics with Geology",
    option13: "Physics with Statistics",
    option8: "Physics with Computer Science",
    option9: "Physics with Geology",
    option10: "Physics with Mathematics",
    option11: "Statistics with Computer Science",
    option12: "Statistics with Mathematics",
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

  earthScienceFirstSem: {
    subject1: "PHYS 105 : Pratical Physics I",
    subject2: "PHYS 143 : Mechanics and Thermal Physics",
    subject3: "CHEM 113 : Foundation Chemistry I",
    subject4: "CHEM 120 : General Chemistry Laboratory I",
    subject5: "EASC 101 : Physical Geology",
    subject6: "MATH 121 : Algebra and Trigonometry",
    subject7: "MATH 123 : Vectors and Geometry",
    subject8: "DCIT 101 : Introduction to Computer Science" ,
    subject9: "STAT 111 : Introduction to Statistics and Probability I"
  },

  earthScienceSecondSem: {
    subject1: "PHYS 106 : Pratical Physics II",
    subject2: "PHYS 144 : Electricity and Magnetism",
    subject3: "CHEM 114 : Foundation Chemistry II",
    subject4: "EASC 104 : Historical Geology",
    subject5: "EASC 106 Geological Field Excursions",
    subject6: "MATH 122 : Calculus I",
    subject7: "MATH 126 : Algebra and Geometry",
    subject8: "DCIT 104 : Programming Fundamentals" ,
    subject9: "STAT 112 : Introduction to Statistics and Probability II"
  },

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
    subject2: "UGRC 210 / UGRC 220 : Academic Writing II/ Introduction to African Studies",
    subject3: "STAT 221 : Introductory Probability I", 
    subject4: "STAT 223 : Elementary Statistical Methods",
    subject5: "MATH 223 : Calculus II",
    subject6: "ACTU 203 Introduction to Financial Mathematics I", 
    subject7: "STAT 220 Introduction to Actuarial Science", 
    subject8: "STAT 230 Data Mining",
  },
  
  l200StatisticsSecondSem: {
    subject1: "UGRC 210/UGRC 220 : Academic Writing II/ Introduction to African Studies",
    subject2: "STAT 222 : Introduction to Regression and Time Series Analysis",
    subject3: "STAT 224 : Introductory Probability II",
    subject4: "STAT 226 : Official Statistics",
    subject5: "ACTU 204 : Introduction to Financial Mathematics II",
    subject6: "STAT 220: Introduction to Actuarial Sciences",
    subject7: "MATH 224 Introduction to Abstract Algebra 3 MATH 126",
    subject8: "STAT 228 Introduction to Non-Parametric Statistics 3 STAT 223",
    subject9: "STAT 230 Data Mining",
  },
  
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
    subject1: "PHYS 246 : Nuclear Physics I",
    subject2: "UGRC 234 : Intro to African Stud: Philosophy of African",
    subject3: "PHYS 206 : Practical Physics IV",
    subject4: "PHYS 242 : Oscillations and Waves",
    subject5: "PHYS 244 : Mathematical Methods I",
    subject6: "PHYS 248 : Introduction to Physics of Materials",
    subject7: "PHYS256 : Computational Methods in Physics I",
  },

  l200ChemistryFirstSem: {
    subject1: "CHEM 217 : Physical Chemistry I",
    subject2: "CHEM 233 : Organic Chemistry I",
    subject3: "CHEM 271 : Foundation Chemistry III",
    subject4: "CHEM 215 : Structure and Bonding",
    subject5: "CHEM 203 : Analytical Chemistry Laboratory",
    subject6: "UGRC"
  },

  l200ChemistrySecondSem: {
    subject1: "CHEM 234 : Organic Chemistry II",
    subject2: "CHEM 252 : Inorganic Chemistry I", 
    subject3: "CHEM 272 : Analytical Chemistry I",
    subject4: "CHEM 216 : Chemistry of Materials",
    subject5: "CHEM 204 : Organic Chemistry Laboratory I",
    subject6: "UGRC"
  },

  l200GeophysicsFirstSem: {
    subject1: "UGRC 210 : Writing Academic II",
    subject2: "PHYS 205 : Practical Physics III", 
    subject3: "PHYS 245 : Electromagnetism I",
    subject4: "MATH 223 : Calculus II",
    subject5: "PHYS 241 : Atomic Physics and Quantum Phenomena", 
    subject6: "EASC 227 : Geological Structures and Maps", 
    subject7: "EASC 220 : Geological Field Exercises I", 
    subject8: "EASC 225 : Quantitative Geology",
    subject9: "MATH 225 : Vectors and Mechanics",
    subject10: "STAT 223 : Elementary Statistical Methods"
  },

  l200GeophysicsSecondSem: {
    subject1: "UGRC 220/238 : Introduction to African Studies",
    subject2: "PHYS 206 : Practical Physics IV",
    subject3: "PHYS 242 : Oscillations and Waves",
    subject4: "MATH 223 : Calculus II", 
    subject5: "PHYS 244 : Mathematical Methods I", 
    subject6: "PHYS 246 : Nuclear Physics I",
    subject7: "PHYS 248 : Introduction to Physics of Materials", 
    subject8: "PHYS 256 : Computational Methods in Physics I",
    subject9: "EASC 216 : Fundamentals of Geophysics",
  },

  l200ITFirstSem: {
    subject1: "UGRC 210 : Academic Writing II",
    subject2: "DCIT 201 : Programming I" ,
    subject3: "DCIT 203 : Digital and Logic Systems Design",
    subject4: "DCIT 205 : Multi Media and Web Design" ,
    subject5: "DCIT 207 : Computer Organization and Architecture", 
    subject6: "DCIT 209 : E-Business Architectures" ,
  },

  l200ITSecondSem: {
    subject1: "UGRC 220/238 : Introduction to African Studies",
    subject2: "DCIT 202 : Mobile Application Development" ,
    subject3: "DCIT 204 : Data Structures & Algorithm I",
    subject4: "DCIT 206 : Systems Administration" ,
    subject5: "DCIT 208 : Software Engineering" ,
    subject6: "DCIT 200 : Internships" ,
    subject7: "DCIT 212 : Numerical and Computational Methods", 
    subject8: "DCIT 214 : Information Modeling and Specification" ,
  },

  l200ChemistryAndPhysicsFirstSem: {
    subject1: "UGRC 210: Academic Writing II",
    subject2: "CHEM 233: Organic Chemistry I",
    subject3: "CHEM 271: Foundation Chemistry III",
    subject4: "CHEM 215: Structure and Bonding",
    subject5: "CHEM 203: Analytical Chemistry Laboratory I",
    subject6: "CHEM 217: Physical Chemistry I",
    subject7: "PHYS 205 Practical Physics III",
    subject8: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject9: "PHYS 245: Electromagnetism I",
    subject10: "MATH 223: Calculus II",
  },

  l200ChemistryAndPhysicsSecondSem: {
    subject1: "UGRC220/238: Introduction to African Studies",
    subject2: "CHEM 234: Organic Chemistry II",
    subject3: "CHEM 252: Inorganic Chemistry I",
    subject4: "CHEM 272: Analytical Chemistry I",
    subject5: "CHEM 204: Organic Chemistry Laboratory I",
    subject6: "CHEM 216: Chemistry of Materials",
    subject7: "PHYS 206 Practical Physics IV",
    subject8: "PHYS 242: Oscillations and Waves",
    subject9: "PHYS 244: Mathematical Methods I",
  },

  l200ComputerScienceandPhysicsFirstSem: {
    subject1: "UGRC 210: Academic Writing II",
    subject2: "DCIT 201: Programming I",
    subject3: "DCIT 203: Digital and Logic Systems Design",
    subject4: "PHYS 205: Practical Physics III",
    subject5: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject6: "PHYS 245: Electromagnetism I",
    subject7: "MATH 223: Calculus II",
  },
  
  l200ComputerScienceandPhysicsSecondSem: {
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "DCIT 202: Mobile Application Development",
    subject3: "DCIT 204: Data Structures and Algorithms",
    subject4: "DCIT 208 Software Engineering",
    subject5: "PHYS 206: Practical Physics IV",
    subject6: "PHYS 242: Oscillations and Waves",
    subject7: "PHYS 244: Mathematical Methods I",
  },

  l200MathematicsandPhysicsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "MATH 225: Vectors and Mechanics",
    subject3: "MATH 223: Calculus II",
    subject4: "PHYS 205: Practical Physics III",
    subject5: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject6: "PHYS 245: Electromagnetism I",
  },

  
  l200MathematicsandPhysicsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "MATH 224: Introductory Abstract Algebra",
    subject3: "MATH 222: Vector Mechanics",
    subject4: "MATH 220: Introductory Computational Mathematics",
    subject5: "PHYS 206: Practical Physics IV",
    subject6: "PHYS 242: Oscillations and Waves",
    subject7: "PHYS 244: Mathematical Methods I",
  },

  l200MathematicsandStatisticsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "MATH 225: Vectors and Mechanics",
    subject3: "MATH 223: Calculus II",
    subject4: "STAT 221 Introductory Probability I", 
    subject5: "STAT 223: Elementary Statistical Methods", 
    subject6: "STAT 230: Data Mining",
  },

  l200MathematicsandStatisticsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "MATH 224: Introductory Abstract Algebra",
    subject3: "MATH 222: Vector Mechanics",
    subject4: "MATH 220: Introductory Computational Mathematics",
    subject5: "STAT 224 Introductory Probability II", 
    subject6: "STAT 226: Official Statistics", 
    subject7: "STAT 222: Introduction to Regression and Time Series",
  },

  l200PhysicsandStatisticsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "PHYS 205: Practical Physics III",
    subject3: "PHYS 241: Atomic Physics and Quantum Phenomena",
    subject4: "PHYS 245: Electromagnetism I",
    subject5: "STAT 221 Introductory Probability I", 
    subject6: "STAT 223: Elementary Statistical Methods", 
    subject7: "STAT 230: Data Mining",
    subject8: "MATH 223: Calculus II",
  },

  l200PhysicsandStatisticsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "STAT 224 Introductory Probability II", 
    subject3: "STAT 226: Official Statistics", 
    subject4: "STAT 222: Introduction to Regression and Time Series",
    subject5: "PHYS 206: Practical Physics IV",
    subject6: "PHYS 242: Oscillations and Waves",
    subject7: "PHYS 244: Mathematical Methods I",
  },

  l200ComputerScienceandStatisticsFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "DCIT 201: Programming I",
    subject3: "DCIT 203: Digital and Logic Systems Design",
    subject4: "MATH 223: Calculus II",
    subject5: "STAT 221 Introductory Probability I", 
    subject6: "STAT 223: Elementary Statistical Methods", 
    subject7: "STAT 230: Data Mining",
  },

  l200ComputerScienceandStatisticsSecondSem:{
    subject1: "UGRC 220: Introduction to African Studies",
    subject2: "DCIT 202: Mobile Application Development",
    subject3: "DCIT 204: Data Structures and Algorithms",
    subject4: "DCIT 208 Software Engineering",
    subject5: "STAT 224 Introductory Probability II", 
    subject6: "STAT 226: Official Statistics", 
    subject7: "STAT 222: Introduction to Regression and Time Series",
  },

  l200ChemistryandBiologicalScienceFirstSem:{
    subject1: "UGRC 210: Academic Writing II",
    subject2: "CHEM 233: Organic Chemistry I",
    subject3: "CHEM 271: Foundation Chemistry III",
    subject4: "CHEM 215: Structure and Bonding",
    subject5: "CHEM 203: Analytical Chemistry Laboratory I",
    subject6: "CHEM 217: Physical Chemistry I",




  },

l200ChemistryaandBiologicalScienceSecondSem:{
    subject1: "UGRC220/238: Introduction to African Studies",
    subject2: "CHEM 234: Organic Chemistry II",
    subject3: "CHEM 252: Inorganic Chemistry I",
    subject4: "CHEM 272: Analytical Chemistry I",
    subject5: "CHEM 204: Organic Chemistry Laboratory I",
    subject6: "CHEM 216: Chemistry of Materials",



},

  l300ActurialScienceSingleMajorFirstSem: {
    subject1: "STAT 331: Probability Distributions",
    subject2: "MATH 351/STAT 339 :Linear Algebra/Methods of Linear Algebra",
    subject3: "ACTU 301: Life Contingencies I ",
    subject4: "FINC 301 : Introduction to Business Finance",
    subject5: "MATH 355 : Calculus of Several Variables",
    subject6: "STAT 333: Statistical Inference I",
    subject7: "MATH 359: Discrete Mathematics ",
    subject8: "STAT 335 : Sample Survey Methods ",
    subject9: "MATH 353 : Analysis I",
    subject10: "MATH 358 : Computational Mathematics I ",
    subject11: "ACTU 320: Internship in Actuarial Science (either 1st or 2nd Semester) *",
    subject12: "ACTU 335 : Microeconomic Theory for Actuaries I ",
    subject13: "ACTU 359 : Risk Management and Insurance  ",

  },

  l300ActurialScienceSingleMajorSecondSem: {
    subject1: "STAT 332 : Multivariate Distributions",
    subject2: "ACTU 304 : Life Contingencies II  ",
    subject3: "MATH 350 : Differential Equations I*",
    subject4: "ACTU 302 : Introduction to Actuarial Computing",
    subject5: "MATH 356 : Analysis II",
    subject6: "CSCD 314 : Operations Research ",
    subject7: "MATH 354 :Abstract Algebra I** ",
    subject8: "STAT 334 : Statistical Inference II  ",
    subject9: "ACTU 334 :  Microeconomic Theory for Actuaries II  ",
    subject10: "FINC 352 : Principle and Practice of Insurance  ",
    subject11: "STAT 338 : Decision Theory ",
    subject12: " STAT 356 : Life Insurance and Retirement Security  ",
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

 l300MathematicsSingleMajorFirstSem: {
   subject1: "MATH 351 : Linear Algebra  ",
   subject2: "MATH 353 : Analysis I  ",
   subject3: "MATH 355 : Calculus of Several Variables ",
   subject4: "iMATH 350: Differential Equations I ",
   subject5: "MATH 359 : Discrete Mathematics  ",
   subject6: "MATH 361 : Classical Mechanics  ",
   subject7: "MATH 363 : Introductory concepts of financial mathematics ",
   subject8: "STAT 331 : Probability distributions  ",
  },

  l300MathematicsSingleMajorSecondSem: {
    subject1: "MATH 354 : Abstract Algebra I  ",
    subject2: "MATH 356 : Analysis II ",
    subject3: "MATH 372 : Topology  ",
    subject4: "iMATH 350: Differential Equations I  ",
    subject5: "MATH 366 : Electromagnetic Theory I  ",
    subject6: "MATH 362 : Analytical Mechanics  ",
    subject7: "MATH 358 : Computational Mathematics I ",
    subject8: "MATH 368 : Introductory number theory  ",
    subject9: " STAT 332 : Multivariate distributions  ",
  },


  l300StatisticsSingleMajorFirstSem: {
    subject1: "STAT 331 : Probability Distributions",
    subject2: "STAT 333 : Statistical Inference I ",
    subject3: "STAT 335 : Sampling Survey Methods",
    subject4: "MATH351/STAT: Linear Algebra/Methods of Linear ",
    subject5: "ACTU 301  : Life Contingency I ",
    subject6: " STAT 337 : Introduction to Operations Research",
    subject7: " MATH 353 : Analysis I ",
    subject8: "MATH 355  : Calculus of Several Variables",
    subject9: "MATH 359 : Discrete Mathematics ",

  },
  l300StatisticsSingleMajorSecondSem: {
    subject1: "STAT 332 : Multivariate Distributions ",
    subject2: "STAT 334 : Statistical Inference II  ",
    subject3: "STAT 336 : Design of Experiments  ",
    subject4: "MATH 350 : Differential Equations I ",
    subject5: "DCIT 308 : Data Structures and Algorithms  ",
    subject6: "ACTU 332 : Life Contingency II  ",
    subject7: "STAT 338 Decision Theory  ",
    subject8: "MATH 356 Analysis II",

  }, 


  l300PhysicsSingleMajorFirstSem: {
    subject1: "PHYS 305 : Practical Physics V  ",
    subject2: "PHYS 343 : Thermodynamics ",
    subject3: "PHYS 345 : Electromagnetism II  ",
    subject4: "PHYS 359 : Solid State Physics I ",
    subject5: "PHYS 351 : Optics  ",
    subject7: "PHYS 361 : Physics of the Atmosphere ",
    subject8: "PHYS 347 : Electronics I  ",
    subject9: "PHYS 365 : Physics of the Ocean  ",
    subject10: "EASC 339 : Principles of Applied Geophysics ",


  },
  l300PhysicsSingleMajorSecondSem: {
    subject1: "PHYS 306 : Practical Physics VI ",
    subject2: "PHYS 342 : Classical Mechanics  ",
    subject3: "PHYS 344 : Mathematical Methods II  ",
    subject4: "PHYS 352 : Quantum Mechanics I ",
    subject5: "PHYS 354 Special Relativity  ",
    subject6: "PHYS 356 : Computational Methods in Physics II ",
    subject8: "PHYS 364 : Principles and Applications of Neutron Activation Analysis ",
    subject9: "STAT 336 : Design of Experiments ",

  },

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

  l300GeologySingleMajorFirstSem: {
    subject1: " ",
  },

  l300GeologySingleMajorSecondSem: {
    subject1: " ",
  },



  l300GeophysicsSingleMajorFirstSem: {
    subject1: " ",
  },

  l300GeophysicsSingleMajorSecondSem: {
    subject1: " ",
  },




  l300AppliedGeophysicsSingleMajorFirstSem: {
    subject1: " ",
  },

  l300AppliedGeophysicsSingleMajorSecondSem: {
    subject1: " ",
  },



  l300BiomathematicsSingleMajorFirstSem: {
    subject1: " ",
  },

  l300BiomathematicsSingleMajorSecondSem: {
    subject1: " ",
  },



  l300InformationTechnologySingleMajorFirstSem: {
    subject1: "DCIT 301 : Operating Systems  ",
    subject2: "DCIT 303 : Computer Networks  ",
    subject3: "DCIT 305 : Database Fundamentals ",
    subject4: " DCIT 313 : Introduction to Artificial Intelligence",
    subject5: "DCIT 317 : IT Project Management  ",
    subject6: "DCIT 307 : Mini-Project  ",
    subject7: "DCIT 315 : Principles of 3D Environment   ",
    subject8: "DCIT 321 Software Evolution   ",

  },
  l300InformationTechnologySingleMajorSecondSem: {
    subject1: "DCIT 302 : Human Computer Interaction  ",
    subject2: "DCIT 304 : Research Methods ",
    subject3: " DCIT 308 : Data Structures and Algorithms II  ",
    subject4: "DCIT 312 : Information Security Management ",
    subject5: "DCIT 318 : Programming II  ",
    subject6: "DCIT 314 Game Engine Architecture ",
    subject7: "DCIT 322 Database Management Administration ",

  },






  l300AppliedGeologySingleMajorFirstSem: {
    subject1: " ",
  },

  l300AppliedGeologySingleMajorSecondSem: {
    subject1: " ",
  },









};

export default options;
