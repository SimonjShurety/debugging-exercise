// Btns
const metricBtn = document.querySelector("#metric-btn");
const imperialBtn = document.querySelector("#imperial-btn");

// Divs
const metricDiv = document.querySelector("#metric-div");
const imperialDiv = document.querySelector("#imperial-div");

// Metric Stuff
const metConvert = document.querySelector(".met-convert");

// Imperial Stuff
const impConvert = document.querySelector(".imp-convert");

// Output
const outputLabel = document.querySelector("#output-label");

// Switch between metric and imperial
metricBtn.addEventListener("click", function () {
  metricDiv.classList.remove("hidden");
  imperialDiv.classList.add("hidden");
});

imperialBtn.addEventListener("click", function () {
  imperialDiv.classList.remove("hidden");
  metricDiv.classList.add("hidden");
});

// Convert btns

metConvert.addEventListener("click", function () {
  const numHeight = Number(document.querySelector("#met-meters").value);
  const numWeight = Number(document.querySelector("#met-kg").value);
  const formula = numWeight * numHeight ** 2;

  outputLabel.textContent = Math.round(10 * formula) / 10;
});

impConvert.addEventListener("click", function () {
  const numHeight = Number(document.querySelector("#imp-ft").value);
  const numWeight = Number(document.querySelector("#imp-lbs").value);
  console.log(numHeight, numWeight);
  const formula = (numWeight * 703) / numHeight ** 2;

  outputLabel.textContent = Math.round(10 * formula) / 10;
});
