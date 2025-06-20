export class OfficePayrollSystem {
  constructor() {
    if (OfficePayrollSystem.instance) {
      return OfficePayrollSystem.instance
    }
    OfficePayrollSystem.instance = this;
    this.workers = [];
  }

  addWorker(worker) {
    this.workers.push(worker);
  }

  calculateTotalTime(worker) {
    const total = Object.entries(worker.daysWorked).reduce((acc, [date, daysWorkedData]) => {
        acc += daysWorkedData["total"];
        return acc;
    }, 0);

    return total;
  };

  findTopKWorkers(k) {
    return this.workers.sort((a, b) => this.calculateTotalTime(b) - this.calculateTotalTime(a)).slice(0, k);
  }

  calculateTotalHoursByDateRange(startDate, endDate, worker) {
    const workPeriods = [];
    Object.entries(worker["daysWorked"]).map(([date, workData]) => {
      if (new Date(date) >= new Date(startDate) &&
          new Date(date) <= new Date(endDate)
      ) {
        workPeriods.push(...workData["in_office_periods"]);
      }
    })

    return workPeriods.reduce((acc, workPeriod) => {
      acc += workPeriod["leave"] - workPeriod["enter"];
      return acc
    }, 0)
  }

  calculateTotalSalary(worker) {
    const total = Object.entries(worker.daysWorked).reduce((acc, [date, daysWorkedData]) => {
        acc += daysWorkedData["moneyEarned"];
        return acc;
    }, 0);

    return total;
  }
}