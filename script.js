const courseNatureSelect = document.querySelector("#courseNature");
const theoryOnly = document.querySelector("#theory");
const theoryAndLab = document.querySelector("#theoryAndLab");
courseNatureSelect.addEventListener("change", () => {
  if (courseNatureSelect.value == "theory") {
    theoryOnly.style.display = "block";
    theoryAndLab.style.display = "none";
  } else {
    theoryOnly.style.display = "none";
    theoryAndLab.style.display = "block";
  }
});
