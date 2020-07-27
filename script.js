window.addEventListener("load", () => {
  const focusDisplay = document.querySelector(".focus-display");
  const relaxDisplay = document.querySelector(".relax-display");
  const focusTime = document.querySelector(".focus-time");
  const relaxTime = document.querySelector(".relax-time");
  const upButton = document.querySelector(".up");
  const downButton = document.querySelector(".down");
  const playButton = document.querySelector(".play");
  const pauseButton = document.querySelector(".pause");
  const stopButton = document.querySelector(".stop");

  const defaultFocus = 25 * 60;
  const defaultRelax = 5 * 60;
  let newFocus = defaultFocus;
  let newRelax = defaultRelax;
  let paused = true;

  focusDisplay.value = "--:--";
  relaxDisplay.value = "--:--";
  focusTime.value = `${Math.floor(newFocus / 60)}`;

  upButton.addEventListener("click", () => {
    newFocus = newFocus + 60;
    focusTime.value = `${Math.floor(newFocus / 60)}`;
  });

  downButton.addEventListener("click", () => {
    newFocus = newFocus - 60;
    focusTime.value = `${Math.floor(newFocus / 60)}`;
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
      newFocus--;
      focusDisplay.value = `${Math.floor(newFocus / 60)}:${(
        "00" + Math.floor(newFocus % 60)
      ).slice(-2)}`;
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
    newFocus = defaultFocus;
    focusDisplay.value = "--:--";
    relaxDisplay.value = "--:--";
  }
});
