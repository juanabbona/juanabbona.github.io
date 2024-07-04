import { shuffle } from "lodash";
import { spring, timeline, type TimelineSegment } from "motion";

export const waveAnimation = () => {
  // If the animation is already running, don't start it again
  if (!window.waveTimeoutRef) {
    // Start the animation
    document.getElementById("wave-emoji")?.classList.add("wave");

    // Clear the animation class after 2 seconds
    window.waveTimeoutRef = setTimeout(() => {
      document.getElementById("wave-emoji")?.classList.remove("wave");
      window.waveTimeoutRef = null;
    }, 2000);
  }
};

export const pageLoadAnimation = () => {
  timeline([
    ["#page-loader", { opacity: 0 }, { duration: 1, delay: 0.5 }],
    ["#page-loader", { display: "none" }],
    ["#title", { opacity: [0, 1] }, { duration: 0.75, at: "-.5" }],
    ["#about", { opacity: [0, 1] }, { duration: 0.75, at: "-.5" }],
    [
      "#worldmap",
      { opacity: [0, 1] },
      { duration: 0.75, at: "-.5", easing: "linear" },
    ],
    ["#experience-title", { opacity: [0, 1] }, { duration: 0.75, at: "-.5" }],
    ...shuffle(document.querySelectorAll(".tool-chip")).map(
      (element, index) =>
        [
          element,
          { opacity: [0, 1], scale: [0.75, 1] },
          {
            duration: 0.5,
            at: index ? "<" : "-1",
            delay: index * 0.05,
          },
        ] as TimelineSegment
    ),
    ["#contact-container", { x: ["0%", "-50%"] }, { at: "-1" }],
    ["#contact-container", { y: [300, 0] }, { easing: spring() }],
  ]);

  const WAVE_TIMES = [20000, 35000, 10000, 15000, 40000];

  const wave = () => {
    waveAnimation();

    const nextWave = shuffle(WAVE_TIMES)[0];

    setTimeout(wave, nextWave);
  };

  setTimeout(() => {
    wave();
  }, 3000);
};
