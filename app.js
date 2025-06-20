import { Worker } from './Worker.js';
import { OfficePayrollSystem } from './OfficePayrollSystem.js';

// make it a singleton since we only need one Class

const officePayrollSystem = new OfficePayrollSystem();
// lets create some new workers
const Maria = new Worker("maria1", "Maria", "associate");
const Henry = new Worker("henry1", "Henry", "senior");
const Karen = new Worker("karen1", "Karen", "associate");

officePayrollSystem.addWorker(Maria);
officePayrollSystem.addWorker(Henry);
officePayrollSystem.addWorker(Karen);

// maria and karen are punctual hardworkers but henry is a drug addict and lives life on the edge

// first day is June -20 - 2025
const date1 = "06-20-2025"
Maria.swipesCard(date1, 9);
Karen.swipesCard(date1, 9);
Henry.swipesCard(date1, 11);


// lunch time
Maria.swipesCard(date1, 12);
Karen.swipesCard(date1, 12);
Henry.swipesCard(date1, 12);
// end of lunch
Maria.swipesCard(date1, 13);
Karen.swipesCard(date1, 13);
Henry.swipesCard(date1, 13);
//leaves end of day
Maria.swipesCard(date1, 17);
Karen.swipesCard(date1, 17);
Henry.swipesCard(date1, 17);

// second day is June - 21 - 2025
const date2 = "06-21-2025"
Maria.swipesCard(date2, 9);
Karen.swipesCard(date2, 9);

// lunch time
Maria.swipesCard(date2, 12);
Karen.swipesCard(date2, 12);

// end of lunch
Maria.swipesCard(date2, 15);
Karen.swipesCard(date2, 13);
//leaves end of day
Maria.swipesCard(date2, 17);
Karen.swipesCard(date2, 17);


// what is the time total time in hours for all three?
const m = officePayrollSystem.calculateTotalTime(Maria);
const k = officePayrollSystem.calculateTotalTime(Karen);
const h = officePayrollSystem.calculateTotalTime(Henry);

console.log(m, k, h);


// step 2: Find top k workers, and caluclate how much they worked within these date ranges
// we can only promote 2
const x = 2;

const topKWorkers = officePayrollSystem.findTopKWorkers(x); // Karen and Maria, the workers
console.log(`the top ${x} workers are ${topKWorkers[0].name} and ${topKWorkers[1].name}`)

// how much did Karen and Maria work during June 20 to June 21
const dateRange = ["06-20-2025", "06-21-2025"];
const KarensHoursByDateRange = officePayrollSystem.calculateTotalHoursByDateRange(dateRange[0], dateRange[1], topKWorkers[0]);
const MariasHoursByDateRange = officePayrollSystem.calculateTotalHoursByDateRange(dateRange[0], dateRange[1], topKWorkers[1]);

console.log(KarensHoursByDateRange, MariasHoursByDateRange)

// since Karen and Maria are top 2 employees we want to update their position
Karen.promote("Mid-Level");
Maria.promote("Mid-Level");

//

