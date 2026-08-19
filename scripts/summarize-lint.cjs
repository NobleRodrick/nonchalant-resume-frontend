const fs = require('fs');
const report = JSON.parse(fs.readFileSync('../nonchalant-resume-frontend/lint-report.json', 'utf8'));
const lines = [];
for (const file of report) {
  for (const msg of file.messages) {
    lines.push(`${file.filePath.split('\\\\').pop()}\t${msg.line}:${msg.column}\t${msg.severity === 2 ? 'ERROR' : 'WARN'}\t${msg.ruleId}\t${msg.message}`);
  }
}
fs.writeFileSync('lint-summary.txt', lines.join('\n') + '\n');
