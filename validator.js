/**
 * Validation script to ensure all department JSON files 
   adhere to the required schema and data types.
 
 * Run this before committing to prevent data inconsistency.
   run: node validator.js
*/

const fs = require('fs');
const path = require('path');
const departmentsDir = path.join(__dirname, 'departments');

function validateFiles() {
    console.log("Starting validation of department files...");
    console.log("--------------------------------------------");
    
    if (!fs.existsSync(departmentsDir)) {
        console.error("Error: 'departments' directory not found.");
        process.exit(1);
    }

    const files = fs.readdirSync(departmentsDir);
    let filesWithErrors = 0;
    let globalErrorCount = 0;

    files.forEach(file => {
        if (file.endsWith('.json')) {
            const filePath = path.join(departmentsDir, file);
            const rawData = fs.readFileSync(filePath, 'utf8');
            let currentFileErrors = [];
            
            try {
                const content = JSON.parse(rawData);

                if (!content.department || !Array.isArray(content.courses)) {
                    currentFileErrors.push("Missing required fields: 'department' or 'courses' array.");
                } else {
                    content.courses.forEach((course, index) => {
                        if (typeof course.code !== 'string') {
                            currentFileErrors.push(`Index ${index}: 'code' must be a string.`);
                        }
                        if (typeof course.title !== 'string') {
                            currentFileErrors.push(`Index ${index}: 'title' must be a string.`);
                        }
                    });
                }
            } catch (error) {
                currentFileErrors.push(`JSON Syntax Error: ${error.message}`);
            }

            if (currentFileErrors.length > 0) {
                console.error(`\nIssues in ${file}:`);
                
                currentFileErrors.forEach((err) => {
                    globalErrorCount++;
                    console.error(`\n  ${globalErrorCount}. ${err}`);
                    console.error("\n--------------------------------------------");
                });
                filesWithErrors++;
            }
        }
    });

    if (filesWithErrors === 0) {
        console.log("\nValidation successful: All files are valid.");
    } else {
        console.log(`\nValidation failed: Found total ${globalErrorCount} issue(s) in ${filesWithErrors} file(s).`);
        process.exit(1);
    }
}

validateFiles();