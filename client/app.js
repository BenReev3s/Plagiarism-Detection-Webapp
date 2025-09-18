/* ------------ SELECTORS ------------ */
const dropZone = document.querySelector(".drop-zone");
const dropText = document.querySelector("#dropText");

const selectBtn = document.querySelector("#selectFiles");
const inputFile = document.querySelector(".drop-zone__file");
const submitBtn = document.querySelector(".drop-zone__submit");
const compareBtn = document.querySelector(".compare-button");

const comparisonBody = document.querySelector(".table-body");
const bestMatchBox = document.querySelector("#best-match");

/* ------------ FILE UPLOAD ------------ */
async function uploadFile() {
  if (!inputFile.files.length) {
    return { error: 1, message: "No file selected" };
  }

  try {
    for (let i = 0; i < inputFile.files.length; i++) {
      const data = new FormData();
      data.append("file", inputFile.files[i]);

      const response = await fetch("/upload", { method: "POST", body: data });
      if (!response.ok) throw new Error("Upload failed");

      await response.json();
    }
    return { error: 0, message: "Files uploaded successfully" };
  } catch (err) {
    return { error: 1, message: err.message };
  }
}

/* ------------ DRAG & DROP UI ------------ */
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("drop-zone--over");
  dropText.textContent = "Release file to upload";
});

dropZone.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropZone.classList.remove("drop-zone--over");
  dropText.textContent = "Drag and drop files here";
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("drop-zone--over");
  inputFile.files = e.dataTransfer.files;
});

/* ------------ BUTTON EVENTS ------------ */
selectBtn.addEventListener("click", () => inputFile.click());

submitBtn.addEventListener("click", async () => {
  const result = await uploadFile();
  alert(result.message);
});

compareBtn.addEventListener("click", async () => {
  await compareFiles();
});

/* ------------ FILE COMPARISON ------------ */
async function compareFiles() {
  try {
    const response = await fetch("/compare");
    if (!response.ok) throw new Error(`Status: ${response.status}`);

    const { ratings, bestMatch, bestMatchIndex, files } = await response.json();

    // Clear previous results
    comparisonBody.innerHTML = "";
    bestMatchBox.innerHTML = "";

    // Build comparison table rows
    ratings.forEach((r, i) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${files[0]}</td>
        <td>${files[i + 1]}</td>
        <td>${(r.rating * 100).toFixed(2)}%</td>
      `;
      comparisonBody.appendChild(row);
    });

    // Best match card
    bestMatchBox.classList.add("best-match-card");
    bestMatchBox.innerHTML = `
      <h3>Best Match</h3>
      <p><strong>${files[0]}</strong> ↔ <strong>${files[bestMatchIndex + 1]}</strong></p>
      <p>Similarity: <span style="color:green">${(bestMatch.rating * 100).toFixed(2)}%</span></p>
    `;
  } catch (err) {
    console.error(err);
    alert("Comparison failed: " + err.message);
  }
}
