// ======================================================================
// Unified Display Update Function
// ======================================================================
const display = document.getElementById("display");
const updateDisplay = (message) => {
  display.innerText = message;
};

// ======================================================================
// Drum Pad Data Mapping
// ======================================================================
// This array helps map each key (Q, W, etc.) to its corresponding audio file
// and descriptive label. The label is what will be shown in #display when a pad is triggered.
const drumPads = [
  { key: "Q", clip: "Heater-1.mp3", label: "Heater 1" },
  { key: "W", clip: "Heater-2.mp3", label: "Heater 2" },
  { key: "E", clip: "Heater-3.mp3", label: "Heater 3" },
  { key: "A", clip: "Heater-4_1.mp3", label: "Heater 4" },
  { key: "S", clip: "Heater-6.mp3", label: "Clap" },
  { key: "D", clip: "Dsc_Oh.mp3", label: "Open-HH" },
  { key: "Z", clip: "Kick_n_Hat.mp3", label: "Kick-n'-Hat" },
  { key: "X", clip: "RP4_KICK_1.mp3", label: "Kick" },
  { key: "C", clip: "Cev_H2.mp3", label: "Closed-HH" },
];

// ======================================================================
// POWER TOGGLE FUNCTIONALITY
// ======================================================================
const powerToggle = document.getElementById("power-toggle");
// Set the power toggle to “on” by default so that the drum machine starts in the powered state.
powerToggle.checked = true;
let isPoweredOn = true;
powerToggle.addEventListener("change", () => {
  isPoweredOn = powerToggle.checked;
  updateDisplay(isPoweredOn ? "Power ON" : "Power OFF");
});

// ======================================================================
// PLAY SOUND FUNCTION
// ======================================================================
const playSound = (key) => {
  if (!isPoweredOn) return;

  // Get the audio element by its id (should match the key, e.g. "Q")
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    // Dynamically select the label based on the active bank
        const drumLabels = isAlternateBank
            ? {
                Q: "Chord 1", W: "Chord 2", E: "Chord 3",
                A: "Smooth Piano", S: "Dry Ohh", D: "Bld H1",
                Z: "Punchy Kick", X: "Side Stick", C: "Snare",
            }
            : {
                Q: "Heater 1", W: "Heater 2", E: "Heater 3",
                A: "Heater 4", S: "Clap", D: "Open-HH",
                Z: "Kick-n'-Hat", X: "Kick", C: "Closed-HH",
            };

        // Update display with the correct label for the current bank
        updateDisplay(drumLabels[key]);
  }
};

// ======================================================================
// EVENT HANDLING FOR DRUM PADS
// ======================================================================

// Handle mouse clicks on drum pads.
document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", function () {
    // Add active state for visual feedback.
    this.classList.add("active");
    setTimeout(() => {
      this.classList.remove("active");
    }, 150);
    // Use the data-key attribute to retrieve the associated key.
    const key = this.getAttribute("data-key");
    playSound(key);
  });
});

// Handle keyboard events (keydown) to trigger corresponding drum pads.
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  // Find the drum pad using the data-key attribute.
  const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
  if (pad) {
    pad.classList.add("active");
    setTimeout(() => {
      pad.classList.remove("active");
    }, 150);
  }
  playSound(key);
});

// ======================================================================
// BANK TOGGLE FUNCTIONALITY
// ======================================================================
const bankToggle = document.getElementById("bank-toggle");
let isAlternateBank = false;
bankToggle.addEventListener("change", () => {
  isAlternateBank = bankToggle.checked;
  updateDisplay(isAlternateBank ? "Smooth Piano Kit" : "Heater Kit");

  // Define the two different sets of drum sounds.
  // (This mapping can be refactored later for scalability.)
  const drumSounds = isAlternateBank
    ? {
        Q: "Chord_1.mp3",
        W: "Chord_2.mp3",
        E: "Chord_3.mp3",
        A: "Give_us_a_light.mp3",
        S: "Dry_Ohh.mp3",
        D: "Bld_H1.mp3",
        Z: "punchy_kick_1.mp3",
        X: "side_stick_1.mp3",
        C: "Brk_Snr.mp3",
      }
    : {
        Q: "Heater-1.mp3",
        W: "Heater-2.mp3",
        E: "Heater-3.mp3",
        A: "Heater-4_1.mp3",
        S: "Heater-6.mp3",
        D: "Dsc_Oh.mp3",
        Z: "Kick_n_Hat.mp3",
        X: "RP4_KICK_1.mp3",
        C: "Cev_H2.mp3",
      };

  // Update the source of every audio element accordingly.
  document.querySelectorAll(".clip").forEach((audio) => {
    audio.src = `https://cdn.freecodecamp.org/curriculum/drum/${drumSounds[audio.id]}`;
  });
});

// ======================================================================
// VOLUME SLIDER FUNCTIONALITY
// ======================================================================
const volumeSlider = document.getElementById("volume");
volumeSlider.addEventListener("input", () => {
  // Normalize the slider value (0–100) to a decimal (0–1)
  const volumeLevel = volumeSlider.value / 100;
  document.querySelectorAll(".clip").forEach((audio) => {
    audio.volume = volumeLevel;
  });
  updateDisplay(`Volume: ${volumeSlider.value}`);
});
