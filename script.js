window.addEventListener("load", () => {
  const workDisplay = document.querySelector(".work-display");
  const workTime = document.querySelector(".work-time");
  const upButton = document.querySelector(".up");
  const downButton = document.querySelector(".down");
  const playButton = document.querySelector(".play");
  const pauseButton = document.querySelector(".pause");
  const stopButton = document.querySelector(".stop");
  let defaultTime = 25;
  let paused = true;

  workTime.value = defaultTime;
  workDisplay.value = workTime.value;

  upButton.addEventListener("click", () => {
    defaultTime++;
    workTime.value = defaultTime;
    workDisplay.value = workTime.value;
  });

  downButton.addEventListener("click", () => {
    defaultTime--;
    workTime.value = defaultTime;
    workDisplay.value = workTime.value;
  });

  playButton.addEventListener("click", () => {
    start();
  });

  pauseButton.addEventListener("click", () => {
    pause();
  });

  stopButton.addEventListener("click", () => {
    stop();
  });

  //Logic
  const initiate = setInterval(() => {
    if (!paused) {
      workDisplay.value--;
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
    workDisplay.value = 25;
    workTime.value = 25;
  }
});
