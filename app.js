console.log("sublime 👽👽👽👽👽");

// let viz = new tableau.Viz(placeholderDiv, url, options);

let viz;

// Creating variable to store tableau viz
let placeholderDiv = document.getElementById("tableauViz");

// Create variable to store URL
let url =
  "https://public.tableau.com/views/EmbeddingWorkbookProfitsAcrossME-Asia/OfficeSupplyProfitsacrossMEandAsia?:language=en-US&:display_count=n&:origin=viz_share_link";

// Give Viz Options - Height, Device, Width
let options = {
  device: "desktop",
  height: "800px",
  height: "800px",
  width: "1000px",
};

function initViz() {
  console.log("Viz is Ready");
  viz = new tableau.Viz(placeholderDiv, url, options);
}

// Listen to the content being loaded - when finished, load the viz

document.addEventListener("DOMContentLoaded", initViz);

// Find PDF Buttons in the HTML File
let exportPDFbutton = document.getElementById("exportPDF");

// Function when PDF Button is Clicked
function exportPDFfunction() {
  viz.showExportPDFDialog();
}

// Listen for a click on the PDF button
exportPDFbutton.addEventListener("click", exportPDFfunction);

// Find PPT Buttons
let exportPPTbutton = document.getElementById("exportPPT");

// Function when PPT Button is Clicked
function exportPPTfunction() {
  viz.showExportPowerPointDialog();
}

// Listen for a click on the PPT Button
exportPPTbutton.addEventListener("click", exportPPTfunction);

// Get Range Values
function getRangeValues() {
  const minValue = document.getElementById("minValue").value;
  const maxValue = document.getElementById("maxValue").value;
  console.log(minValue, maxValue);

  const workbook = viz.getWorkbook();

  let activeSheet = workbook.getActiveSheet();
  let sheets = activeSheet.getWorksheets();
  console.log(sheets);

  let sheetToFilter = sheets[0];
  // Doing the actual filtering
  sheetToFilter
    .applyRangeFilterAsync("SUM(Sales)", {
      min: minValue,
      max: maxValue,
    })
    .then(alert("Viz Filtered"));
}

// Find Filter Buttons
let FilterValuesButton = document.getElementById("FilterButton");

// Listen for a click on the Filter button
FilterValuesButton.addEventListener("click", getRangeValues);
