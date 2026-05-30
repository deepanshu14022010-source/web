const fs = require("fs");
const path = require("path");

const skipDirectories = new Set(["node_modules", ".git", "dist"]);
const suspiciousAssignment =
  /((api|private)[_-]?key|access[_-]?token|auth[_-]?token|client[_-]?secret|password|passwd|bearer)\s*[:=]\s*['"][^'"]{8,}/i;
const findings = [];

function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (skipDirectories.has(entry.name)) continue;

    const filePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      walk(filePath);
      continue;
    }

    const content = fs.readFileSync(filePath, "utf8");
    if (suspiciousAssignment.test(content)) {
      findings.push(path.relative(process.cwd(), filePath));
    }
  }
}

walk(process.cwd());

if (findings.length > 0) {
  console.error("Potential credential-looking assignments found:");
  console.error(findings.join("\n"));
  process.exit(1);
}

console.log("No obvious hardcoded credential assignments found.");
