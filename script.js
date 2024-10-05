// DropDOwn items accessed
const courseNatureSelect = document.querySelector("#courseNature");
const theoryOnly = document.querySelector("#theory");
const theoryAndLab = document.querySelector("#theoryAndLab");

//Buttons accessed for event listening be triggered
const onlybtn = document.querySelector("#theoryProgress");
const btn = document.querySelector("#theoryLabProgress");

//Toggle between course types
courseNatureSelect.addEventListener("change", () => {
  if (courseNatureSelect.value == "theory") {
    theoryOnly.style.display = "block";
    theoryAndLab.style.display = "none";
  } else {
    theoryOnly.style.display = "none";
    theoryAndLab.style.display = "block";
  }
});

// Only Theory access variables
let trimmedValue;
let onlyTheoryQuizTotal = 0;
let onlyTheoryQuizObtained = 0;
let onlyTheoryAssignmentTotal = 0;
let onlyTheoryAssignmentObtained = 0;
let onlyTheoryMidTotalMarks = 0;
let onlyTheoryMidObtainedMarks = 0;
let onlyTheoryFinalTotalMarks = 0;
let onlyTheoryFinalObtainedMarks = 0;

// Only theory score variables
let onlyTheoryQuizTotalList = document.querySelectorAll(".quizTotal");
let onlyTheoryQuizObtainedList = document.querySelectorAll(".quizObtained");

let onlyTheoryAssignmentTotalList =
  document.querySelectorAll(".assignmentTotal");
let onlyTheoryAssignmentObtainedList = document.querySelectorAll(
  ".assignmentObtained"
);

let onlyTheoryMidTotal = document.querySelector("#midt");
let onlyTheoryMidObtained = document.querySelector("#mid");

let onlyTheoryFinalTotal = document.querySelector("#finalt");
let onlyTheoryFinalObtained = document.querySelector("#final");
//Lab + Theory score variables
let theoryQuizTotalList = document.querySelectorAll(".theoryQuizTotal");
let theoryQuizObtainedList = document.querySelectorAll(".theoryQuizObtained");

let theoryAssignmentTotalList = document.querySelectorAll(
  ".theoryAssignmentTotal"
);
let theoryAssignmentObtainedList = document.querySelectorAll(
  ".theoryAssignmentObtained"
);

let theoryMidTotal = document.querySelector("#tmidt");
let theoryMidObtained = document.querySelector("#tmid");

let theoryFinalTotal = document.querySelector("#tfinalt");
let theoryFinalObtained = document.querySelector("tfinal");

let labAssignmentTotalList = document.querySelectorAll(".labAssignmentTotal");
let labAssignmentObtainedList = document.querySelectorAll(
  ".labAssignmentObtained"
);

let labMidTotal = document.querySelector("#lmidt");
let labMidObtained = document.querySelector("#lmid");

let labFinalTotal = document.querySelector("lfinalt");
let labFinalObtained = document.querySelector("lfinal");

let accumulator = (list, value) => {
  value = 0;
  if (list.value !== "" && !isNaN(list.value)) {
    value += parseFloat(list.value);
  }
  console.log(value);
};

let listAccumulator = (list, value) => {
  value = 0;
  list.forEach((mark) => {
    if (mark.value !== "" && !isNaN(mark.value)) {
      value += parseFloat(mark.value); // Add only valid numbers
    }
  });
  console.log(value);
};

//Only theory functions
let onlyTheoryQuizTotalMarksCalc = () => {
  listAccumulator(onlyTheoryQuizTotalList, onlyTheoryQuizTotal);
};

let onlyTheoryQuizObtainedMarksCalc = () => {
  listAccumulator(onlyTheoryQuizObtainedList, onlyTheoryQuizObtained);
};

let onlyTheoryAssignmentObtainedMarksCalc = () => {
  listAccumulator(
    onlyTheoryAssignmentObtainedList,
    onlyTheoryAssignmentObtained
  );
};

let onlyTheoryAssignmentTotalMarksCalc = () => {
  listAccumulator(onlyTheoryAssignmentTotalList, onlyTheoryAssignmentTotal);
};
let onlyTheoryMidTotalCalc = () => {
  accumulator(onlyTheoryMidTotal, onlyTheoryMidTotalMarks);
};
let onlyTheoryMidObtainedCalc = () => {
  accumulator(onlyTheoryMidObtained, onlyTheoryMidObtainedMarks);
};
let onlyTheoryFinalTotalCalc = () => {
  accumulator(onlyTheoryFinalTotal, onlyTheoryFinalTotalMarks);
};

let onlyTheoryFinalObtainedCalc = () => {
  accumulator(onlyTheoryFinalObtained, onlyTheoryFinalObtainedMarks);
};

//Lab + Thepory functions
let theoryQuizTotalMarksCalc = () => {};
let theoryQuizObtainedMarksCalc = () => {};
let theoryAssignmentObtainedMarksCalc = () => {};
let theoryAssignmentTotalMarksCalc = () => {};

let quizTotalMarksCalc = () => {};
let quizObtainedMarksCalc = () => {};
let assignmentObtainedMarksCalc = () => {};
let assignmentTotalMarksCalc = () => {};

onlybtn.addEventListener("click", () => {
  onlyTheoryQuizTotalMarksCalc();
});
