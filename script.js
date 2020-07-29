window.addEventListener("load", () => {
  const focusDisplay = document.querySelector(".focus-display");
  const relaxDisplay = document.querySelector(".relax-display");
  const focusTime = document.querySelector(".focus-time");
  const relaxTime = document.querySelector(".relax-time");
  const upFocus = document.querySelector(".up-focus");
  const downFocus = document.querySelector(".down-focus");
  const upRelax = document.querySelector(".up-relax");
  const downRelax = document.querySelector(".down-relax");
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
  focusTime.value = `${("00" + Math.floor(newFocus / 60)).slice(-2)}`;
  relaxTime.value = `${("00" + Math.floor(newRelax / 60)).slice(-2)}`;

  upFocus.addEventListener("click", () => {
    if (newFocus < 60 * 60) {
      newFocus = newFocus + 60;
    } else {
      newFocus = 0;
    }
    focusTime.value = `${("00" + Math.floor(newFocus / 60)).slice(-2)}`;
  });

  downFocus.addEventListener("click", () => {
    if (newFocus > 0) {
      newFocus = newFocus - 60;
    } else {
      newFocus = 0;
    }
    focusTime.value = `${("00" + Math.floor(newFocus / 60)).slice(-2)}`;
  });

  upRelax.addEventListener("click", () => {
    if (newRelax < 60 * 60) {
      newRelax = newRelax + 60;
    } else {
      newRelax = 0;
    }
    relaxTime.value = `${("00" + Math.floor(newRelax / 60)).slice(-2)}`;
  });

  downRelax.addEventListener("click", () => {
    if (newRelax > 0) {
      newRelax = newRelax - 60;
    } else {
      newRelax = 0;
    }
    relaxTime.value = `${("00" + Math.floor(newRelax / 60)).slice(-2)}`;
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
  const initiateFocus = setInterval(() => {
    if (!paused && newFocus > 0) {
      newFocus--;
      focusDisplay.value = `${Math.floor(newFocus / 60)}:${(
        "00" + Math.floor(newFocus % 60)
      ).slice(-2)}`;

      relaxDisplay.value = `${Math.floor(newRelax / 60)}:${(
        "00" + Math.floor(newRelax % 60)
      ).slice(-2)}`;
      if (newFocus == 0) {
        const initiateRelax = setInterval(() => {
          if (!paused && newRelax > 0) {
            newRelax--;
            relaxDisplay.value = `${Math.floor(newRelax / 60)}:${(
              "00" + Math.floor(newRelax % 60)
            ).slice(-2)}`;
          }
        }, 1000);
        return () => {
          clearInterval(initiateRelax);
        };
      }
    }
  }, 1000);
  return () => {
    clearInterval(initiateFocus);
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

function startFocus() {}
