let div = document.getElementById("content");
let btn = document.getElementById("btn");
let rstBtn = document.getElementById("rst");
let newdiv;
let nP;
let nP1;
let nP2;
let addIn;
let addIn1;
let btn1;
let value1;
let value2;
let span1;
let span2;
let arr = [];
let divCounter = 0;
let inComplete = 0;
let clicked = 1;
let invalid = 0;
let count = 0;
let sum = 0;
let result = document.getElementById("Total");

function newDiv() {
  count++;
  if (inComplete == 0) {
    newdiv = document.createElement("div");
    newdiv.className = "contain";
    newdiv.setAttribute("id", "newDiv" + divCounter);
    newdiv.style.display = "flex";
    newdiv.style.flexDirection = "column";
    newdiv.style.gap = "0.4vh";
    newdiv.style.backgroundColor = "#638889";
    newdiv.style.padding = "2vw";
    if (window.innerWidth < 1300) {
      newdiv.style.width = "30vw";
    }
    divCounter++;
    inComplete++;
    clicked--;
    div.appendChild(newdiv);
    addP();
    addP1();
    addP2();
  } else {
    alert("Please fill the current details first");
  }
}

function addP() {
  nP = document.createElement("p");
  nP.style.width = "70vw";
  nP.style.height = "7vh";

  newdiv.appendChild(nP);
  addL();
  addInput();
}
function addL() {
  let label = document.createElement("label");
  label.innerHTML = "Item Name: ";
  label.style.fontSize = "2.5vh";
  label.style.fontWeight = "700";
  nP.appendChild(label);
}

function addInput() {
  addIn = document.createElement("input");
  addIn.id = "Input1" + divCounter;
  addIn.style.width = "7vw";
  addIn.setAttribute("type", "text");
  addIn.style.outline = "0";
  addIn.style.padding = "0.2vh 0.5vw";

  nP.appendChild(addIn);
}
function addP1() {
  nP1 = document.createElement("p");
  nP1.style.width = "70vw";
  nP1.style.height = "7vh";

  newdiv.appendChild(nP1);
  addL1();
  addInput1();
}
function addL1() {
  let label1 = document.createElement("label");
  label1.innerHTML = "Price: ";
  label1.style.fontSize = "2.5vh";
  label1.style.fontWeight = "700";
  nP1.appendChild(label1);
}

function addInput1() {
  addIn1 = document.createElement("input");
  addIn1.style.width = "7vw";
  addIn1.setAttribute("type", "text");
  addIn1.id = "Input2" + divCounter;
  addIn1.style.outline = "0";
  addIn1.style.padding = "0.2vh 0.5vw";

  nP1.appendChild(addIn1);
}
function addP2() {
  nP2 = document.createElement("p");
  nP2.style.width = "70vw";
  nP2.style.height = "7vh";
  newdiv.appendChild(nP2);
  addBtn();
}
function addBtn() {
  btn1 = document.createElement("button");
  btn1.innerHTML = "Add";
  btn1.style.width = "7vw";
  btn1.style.height = "5vh";
  btn1.style.fontSize = "2vw";
  btn1.style.backgroundColor = "#86A789";
  btn1.style.color = "#43766C";
  btn1.style.fontWeight = "900";
  btn1.style.border = "none";

  btn1.addEventListener("click", function () {
    if (clicked == 0 || invalid > 0) {
      clicked++;
      value1 = document.getElementById("Input1" + divCounter).value;
      value2 = document.getElementById("Input2" + divCounter).value;

      value2 = parseFloat(value2);
      if (typeof value1 === "string" && !isNaN(value2)) {
        console.log("Input1:", value1);
        console.log("Input2:", value2);
        span1 = document.createElement("span");
        span2 = document.createElement("span");
        span1.textContent = value1;
        span2.textContent = value2;
        span1.style.fontSize = "2.5vh";
        span2.style.fontSize = "2.5vh";

        span1.style.fontWeight = "600";
        span2.style.fontWeight = "600";
        span1.style.display = "inline";
        span2.style.display = "inline";
        addIn.style.display = "none";
        addIn1.style.display = "none";
        nP.appendChild(span1);
        nP1.appendChild(span2);
        arr.push(value2);
        console.log(arr);
        let sum = arr.reduce((acc, curr) => acc + curr, 0);
        console.log(sum);
        result.textContent = "Total: " + sum;
        inComplete--;
      } else {
        alert("Invalid inputs try again");
        invalid++;
        if (invalid > 0) {
          value1 = document.getElementById("Input1" + divCounter).value;
          value2 = document.getElementById("Input2" + divCounter).value;

          value2 = parseFloat(value2);
          if (typeof value1 === "string" && !isNaN(value2)) {
            console.log("Input1:", value1);
            console.log("Input2:", value2);
            span1 = document.createElement("span");
            span2 = document.createElement("span");
            span1.textContent = value1;
            span2.textContent = value2;
            span1.style.fontSize = "2.5vh";
            span2.style.fontSize = "2.5vh";
            span1.style.fontWeight = "600";
            span2.style.fontWeight = "600";
            span1.style.display = "inline";
            span2.style.display = "inline";
            addIn.style.display = "none";
            addIn1.style.display = "none";
            nP.appendChild(span1);
            nP1.appendChild(span2);
            arr.push(value2);
            console.log(arr);
            sum = arr.reduce((acc, curr) => acc + curr, 0);
            console.log(sum);
            result.textContent += "Total: " + sum;
          }
        }
      }
    } else {
      alert("Can't update twice!");
    }
  });
  nP2.appendChild(btn1);
}
function reSet() {
  div.innerHTML = "";
  inComplete = 0;
  clicked = 1;
  arr = [];
  console.log(arr);
  result.textContent = "Total: " + sum;
}
console.log(window.innerWidth);
//responsive ness:
