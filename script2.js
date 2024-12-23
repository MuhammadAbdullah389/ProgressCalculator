let header = document.querySelector("header");
let message = document.createElement("h3");
// Use of Local Storage
const storedName = localStorage.getItem('username');
if (!storedName) {
    const userName = prompt("Welcome! What's your name?");
    if (userName) {
        localStorage.setItem('username', userName);
        message.innerText = `Hello, ${userName}! Welcome to site.`;
    } else {
        message.innerText = "Hello! Welcome to site.";
    }
} else {
    message.innerText = `Welcome back, ${storedName}!`;
}
header.appendChild(message);
message.style.marginTop = "10px";


const generator = document.querySelector("#generator");
const content = document.querySelector("#marking");
let credits = document.querySelector("#credits");
let tcredits = document.querySelector("#tcredits");
let lcredits = document.querySelector("#lcredits");
let dis = document.querySelector("#x1");
let msg2 = document.querySelector("#msg2");
let to = 0, tt = 0; lo = 0 ; lt = 0;
const btn = document.querySelector("#theoryLabProgress");
let totalResult = 0;
let obtainedResult = 0;
let Result = 0;
let Credits = 0;
let tCredits = 0;
let lCredits = 0;
let quizes = 0;
let assignments = 0;
let final = 0;
let mid = 0;
let lassignments = 0;
let lfinal = 0;
let lmid = 0;
// Lab + Theory access variables
let theoryQuizTotal = 0;
let theoryQuizObtained = 0;
let theoryAssignmentTotal = 0;
let theoryAssignmentObtained = 0;
let theoryMidTotalMarks = 0;
let theoryMidObtainedMarks = 0;
let theoryFinalTotalMarks = 0;
let theoryFinalObtainedMarks = 0;
let labAssignmentTotal = 0;
let labAssignmentObtained = 0;
let labMidTotalMarks = 0;
let labMidObtainedMarks = 0;
let labFinalTotalMarks = 0;
let labFinalObtainedMarks = 0;
//
let theoryQuizTotalList = document.querySelectorAll(".theoryQuizTotal");
let theoryQuizObtainedList = document.querySelectorAll(".theoryQuizObtained");
let theoryAssignmentTotalList = document.querySelectorAll(".theoryAssignmentTotal");
let theoryAssignmentObtainedList = document.querySelectorAll(".theoryAssignmentObtained");
let theoryMidTotal = document.querySelector("#tmidt");
let theoryMidObtained = document.querySelector("#tmid");
let theoryFinalTotal = document.querySelector("#tfinalt");
let theoryFinalObtained = document.querySelector("#tfinal");
let labAssignmentTotalList = document.querySelectorAll(".labAssignmentTotal");
let labAssignmentObtainedList = document.querySelectorAll(".labAssignmentObtained");
let labMidTotal = document.querySelector("#lmidt");
let labMidObtained = document.querySelector("#lmid");
let labFinalTotal = document.querySelector("#lfinalt");
let labFinalObtained = document.querySelector("#lfinal");

