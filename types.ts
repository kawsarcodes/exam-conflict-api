/*
  To maintain data consistency, all department JSON files 
  must strictly follow the interfaces defined below.
*/

// Structure for individual department files (e.g., cse.json)

export interface Course {
  id: number;
  code: string;
  title: string;
  shortName: string;
  day: string;
  slot: string;
}

export interface DepartmentData {
  department: string;
  slug: string;
  lastUpdated: string;
  courses: Course[];
}