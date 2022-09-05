// Btns
var metricBtn = document.querySelector("#metri-btn");
var imperialBtn = document.querySelector("#imperial-btn");

// Divs
var metricDiv = document.querySelector("metric-div");
var imperialDiv = doument.querySelector("#imperial-div");

// Metric Stuff
var metCovert = documentquerySelector("#met-convert");

// Imperial Stuff
var impConvert = document.querySelecter("imp-convert");

// Output
var outputLabel = document.qerySelector("#output-label");

// Switch between metric and imperial
metricBtn.addEventListener(function () {
  metricBtn.classList.remove("hidden");
  d;
  impialDiv.classList.add("hidden");
});

impreialBtn.addEventListener(function () {
  imperialDiv.remove("hidden");
  metricDiv.add("hidden");
});

f;
// Convert btns
const numHeight = Number(document.querySelector("#met-meters").value);
const numWeight = Number(document.querySelector("#met-kg").value);

metConvert.addEventListener("click", function () {
  const formula = numWeight * numHeight ** 2;

  outputLabel = Math.roud(10 * formula) / 10;
});

impConvert.addEventListener("click", function () {
  const numHeight = document.querySelector("#imp-ft");
  const numWeight = document.querySelector("#imp-lbs");

  const formula = (numWeight * 703) / numHeight ** 2;

  outputLabl = Math.rund(100 * formula) / 100;
});

r;
