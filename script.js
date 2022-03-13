var start = new Date()
var time_passed = 0;
var running = false;




function msToStr(milleseconds) {
  hours = Math.floor(milleseconds / (1000 * 3600));
  milleseconds = milleseconds % (1000 * 3600);
  minutes = Math.floor(milleseconds / (60 * 1000));
  milleseconds = milleseconds % (60 * 1000);
  seconds = Math.floor(milleseconds / 1000);
  milleseconds = milleseconds % 1000;
  return hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":"
          + seconds.toString().padStart(2, "0") + "." + milleseconds.toString().padStart(3, "0");
}

function startTimer() {
  start = new Date();
  time_passed = 0;
  running = true;

  document.getElementById("start").style.display = "none";
  document.getElementById("stop").style.display = "inline";
}

function stopTimer() {
  running = false;
  document.getElementById("stop").style.display = "none";
  document.getElementById("reset").style.display = "inline";
}

function resetTimer() {
  document.getElementById("timer").innerHTML = msToStr(0);
  document.getElementById("timer").className = "stopped";
  document.getElementById("reset").style.display = "none";
  document.getElementById("start").style.display = "inline";
}

function update() {
  if (running) {
    currentTime = new Date();
    time_passed = currentTime - start;
    document.getElementById("timer").innerHTML = msToStr(time_passed);
    document.getElementById("timer").className = "running";
  } else {
    document.getElementById("timer").className = "stopped";
  }
}




document.getElementById("start").style.display = "inline";
document.getElementById("stop").style.display = "none";
document.getElementById("reset").style.display = "none";

setInterval(function() {
  update();
}, 1);