const button = document.getElementById("rangeInput");
const body = document.getElementById("body");
const h2 = document.getElementById("h2");
const theme = document.querySelector(".theme");
const number = document.querySelectorAll(".number");
const container = document.querySelector(".container1");
const answer = document.querySelector(".answer");
const bottom = document.querySelector(".bottom");
const block = document.querySelectorAll(".block");
const del = document.querySelector(".del");
const block2 = document.querySelector(".block2");
const equal = document.querySelector(".equal");

button.addEventListener("input", function () {
  const percentage =((button.value - button.min) / (button.max - button.min)) * 100;
  if (button.value == 1) {
    body.style.backgroundColor = "";
    h2.style.color = "";
    theme.style.color = "";
    number.forEach(function (element) {
      element.style.color = "";
    });
    button.style.backgroundColor = "";
    button.style.setProperty('--thumb-background-color', "");
    container.style.backgroundColor = "";
    answer.style.color = "";
    answer.style.backgroundColor = "";
    bottom.style.backgroundColor = "";
    block.forEach(function (element) {
      element.style.backgroundColor = "";
      element.style.color = "";
      element.style.boxShadow = "";
    });
    del.style.backgroundColor = "";
    del.style.boxShadow = "";
    block2.style.backgroundColor = "";
    block2.style.boxShadow = "";
    equal.style.backgroundColor = "";
    equal.style.boxShadow = "";
    equal.style.color = "";
  } else if (button.value == 2) {
    body.style.backgroundColor = "#E6E6E6";
    h2.style.color = "#36362C";
    theme.style.color = "#36362C";
    number.forEach(function (element) {
      element.style.color = "#36362c";
    });
    button.style.backgroundColor = "#D2CDCD";
    button.style.setProperty('--thumb-background-color', "#C85402");
    container.style.backgroundColor = "#EEEEEE";
    answer.style.color = "#36362C";
    answer.style.backgroundColor = "#EEEEEE";
    bottom.style.backgroundColor = "#D2CDCD";
    block.forEach(function (element) {
      element.style.backgroundColor = "#E5E4E1";
      element.style.color = "#36362C";
      element.style.boxShadow = "0px -4px 0px 0px #A79E91 inset";
    });
    del.style.color = "";
    del.style.backgroundColor = "#378187";
    del.style.boxShadow = "0px -4px 0px 0px #1B6066 inset";
    block2.style.backgroundColor = "#378187";
    block2.style.boxShadow = "0px -4px 0px 0px #1B6066 inset";
    block2.style.color = "#fff";
    equal.style.backgroundColor = "#C85402";
    equal.style.boxShadow = "0px -4px 0px 0px #873901 inset";
    equal.style.color = "";
  } else if (button.value == 3) {
    body.style.backgroundColor = "#17062A";
    h2.style.color = "#FFE53D";
    theme.style.color = "#FFE53D";
    number.forEach(function (element) {
      element.style.color = "#ffe53d";
    });
    button.style.backgroundColor ="#1E0936";
    button.style.setProperty('--thumb-background-color', "#00DED0");
    container.style.backgroundColor = "#1E0936";
    answer.style.color = "#FFE53D";
    answer.style.backgroundColor = "#1E0936";
    bottom.style.backgroundColor = "#1E0936";
    block.forEach(function (element) {
      element.style.backgroundColor = "#331C4D";
      element.style.color = "#FFE53D";
      element.style.boxShadow = "0px -4px 0px 0px #881C9E inset";
    });
    del.style.color = "";
    del.style.backgroundColor = "#56077C";
    del.style.boxShadow = "0px -4px 0px 0px #BE15F4 inset";
    block2.style.backgroundColor = "#56077C";
    block2.style.boxShadow = "0px -4px 0px 0px #BE15F4 inset";
    block2.style.color = "#fff";
    equal.style.backgroundColor = "#00DED0";
    equal.style.boxShadow = "0px -4px 0px 0px #6CF9F1 inset";
    equal.style.color = "#1A2327";
  }
});
button.addEventListener("mouseover", function () {
  if (button.value == 1) {
    button.style.setProperty('--thumb-background-color', "");
  } else if (button.value == 2) {
    button.style.setProperty('--thumb-background-color', "#FF8A38");
  } else if (button.value == 3) {
    button.style.setProperty('--thumb-background-color', "#93FFF8");
  }
});
button.addEventListener("mouseout", function () {
  if (button.value == 2) {
    button.style.setProperty('--thumb-background-color', "#C85402");
  } else if (button.value == 3) {
    button.style.setProperty('--thumb-background-color', "#00DED0");
  }
});

block.forEach(function (element) {
  element.addEventListener("mouseover", function () {
    if (button.value == 1) {
      element.style.backgroundColor = "";
    } else if (button.value == 2) {
      element.style.backgroundColor = "#FFFFFF";
    } else if (button.value == 3) {
      element.style.backgroundColor = "#8631AF";
    }
  });
  element.addEventListener("mouseout", function () {
    if (button.value == 1) {
      element.style.backgroundColor = "";
    } else if (button.value == 2) {
      element.style.backgroundColor = "#E5E4E1";
    } else if (button.value == 3) {
      element.style.backgroundColor = "#331C4D";
    }
  });
});

del.addEventListener("mouseover", function () {
  if (button.value == 1) {
    del.style.backgroundColor = "";
  } else if (button.value == 2) {
    del.style.backgroundColor = "#62B5BC";
  } else if (button.value == 3) {
    del.style.backgroundColor = "#8631AF";
  }
});
del.addEventListener("mouseout", function () {
  if (button.value == 2) {
    del.style.backgroundColor = "#378187";
  } else if (button.value == 3) {
    del.style.backgroundColor = "#56077C";
  }
});

block2.addEventListener("mouseover", function () {
  if (button.value == 1) {
    block2.style.backgroundColor = "";
  } else if (button.value == 2) {
    block2.style.backgroundColor = "#62B5BC";
  } else if (button.value == 3) {
    block2.style.backgroundColor = "#8631AF";
  }
});
block2.addEventListener("mouseout", function () {
  if (button.value == 2) {
    block2.style.backgroundColor = "#378187";
  } else if (button.value == 3) {
    block2.style.backgroundColor = "#56077C";
  }
});


equal.addEventListener("mouseover", function () {
  if (button.value == 1) {
    equal.style.backgroundColor = "";
  } else if (button.value == 2) {
    equal.style.backgroundColor = "#FF8A38";
  } else if (button.value == 3) {
    equal.style.backgroundColor = "#93FFF8";
  }
});
equal.addEventListener("mouseout", function () {
  if (button.value == 2) {
    equal.style.backgroundColor = "#C85402";
  } else if (button.value == 3) {
    equal.style.backgroundColor = "#00DED0";
  }
});

let calculation = "";
let result = document.getElementById("result");

function calculator(value) {
  calculation += value;
  result.value = calculation;
}
function clearResult() {
  calculation = "";
  result.value = calculation;
}
function calculate() {
  result.value = eval(calculation);
}
function deleteLast() {
  calculation = result.value.slice(0, -1);
  result.value = calculation;
}
