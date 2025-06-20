const status = {
    OUT_OF_OFFICE: 0,
    IN_OFFICE: 1,
}

export class Worker {
  constructor(id, name, position) {
    this.id  = id
    this.name = name;
    this.daysWorked = {};
    this.position = position;
    this.status = status["OUT_OF_OFFICE"]
  }

  #enter(date, time) {
    console.log(this.name, "enters")
    if (this.daysWorked[date]) {
        this.daysWorked[date]["in_office_periods"].push({enter: time, leave: null});
    } else {
        const workData = {"total": 0, "in_office_periods": [{enter: time, leave: null}]};
        this.daysWorked[date] = workData;
    }

    this.status = status["IN_OFFICE"];
  }

  #leave(date, time) {
    console.log(this.name, "leaves")
    const inOfficePeriods = this.daysWorked[date]["in_office_periods"];
    const currInOfficePeriod = inOfficePeriods[inOfficePeriods.length - 1];
    currInOfficePeriod["leave"] = time;
    this.daysWorked[date]["total"] += parseInt(currInOfficePeriod["leave"]) - parseInt(currInOfficePeriod["enter"]);

    this.status = status["OUT_OF_OFFICE"];
  }

  swipesCard(date, time) {
    if (this.status === status["OUT_OF_OFFICE"]) {
        this.#enter(date, time);
    } else {
        this.#leave(date, time)
    }
  }

  promote(newPosition) {
      this.position = newPosition;
  }
}