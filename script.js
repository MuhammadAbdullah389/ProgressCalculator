// DropDOwn items accessed
const courseNatureSelect = document.querySelector("#courseNature");
const theoryOnly = document.querySelector("#theory");
const theoryAndLab = document.querySelector("#theoryAndLab");
const close = document.querySelector(".end");
const popup = document.querySelector(".pop");
let msg = document.querySelector("#msg");
let tquizes = 0;
let tassignments = 0;
let tmid = 0;
let tfinal = 0;
let obtained = 0;
let total = 0;
//Buttons accessed for event listening be triggered
const onlybtn = document.querySelector("#theoryProgress");
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

let x = (calculated) => {
  if (calculated <= 15){
    return "4.0";
  }
  else if (calculated <= 20){
    return "3.66";
  }else if (calculated <= 25) {
    return "3.00";
  }else if (calculated <= 30) {
    return "3.00";
  }else if (calculated <= 35) {
    return "2.66";
  }else if (calculated <= 35) {
    return "2.66";
  }else if (calculated <= 39) {
    return "2.33";
  }else if (calculated <= 42) {
    return "2.00";
  }else if (calculated <= 45) {
    return "1.66";
  }else if (calculated <= 50) {
    return "1.00";
  }else {
    return "F"
  }
}
// Only Theory access variables
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


let accumulator = (list, value) => {
  value = 0;
  if (list.value !== "" && !isNaN(list.value)) {
    value += parseFloat(list.value);
  }
  return value;
};

let listAccumulator = (list, value) => {
  value = 0;
  const items = Array.from(list);
  items.forEach((mark) => {
    if (mark.value !== "" && !isNaN(mark.value)) {
      value += parseFloat(mark.value); // Add only valid numbers
    }
  });
  return value;
};
let daccumulator = (list, value) => {
  value = 0;
  if (list.value !== "" && !isNaN(list.value)) {
    value += parseFloat(list.value);
  }
  if (value == 0){
    value = 1;
  }
  return value;
};

let dlistAccumulator = (list, value) => {
  value = 0;
  const item = Array.from(list);
  item.forEach((mark) => {
    if (mark.value !== "" && !isNaN(mark.value)) {
      value += parseFloat(mark.value); // Add only valid numbers
    }
  });
  if (value == 0){
    value = 1;
  }
  return value;
};

//Only theory functions
let Calc = () => {
  onlyTheoryMidObtainedMarks = accumulator(onlyTheoryMidObtained, onlyTheoryMidObtainedMarks);
  onlyTheoryQuizTotal = dlistAccumulator(onlyTheoryQuizTotalList, onlyTheoryQuizTotal);
  onlyTheoryQuizObtained = listAccumulator(onlyTheoryQuizObtainedList, onlyTheoryQuizObtained);
  onlyTheoryFinalTotalMarks = daccumulator(onlyTheoryFinalTotal, onlyTheoryFinalTotalMarks);
  onlyTheoryAssignmentObtained = listAccumulator(
    onlyTheoryAssignmentObtainedList,
    onlyTheoryAssignmentObtained
  );
  onlyTheoryAssignmentTotal = dlistAccumulator(onlyTheoryAssignmentTotalList, onlyTheoryAssignmentTotal);
  onlyTheoryMidTotalMarks = daccumulator(onlyTheoryMidTotal, onlyTheoryMidTotalMarks);
  onlyTheoryFinalObtainedMarks = accumulator(onlyTheoryFinalObtained, onlyTheoryFinalObtainedMarks);

  if (onlyTheoryMidObtainedMarks > onlyTheoryMidTotalMarks || onlyTheoryFinalObtainedMarks > onlyTheoryFinalTotalMarks || onlyTheoryAssignmentObtained > onlyTheoryAssignmentTotal || onlyTheoryQuizObtained > onlyTheoryQuizTotal){
    return false;
  }else{
    return true;
  }

};

//Checking entered fields
let status1 = () => {
  tquizes = 0;
  tassignments = 0;
  tfinal = 0;
  tmid = 0;
  onlyTheoryQuizTotalList.forEach((input) => {
    if (input.value.trim() !== "" && !isNaN(input.value.trim()) && input.value != 0) {
      tquizes++;
    }
  });
  onlyTheoryAssignmentTotalList.forEach((input) => {
    if (input.value.trim() !== "" && !isNaN(input.value.trim()) && input.value != 0) {
      tassignments++;
    }
  });
  if (
    onlyTheoryFinalTotal.value.trim() !== "" &&
    !isNaN(onlyTheoryFinalTotal.value.trim()) && onlyTheoryFinalTotal.value != 0
  ) {
    tfinal++;
  }
  if (
    onlyTheoryMidTotal.value.trim() !== "" &&
    !isNaN(onlyTheoryMidTotal.value.trim()) && onlyTheoryMidTotal.value != 0
  ) {
    tmid++;
  }
};

let finalizer = () => {
  if (Calc()){
    obtained = (onlyTheoryQuizObtained / onlyTheoryQuizTotal * (tquizes * (15/4))) + (onlyTheoryAssignmentObtained / onlyTheoryAssignmentTotal * (tassignments * (10/4))) + (onlyTheoryMidObtainedMarks / onlyTheoryMidTotalMarks * (tmid * 25)) + (onlyTheoryFinalObtainedMarks / onlyTheoryFinalTotalMarks * (tfinal * 50));

    total = (tquizes * (15/4)) + (tassignments * (10/4)) + (tmid * 25) + (tfinal * 50);
    let m = total - obtained;
    let c = x(m);
    msg.innerText = `Your Ongoing progress is ${obtained} / ${total} and you can get ${c}`;
  }else{
    msg.innerText = "OOPS! It seems that you are entering obtained marks more than total marks. Check again";
  }

};
onlybtn.addEventListener("click", () => {
  status1();
  finalizer();
  
});


function openPopup() {
  popup.style.display = 'block';
}

close.onclick = function() {
  popup.style.display = 'none';
}

  // window.onclick = function(event) {
  //   if (event.target !== popup) {
  //       popup.style.display = 'none';
  //   }
  // }


// Open the popup when the page loads
window.onload = function() {
  openPopup();
};