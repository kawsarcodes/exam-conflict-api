<div align="center">

  <h1>UIU Exam Conflict Tracker API</h1>
  <a href="https://uiucalculator.kawsar.dev/tools/exam-conflict-tracker/">
    <img src="/assets/exam-conflict-tracker-interface.png" alt="UIU Exam Conflict Tracker Banner" width="100%">
  </a>
  
  ---

  <p>
    <a href="https://uiucalculator.kawsar.dev/tools/exam-conflict-tracker/">
    <img src="https://img.shields.io/website?url=https%3A%2F%2Fuiucalculator.kawsar.dev%2Ftools%2Fexam-conflict-tracker%2F&style=for-the-badge&label=Live&logo=google-chrome&logoColor=white&color=ff6b6b" alt="Website Status">
    </a>
    <a href="https://github.com/kawsarcodes/exam-conflict-api">
    <img src="https://img.shields.io/github/last-commit/kawsarcodes/exam-conflict-api?style=for-the-badge&color=blue" alt="Last Commit">
    </a>
  </p>
</div>

---

## About The API

This repository serves as the central data source for the **Exam Conflict Tracker**, a specialized tool within the **UIU Calculator and Planner** ecosystem.

## About Exam Conflict Tracker

The Exam Conflict Tracker is designed for students planning extra courses or retakes. It allows users to simulate their trimester load to ensure exam dates do not clash before finalized advising.

### Key Features

- **Avoid Clashes**: Instantly detects if two courses have exams at the exact same time.
- **Manage Pressure**: Warns users if they have multiple exams on the same day.
- **Visual Planning**: Maps courses onto a visual timeline to clearly show exam gaps.

## Project Structure

- `departments/`: Individual JSON files for each department (e.g., `cse.json`, `eee.json`).
- `validator.js`: A script to ensure all contributed data is error-free.
- `types.ts`: TypeScript interfaces defining the exact structure of the data.

## How to Contribute

<a href="https://www.youtube.com/watch?v=4iYUDeuZRJU">
  <img src="https://img.shields.io/badge/How_to_Contribute-Video_Guide-red?style=for-the-badge&logo=youtube&logoColor=white" alt="How to Contribute Video">
</a>

We rely on students and contributors to keep the exam schedules up to date. To contribute:

1. **Locate or Create**: Find your department's file in the `departments/` folder.
2. **Add Courses**: Follow the existing structure to add new course data.
3. **Verify**: Every course must have a valid `day` and `slot` (e.g., Day 1, Slot T1).
4. **Validate**: Run the validation script before committing.

## Data Schema

All department JSON files must strictly follow this structure:

```json
{
  "department": "Science and Engineering",
  "slug": "cse",
  "lastUpdated": "2026-05-14",
  "courses": [
    {
      "id": 1,
      "code": "ENG 1011",
      "title": "English I",
      "shortName": "Eng I",
      "day": "Day 1",
      "slot": "T1"
    },
    {
      "id": 2,
      "code": "BDS 1201",
      "title": "History of the Emergence of BDS",
      "shortName": "History",
      "day": "Day 6",
      "slot": "T1"
    },
    {
      "id": 3,
      "code": "CSE 1112",
      "title": "Structured Programming Language Lab",
      "shortName": "SPL Lab",
      "day": "N/A",
      "slot": "N/A"
    }
  ]
}
```

## Local Setup & Validation

To maintain data integrity and prevent the main tool from breaking, you must run the following command to check your changes:

```bash
# Clone your fork
git clone https://github.com/kawsarcodes/exam-conflict-api

```
```bash
# Navigate to the directory
cd exam-conflict-api

```
```bash
# Run the validation script
node validator.js

```
