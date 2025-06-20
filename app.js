import { Worker } from './Worker.js';
import { OfficePayrollSystem } from './OfficePayrollSystem.js';

// make it a singleton since we only need one Class

const officePayrollSystem = new OfficePayrollSystem();
// lets create some new workers
const Maria = new Worker("maria1", "Maria", "associate");
const Henry = new Worker("henry1", "Henry", "associate");
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

// how much has Karen and Maria made?
let KarensTotalSalary = officePayrollSystem.calculateTotalSalary(Karen);
let MariasTotalSalary = officePayrollSystem.calculateTotalSalary(Maria);

//How much has Henry made?

let HenrysTotalSalary = officePayrollSystem.calculateTotalSalary(Henry);

console.log("the salaries of Karen, Maria and Henrys salary are:", KarensTotalSalary, MariasTotalSalary, HenrysTotalSalary)

// since Karen and Maria are top 2 employees we want to update their position
Karen.promote("mid-level");
Maria.promote("mid-level");

// Henry's Comeback
// company has a new policy, if you work at night you get double the pay
// Henry being a drug addict, loves to stay up
// so he starts to work at night

// third day is June - 22 - 2025
const date3 = "06-22-2025"
Maria.swipesCard(date3, 9);
Karen.swipesCard(date3, 9);

// lunch time
Maria.swipesCard(date3, 12);
Karen.swipesCard(date3, 12);

// end of lunch
Maria.swipesCard(date3, 15);
Karen.swipesCard(date3, 13);
//leaves end of day
Maria.swipesCard(date3, 17);
Karen.swipesCard(date3, 17);

// Henry just wakes up and goes to work at night
Henry.swipesCard(date3, 18);
Henry.swipesCard(date3, 24);


// Henry should make way more then Maria and Karen

// how much has Karen and Maria made?
KarensTotalSalary = officePayrollSystem.calculateTotalSalary(Karen);
MariasTotalSalary = officePayrollSystem.calculateTotalSalary(Maria);

//How much has Henry made?

HenrysTotalSalary = officePayrollSystem.calculateTotalSalary(Henry);

console.log("the salaries of Karen, Maria and Henrys salary are:", KarensTotalSalary, MariasTotalSalary, HenrysTotalSalary)



// fourth day is June - 23 - 2025
const date4 = "06-23-2025"
Maria.swipesCard(date4, 9);
Karen.swipesCard(date4, 9);

// lunch time
Maria.swipesCard(date4, 12);
Karen.swipesCard(date4, 12);

// end of lunch
Maria.swipesCard(date4, 15);
Karen.swipesCard(date4, 13);
//leaves end of day
Maria.swipesCard(date4, 17);
Karen.swipesCard(date4, 17);

// Henry just wakes up and goes to work at night
Henry.swipesCard(date4, 18);
Henry.swipesCard(date4, 24);


// Henry should make way more then Maria and Karen

// how much has Karen and Maria made?
KarensTotalSalary = officePayrollSystem.calculateTotalSalary(Karen);
MariasTotalSalary = officePayrollSystem.calculateTotalSalary(Maria);

//How much has Henry made?

HenrysTotalSalary = officePayrollSystem.calculateTotalSalary(Henry);

console.log("the salaries of Karen, Maria and Henrys salary are:", KarensTotalSalary, MariasTotalSalary, HenrysTotalSalary)
console.log("current state of the workers", JSON.stringify(Karen))
console.log("current state of the workers", JSON.stringify(Maria))
console.log("current state of the workers", JSON.stringify(Henry))