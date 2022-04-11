var buttons = document.querySelectorAll(".choice button"),
  tally = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    total: 0
  };

function vote(choice) {
  tally[choice]++;
  tally["total"]++;
  // console.log(tally);
}

function barPercentage(node, tally) {
  var choice = node.dataset.choice;
  
  if (tally[choice])
    return tally[choice]/tally["total"] * 100;
  return 0;
}

function renderBars() {
  var bars = document.getElementsByClassName("bar");
  var choicess=document.getElementsByClassName("perc");
  for (var i = 0; i < bars.length; i++) {
    var percentage = barPercentage(bars[i], tally);
    // console.log(percentage)
    bars[i].style.height = percentage.toString() + "%";
    // console.log(choicess[i]);
    // if(percentage!=0){
      let sss=Math.round(percentage);
      choicess[i].innerHTML=sss+"%";
    // }
    console.log(choicess[i]);
  }
  
}

function setup() {
  // Set up event listeners
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(e) {
      vote(e.target.dataset["choice"]);
      renderBars();
    });
  }
  
  renderBars();
}

setup();