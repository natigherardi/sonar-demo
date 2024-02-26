const animalsData = [
  { animal: "dog", type: "mammal" },
  { animal: "cat", type: "mammal" },
  { animal: "eagle", type: "bird" },
  { animal: "shark", type: "fish" },
  { animal: "lion", type: "mammal" },
  { animal: "elephant", type: "mammal" },
  { animal: "penguin", type: "bird" },
  { animal: "dolphin", type: "mammal" },
  { animal: "snake", type: "reptile" },
  { animal: "frog", type: "amphibian" },
];

//This will trigger a Bug warning
animalsData.sort();

//This will trigger a Security Hotspot warning
Math.floor(2 * Math.random());

//This will trigger a Code Smell
delete animalsData[1];

//This will trigger a Vulnerability warning
const rootEl = document.getElementById("root");
rootEl.innerHTML = input;
