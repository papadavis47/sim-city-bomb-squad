// --------------------Game State /Global Variables ------------

let wires = {
  blue: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-blue-wire.png",
    uncutImg: "img/uncut-blue-wire.png"
  },

  green: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-green-wire.png",
    uncutImg: "img/uncut-green-wire.png"
  },

  red: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-red-wire.png",
    uncutImg: "img/uncut-red-wire.png"
  },

  white: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-white-wire.png",
    uncutImg: "img/uncut-white-wire.png"
  },

  yellow: {
    cut: false,
    needsCut: false,
    cutImg: "img/cut-yellow-wire.png",
    uncutImg: "img/uncut-yellow-wire.png"
  }
};

const STARTING_TIME = 30;
let remainingTime = STARTING_TIME;
let wiresToCut = [];
/* --------------------------------- Functions ----------------------------------------- */

let gameInit = function() {
    let domWires = document.querySelectorAll("img");
    let domResetBtn = document.querySelector(".reset");
    let domTimer = document.querySelector(".countdown");



    wiresToCut = [];
    //set wires to be cut ( includeds pushing to wiresToCut)
    remainingTime = STARTING_TIME;

    for (let i = 0; i < 5; i++) {
        domWires[i].src = `img/uncut-${domWires[i].id}-wire.png`;
    }
    domResetBtn.disabled = true;
    //reset background
    document.querySelector('body').classList.remove('flat-city');
    document.querySelector('body').classList.add('happy-city');
    //reset timer
    for (let wire in wires) {
        let rand = Math.random();
        if (rand > 0.5) {
            wiresToCut.push(wire)
        }
    }
    //gameInit
    console.log(wiresToCut);
};


let wireClickHandler = function(e) {
  console.log(e.target.id);
  if (!wires[e.target.id].cut) {
    wires[e.target.id].cut = true;

    e.target.src = wires[e.target.id].cutImg;
    let wireIndex = wiresToCut.indexOf(e.target.id);
    if (wireIndex > -1) {
        console.log('good so far')
        wiresToCut.splice(wireIndex, 1);
    }
    
    checkWin();
  } else {
      console.log("KABOOM!!!!");
  }
};

let checkWin = function () {
    console.log('checking for win');
}
document.addEventListener("DOMContentLoaded", function(e) {
  // do literally everything here
  // DOM References

  gameInit();

  document.querySelector(".wires").addEventListener("click", wireClickHandler);
});
