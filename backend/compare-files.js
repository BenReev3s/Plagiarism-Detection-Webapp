const fs = require("fs").promises;
const path = require("path");
const stringSimilarity = require("string-similarity");

async function compareFiles() {
  const uploadsDir = "uploads";

  const files = await fs.readdir(uploadsDir);
  if (files.length < 2) {
    throw new Error("Need at least 2 files to compare.");
  }

  const filesWithStats = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(uploadsDir, file);
      const stat = await fs.stat(filePath);
      return { filePath, mtime: stat.mtime };
    })
  );

  // Sort newest → oldest
  filesWithStats.sort((a, b) => b.mtime - a.mtime);

  // Read contents
  const contents = await Promise.all(
    filesWithStats.map((f) => fs.readFile(f.filePath, "utf8"))
  );

  const [original, ...targetFiles] = contents;

  return stringSimilarity.findBestMatch(original, targetFiles);
}

module.exports = compareFiles;