let Calculate = () => {
    theoryMidObtainedMarks = accumulator(theoryMidObtained, theoryMidObtainedMarks);
    theoryQuizTotal = dlistAccumulator(theoryQuizTotalList, theoryQuizTotal);
    theoryQuizObtained = listAccumulator(theoryQuizObtainedList, theoryQuizObtained);
    theoryFinalTotalMarks = daccumulator(theoryFinalTotal, theoryFinalTotalMarks);
    theoryAssignmentObtained = listAccumulator(theoryAssignmentObtainedList,theoryAssignmentObtained);
    theoryAssignmentTotal = dlistAccumulator(theoryAssignmentTotalList, theoryAssignmentTotal);
    theoryMidTotalMarks = daccumulator(theoryMidTotal, theoryMidTotalMarks);
    theoryFinalObtainedMarks = accumulator(theoryFinalObtained, theoryFinalObtainedMarks);
    labAssignmentObtained = listAccumulator(labAssignmentObtainedList, labAssignmentObtained);
    labAssignmentTotal = dlistAccumulator(labAssignmentTotalList, labAssignmentTotal);
    labMidObtainedMarks = accumulator(labMidObtained,labMidObtainedMarks);
    labMidTotalMarks = daccumulator(labMidTotal, labMidTotalMarks);
    labFinalObtainedMarks = accumulator(labFinalObtained, labFinalObtainedMarks);
    labFinalTotalMarks = daccumulator(labFinalTotal , labFinalTotalMarks );

    if (theoryMidObtainedMarks > theoryMidTotalMarks || theoryFinalObtainedMarks > theoryFinalTotalMarks || theoryAssignmentObtained > theoryAssignmentTotal || theoryQuizObtained > theoryQuizTotal || labAssignmentObtained > labAssignmentTotal || labMidObtainedMarks > labMidTotalMarks || labFinalObtainedMarks > labFinalTotalMarks){
      return false;
    }else{
      return true;
    }
  };

  let status2 = () => {
    quizes = 0;
    assignments = 0;
    final = 0;
    mid = 0;
    lassignments = 0;
    lfinal = 0;
    lmid = 0;

    theoryQuizTotalList.forEach((input) => {
        if (input.value.trim() !== "" && !isNaN(input.value.trim()) && input.value != 0) {
          quizes++;
        }
      });

      theoryAssignmentTotalList.forEach((input) => {
        if (input.value.trim() !== "" && !isNaN(input.value.trim()) && input.value != 0) {
          assignments++;
        }
      });

      if (
        theoryFinalTotal.value.trim() !== "" &&
        !isNaN(theoryFinalTotal.value.trim()) && theoryFinalTotal.value != 0
      ) {
        final++;
      }
      if (
        theoryMidTotal.value.trim() !== "" &&
        !isNaN(theoryMidTotal.value.trim()) && theoryMidTotal.value != 0
      ) {
        mid++;
      }

       labAssignmentTotalList.forEach((input) => {
        if (input.value.trim() !== "" && !isNaN(input.value.trim()) && input.value != 0) {
          lassignments++;
        }
      });

      if (
        labMidTotal.value.trim() !== "" &&
        !isNaN(labMidTotal.value.trim()) && labMidTotal.value != 0
      ) {
        lmid++;
      }

      if (
        labFinalTotal.value.trim() !== "" &&
        !isNaN(labFinalTotal.value.trim() ) && labFinalTotal.value != 0
      ) {
        lfinal++;
      }

  };

  let terminator = () => {
    if (Calculate()){
      to = (theoryQuizObtained / theoryQuizTotal * (quizes * (15/4))) + (theoryAssignmentObtained / theoryAssignmentTotal * (assignments * (10/4))) + (theoryMidObtainedMarks / theoryMidTotalMarks * (mid * 25)) + (theoryFinalObtainedMarks / theoryFinalTotalMarks * (final * 50));

    tt = (quizes * (15/4)) + (assignments * (10/4)) + (mid * 25) + (final * 50);

    lo = (labAssignmentObtained / labAssignmentTotal * (lassignments * (25/4))) + (labMidObtainedMarks / labMidTotalMarks * (lmid * 25)) + (labFinalObtainedMarks / labFinalTotalMarks * (lfinal * 50));

    lt = (lassignments * (25/4)) + (lmid * 25) + (lfinal * 50);
    obtainedResult = (to * (tCredits / Credits)) + (lo * (lCredits / Credits));
    totalResult = (tt * (tCredits / Credits)) + (lt * (lCredits / Credits));
    msg2.innerText = `Your Theory Progress is ${to} / ${tt}
                      Your Lab Progress is ${lo} / ${lt}
                      Your overall Progress is ${obtainedResult} / ${totalResult}`;
    }else{
      msg2.innerText = "OOPS! It seems that you are entering obtained marks more than total marks. Check again";
    }
  };

  let initializer = () => {
    Credits = accumulator(credits,Credits);
    tCredits = accumulator(tcredits,tCredits);
    lCredits = accumulator(lcredits,lCredits);
  };

  generator.addEventListener("click", () => {
    initializer();
    if (Credits !== tCredits  + lCredits || Credits == 0){
      alert("You are entering wrong credit distribution. The total credits must be the sum of thoery credits and the lab credits.")
    }else {
      marking.style.display = "block";
      x1.innerText = `Enter the assesments you have done so far in Course ${Credits}(${tCredits},${lCredits})...`;
    }
  })
//Result Display event listener on the button
  btn.addEventListener("click", () => {
    status2();
    terminator();
    // msg2.innerText = `Your Ongoing progress of course ${Credits}(${tCredits},${lCredits}) is ${obtained} / ${total}`;
  });