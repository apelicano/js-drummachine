---
title: "freeCodeCamp.org"
source: "https://www.freecodecamp.org/learn/full-stack-developer/lab-drum-machine/build-drum-machine"
author:
published:
created: 2025-04-08
description: "Learn to Code — For Free"
tags:
  - "clippings"
---
Build an app that is functionally similar to the given example project. Try not to copy the example project, give it your own personal style.

## User Stories

1. You should have a `div` element with an `id` of `drum-machine` that contains all other elements.
2. Inside the `#drum-machine` element you should have another `div` with an `id` of `pad-bank`.
3. Inside the `#drum-machine` element you should have a `p` element with an `id` of `display`.
4. Inside your `#pad-bank` element you should have nine clickable drum pad elements each with a class of `drum-pad`, a unique `id` that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`. The drum pads MUST be in this order.
5. Each `.drum-pad` should have an `audio` element which has a class of `clip`, a `src` attribute that points to an audio clip, and an `id` corresponding to the inner text of its parent `.drum-pad` element (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).
6. When you click on a `.drum-pad` element, the audio clip contained in its child audio element should be triggered.
7. When you press the trigger key associated with each `.drum-pad`, the audio clip contained in its child audio element should be triggered (e.g. pressing the `Q` key should trigger the drum pad which contains the string `Q`, pressing the `W` key should trigger the drum pad which contains the string `W`, etc.).
8. When a `.drum-pad` is triggered, you should display a string describing the associated audio clip as the inner text of the `#display` element (each string must be unique).

Some audio samples you can use for your drum machine can be found at `https://cdn.freecodecamp.org/curriculum/drum/<fileName>`, where `<fileName>` is as follows:

| drum name | `fileName` |
| --- | --- |
| Heater 1 | `Heater-1.mp3` |
| Heater 2 | `Heater-2.mp3` |
| Heater 3 | `Heater-3.mp3` |
| Heater 4 | `Heater-4_1.mp3` |
| Clap | `Heater-6.mp3` |
| Open-HH | `Dsc_Oh.mp3` |
| Kick-n'-Hat | `Kick_n_Hat.mp3` |
| Kick | `RP4_KICK_1.mp3` |
| Closed-HH | `Cev_H2.mp3` |

## Tests

1. You should have a `div` element with an `id` of `drum-machine` that contains all other elements.
2. Inside the `#drum-machine` element you should have another `div` with an `id` of `pad-bank`.
3. Inside the `#drum-machine` element you should have a `p` element with an `id` of `display`.
4. Inside your `#pad-bank` element you should have nine clickable drum pad elements each with a class of `drum-pad`.
5. Each `.drum-pad` should have one of the following letters as `innerText`, in order: `Q`, `W`, `E`, `A`, `S`, `D`, `Z`, `X`, `C`.
6. Each `.drum-pad` should have an `audio` element which has a class of `clip`, a `src` attribute that points to an audio clip, and an `id` corresponding to the inner text of its parent `.drum-pad` element (e.g. `id="Q"`, `id="W"`, `id="E"` etc.).
7. When you click on a `.drum-pad` element, the audio clip contained in its child audio element should be triggered.
8. When you press one of the keys Q, W, E, A, S, D, Z, X, C on your keyboard, the corresponding `audio` element should play the corresponding sound.
9. When a `.drum-pad` is triggered, you should display a string describing the associated audio clip as the inner text of the `#display` element (each string must be unique).