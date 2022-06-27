const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}
document.addEventListener("keydown", function (l) {
  if (l.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left + 5}px`;
    }
}
document.addEventListener("keydown", function (r) {
    if (r.key === "ArrowRight") {
        moveDodgerRight();
    }

});