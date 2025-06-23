const fs = require("fs");
const outputPath = "./extractedIdsNames.json";

function extractIdsAndNames(filePath) {
  // Read the JSON file
  const rawData = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(rawData);

  // Extract IDs and names
  const extractedData = [];
  data?.content.forEach((item) => {
    if (item.id && item.name) {
      extractedData.push({ id: item.id, name: item.name });
    }
  });
  fs.writeFileSync(outputPath, JSON.stringify(extractedData, null, 2), "utf-8");
  return extractedData;
}

// Example usage
const filePath = "./communities.json";
const idsAndNames = extractIdsAndNames(filePath);

// Print the extracted data
idsAndNames.forEach((entry) => {
  console.log(`ID: ${entry.id}, Name: ${entry.name}`);
});
