//Logic

let time = 25;
let paused = true;

const initiate = setInterval(() => {
  if (!pause) {
    time--;
  }
}, 1000);
return () => {
  clearInterval(initiate);
};

function start() {
  paused = false;
}

function pause() {
  paused = true;
}

function stop() {
  paused = true;
  time = 25;
}
