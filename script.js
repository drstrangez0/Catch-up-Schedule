const SCHEDULE_HISTORY = {
  "None": { HepB: 0, RV: 0, DTaP: 0, Hib: 0, PCV: 0, IPV: 0, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0 },
  "Birth": { HepB: 1, RV: 0, DTaP: 0, Hib: 0, PCV: 0, IPV: 0, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0 },
  "2m": { HepB: 2, RV: 1, DTaP: 1, Hib: 1, PCV: 1, IPV: 1, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0 },
  "4m": { HepB: 3, RV: 2, DTaP: 2, Hib: 2, PCV: 2, IPV: 2, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0 },
  "6m": { HepB: 3, RV: 3, DTaP: 3, Hib: 3, PCV: 3, IPV: 3, BCG: 1, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0 },
  "9m": { HepB: 3, RV: 3, DTaP: 3, Hib: 3, PCV: 3, IPV: 3, BCG: 1, Measles: 1, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 1 },
  "12m": { HepB: 3, RV: 3, DTaP: 3, Hib: 3, PCV: 4, IPV: 3, BCG: 1, Measles: 1, MMR: 1, Varicella: 0, HepA: 0, MenACWY: 1 },
  "18m": { HepB: 3, RV: 3, DTaP: 4, Hib: 4, PCV: 4, IPV: 3, BCG: 1, Measles: 1, MMR: 2, Varicella: 0, HepA: 0, MenACWY: 1 },
  "24m": { HepB: 3, RV: 3, DTaP: 4, Hib: 4, PCV: 4, IPV: 3, BCG: 1, Measles: 1, MMR: 2, Varicella: 1, HepA: 1, MenACWY: 1 },
  "4y": { HepB: 3, RV: 3, DTaP: 5, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 2, Varicella: 1, HepA: 1, MenACWY: 1 }, // Note OPV usually given at 4y, but IPV covers it here
  "11y": { HepB: 3, RV: 3, DTaP: 6, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 2, Varicella: 1, HepA: 1, MenACWY: 1 }, // Adolescent booster Tdap mapped to DTaP
  "12y": { HepB: 3, RV: 3, DTaP: 6, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 2, Varicella: 1, HepA: 1, MenACWY: 1 },
};

function generateTimeline(currentAge, lastScheduleKey) {
  const history = SCHEDULE_HISTORY[lastScheduleKey];
  const scheduledDoses = []; // Array of { age: number, vaccine: string, doseLabel: string }

  // Helper to schedule a dose
  const addDose = (vaccine, age, label) => {
    scheduledDoses.push({ age, vaccine, doseLabel: label });
  };

  // 1. Hepatitis B
  let hepBHistory = history.HepB;
  let hepBAge = currentAge;
  if (hepBHistory === 0) {
    addDose("Hepatitis B", hepBAge, "Dose 1");
    addDose("Hepatitis B", hepBAge + 1, "Dose 2");
    addDose("Hepatitis B", Math.max(hepBAge + 3, 6), "Dose 3");
  } else if (hepBHistory === 1) {
    addDose("Hepatitis B", hepBAge, "Dose 2");
    addDose("Hepatitis B", Math.max(hepBAge + 2, 6), "Dose 3");
  } else if (hepBHistory === 2) {
    addDose("Hepatitis B", Math.max(hepBAge, 6), "Dose 3");
  } // If 3, done.

  // 2. Rotavirus
  let rvHistory = history.RV;
  let rvAge = currentAge;
  if (rvHistory === 0 && rvAge < 4) { // Started before 15 weeks roughly
    addDose("Rotavirus", rvAge, "Dose 1");
    if (rvAge + 1 <= 8) addDose("Rotavirus", rvAge + 1, "Dose 2");
    if (rvAge + 2 <= 8) addDose("Rotavirus", rvAge + 2, "Dose 3");
  } else if (rvHistory === 1 && rvAge <= 8) {
    addDose("Rotavirus", rvAge, "Dose 2");
    if (rvAge + 1 <= 8) addDose("Rotavirus", rvAge + 1, "Dose 3");
  } else if (rvHistory === 2 && rvAge <= 8) {
    addDose("Rotavirus", rvAge, "Dose 3");
  }

  // 3. DTaP
  let dtapHistory = Math.min(history.DTaP, 5); // Tdap not explicitly calculated further here for simplicity unless adults
  let dtapAge = currentAge;
  if (dtapHistory < 5) {
    let nextAges = [];
    if (dtapHistory === 0) nextAges = [dtapAge, dtapAge + 1, dtapAge + 2, dtapAge + 8, dtapAge + 14];
    if (dtapHistory === 1) nextAges = [dtapAge, dtapAge + 1, dtapAge + 7, dtapAge + 13];
    if (dtapHistory === 2) nextAges = [dtapAge, dtapAge + 6, dtapAge + 12];
    if (dtapHistory === 3) nextAges = [dtapAge, dtapAge + 6];
    if (dtapHistory === 4) nextAges = [dtapAge];
    
    // Add logic for checking if Dose 4 is >= 48m, Dose 5 skipped
    let scheduledCount = dtapHistory + 1;
    for (let i = 0; i < nextAges.length; i++) {
        let ageScheduled = nextAges[i];
        if (scheduledCount === 5 && ageScheduled < 48) {
            // Need dose 5 if wait, wait, if dose 4 was given at >= 48m, skip dose 5
            // Actually, if we are scheduling Dose 5 right now, we check when Dose 4 was.
            // If Dose 4 was scheduled at >= 48, we break before adding Dose 5.
            if (nextAges[i-1] >= 48 || (dtapHistory===4 && dtapAge >= 48)) {
                break;
            }
            addDose("DTaP", ageScheduled, "Dose 5");
        } else if (scheduledCount < 5) {
            addDose("DTaP", ageScheduled, "Dose " + scheduledCount);
        } else if (scheduledCount === 5 && ageScheduled >= 48 && nextAges[i-1] < 48){
            addDose("DTaP", ageScheduled, "Dose 5");
        }
        scheduledCount++;
    }
  }

  // 4. Hib
  let hibHistory = history.Hib;
  let hibAge = currentAge;
  if (hibAge < 12) {
    if (hibHistory === 0) {
        addDose("Hib", hibAge, "Dose 1"); addDose("Hib", hibAge + 1, "Dose 2"); addDose("Hib", hibAge + 2, "Dose 3"); addDose("Hib", Math.max(hibAge + 4, 12), "Dose 4");
    }
    if (hibHistory === 1) {
        addDose("Hib", hibAge, "Dose 2"); addDose("Hib", hibAge + 1, "Dose 3"); addDose("Hib", Math.max(hibAge + 3, 12), "Dose 4");
    }
    if (hibHistory === 2) {
        addDose("Hib", hibAge, "Dose 3"); addDose("Hib", Math.max(hibAge + 2, 12), "Dose 4");
    }
    if (hibHistory === 3) addDose("Hib", Math.max(hibAge, 12), "Dose 4");
  } else if (hibAge >= 12 && hibAge <= 59) {
    if (hibHistory < 3) addDose("Hib", hibAge, "Final Dose (1 dose only)");
    if (hibHistory === 3) addDose("Hib", hibAge, "Final Dose");
  }

  // 5. PCV
  let pcvHistory = history.PCV;
  let pcvAge = currentAge;
  if (pcvAge >= 24 && pcvAge <= 59) {
    if (pcvHistory < 4) addDose("PCV", pcvAge, "Final Dose");
  } else if (pcvAge >= 12 && pcvAge < 24) {
    if (pcvHistory === 0) { addDose("PCV", pcvAge, "Dose 1"); addDose("PCV", pcvAge + 2, "Dose 2"); }
    if (pcvHistory === 1) { addDose("PCV", pcvAge, "Dose 2"); addDose("PCV", pcvAge + 2, "Dose 3"); }
    if (pcvHistory === 2) { addDose("PCV", pcvAge, "Dose 3"); addDose("PCV", pcvAge + 2, "Dose 4"); }
    if (pcvHistory === 3) addDose("PCV", pcvAge, "Dose 4");
  } else if (pcvAge < 12) {
    if (pcvHistory === 0) { addDose("PCV", pcvAge, "Dose 1"); addDose("PCV", pcvAge+1, "Dose 2"); addDose("PCV", pcvAge+2, "Dose 3"); addDose("PCV", Math.max(pcvAge+4, 12), "Dose 4"); }
    if (pcvHistory === 1) { addDose("PCV", pcvAge, "Dose 2"); addDose("PCV", pcvAge+1, "Dose 3"); addDose("PCV", Math.max(pcvAge+3, 12), "Dose 4"); }
    if (pcvHistory === 2) { addDose("PCV", pcvAge, "Dose 3"); addDose("PCV", Math.max(pcvAge+2, 12), "Dose 4"); }
    if (pcvHistory === 3) { addDose("PCV", Math.max(pcvAge, 12), "Dose 4"); }
  }

  // 6. IPV
  let ipvHistory = history.IPV;
  let ipvAge = currentAge;
  if (ipvHistory === 0) {
    addDose("IPV", ipvAge, "Dose 1"); addDose("IPV", ipvAge+1, "Dose 2"); addDose("IPV", ipvAge+2, "Dose 3"); addDose("IPV", Math.max(ipvAge+8, 48), "Dose 4");
  } else if (ipvHistory === 1) {
    addDose("IPV", ipvAge, "Dose 2"); addDose("IPV", ipvAge+1, "Dose 3"); addDose("IPV", Math.max(ipvAge+7, 48), "Dose 4");
  } else if (ipvHistory === 2) {
    addDose("IPV", ipvAge, "Dose 3"); addDose("IPV", Math.max(ipvAge+6, 48), "Dose 4");
  } else if (ipvHistory === 3) {
    addDose("IPV", Math.max(ipvAge, 48), "Dose 4");
  }

  // 7. BCG
  if (history.BCG === 0) {
    if (currentAge < 6) addDose("BCG", 6, "Dose 1");
    else if (currentAge <= 12) addDose("BCG", currentAge, "Dose 1");
    else addDose("BCG", currentAge, "Dose 1 (Requires PPD test)");
  }

  // 8. Measles (Monovalent)
  if (history.Measles === 0 && currentAge >= 9 && currentAge < 12) {
    addDose("Measles", currentAge, "Monovalent");
  }

  // 9. MMR
  let mmrHistory = history.MMR;
  let mmrAge = Math.max(12, currentAge);
  if (mmrHistory === 0) { addDose("MMR", mmrAge, "Dose 1"); addDose("MMR", mmrAge + 1, "Dose 2"); }
  else if (mmrHistory === 1) { addDose("MMR", mmrAge, "Dose 2"); }

  // 10. Varicella
  let varHistory = history.Varicella;
  let varAge = Math.max(12, currentAge);
  if (varHistory === 0) { 
    addDose("Varicella", varAge, "Dose 1"); 
    addDose("Varicella", varAge < 156 ? varAge + 3 : varAge + 1, "Dose 2"); 
  } else if (varHistory === 1) { 
    addDose("Varicella", varAge, "Dose 2"); 
  }

  // 11. HepA
  let hepaHistory = history.HepA;
  let hepaAge = Math.max(12, currentAge);
  if (hepaHistory === 0) { addDose("Hepatitis A", hepaAge, "Dose 1"); addDose("Hepatitis A", hepaAge + 6, "Dose 2"); }
  else if (hepaHistory === 1) { addDose("Hepatitis A", hepaAge, "Dose 2"); }

  // 12. MenACWY
  let menHistory = history.MenACWY;
  let menAge = Math.max(9, currentAge);
  if (menAge < 24) {
    if (menHistory === 0) { addDose("MenACWY", menAge, "Dose 1"); addDose("MenACWY", menAge + 3, "Dose 2"); addDose("MenACWY", 216, "Booster"); }
    else if (menHistory === 1 && history.Measles === 0 && currentAge < 12) { // Edge condition, usually history maps accurately
        addDose("MenACWY", 216, "Booster");
    }
  } else if (menAge >= 24 && menAge < 216) {
    if (menHistory === 0) { addDose("MenACWY", menAge, "Dose 1"); addDose("MenACWY", 216, "Booster"); }
  } else if (menAge >= 216) {
    if (menHistory === 0) { addDose("MenACWY", menAge, "Dose 1"); }
  }

  // Sort and Group Doses by Age
  scheduledDoses.sort((a, b) => a.age - b.age);

  const grouped = {};
  scheduledDoses.forEach(item => {
    if (!grouped[item.age]) grouped[item.age] = [];
    grouped[item.age].push(item);
  });

  return grouped;
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generate-btn");
  const ageInput = document.getElementById("patient-age");
  const historyInput = document.getElementById("last-schedule");
  const timelineContainer = document.getElementById("timeline-container");

  const formatAgeLabel = (months) => {
    if (months === 0) return "At Birth";
    if (months < 12) return `At ${months} Months`;
    const years = Math.floor(months / 12);
    const rem = months % 12;
    if (rem === 0) return `At ${years} Year${years > 1 ? 's' : ''}`;
    return `At ${years} Year${years > 1 ? 's' : ''}, ${rem} Month${rem > 1 ? 's' : ''}`;
  };

  const renderTimeline = () => {
    const ageVal = ageInput.value;
    if (ageVal === "" || isNaN(ageVal) || ageVal < 0) {
      alert("Please enter a valid age in months.");
      return;
    }

    const currentAge = parseInt(ageVal, 10);
    const historyKey = historyInput.value;
    const scheduleByAge = generateTimeline(currentAge, historyKey);

    // Clear previous timeline
    timelineContainer.innerHTML = "";
    timelineContainer.style.display = "flex";

    const sortedAges = Object.keys(scheduleByAge).map(Number).sort((a, b) => a - b);

    if (sortedAges.length === 0) {
      timelineContainer.innerHTML = `<div class="timeline-month"><div class="timeline-header"><h2>All Up to Date!</h2></div><div class="timeline-doses"><p style="color: white; padding: 20px;">No catch-up vaccines needed based on this history.</p></div></div>`;
      return;
    }

    sortedAges.forEach((ageMonth, index) => {
      const doses = scheduleByAge[ageMonth];
      const monthCard = document.createElement("div");
      monthCard.className = "timeline-month";
      monthCard.style.animationDelay = `${index * 0.1}s`;

      const header = document.createElement("div");
      header.className = "timeline-header";
      header.innerHTML = `
        <span class="age-badge">${ageMonth === currentAge ? 'NOW' : 'UPCOMING'}</span>
        <h2>${formatAgeLabel(ageMonth)}</h2>
      `;
      monthCard.appendChild(header);

      const dosesGrid = document.createElement("div");
      dosesGrid.className = "timeline-doses";

      doses.forEach(doseItem => {
         const doseEl = document.createElement("div");
         doseEl.className = "dose-item";
         doseEl.innerHTML = `
           <span class="dose-vaccine">${doseItem.vaccine}</span>
           <span class="dose-num">${doseItem.doseLabel}</span>
         `;
         dosesGrid.appendChild(doseEl);
      });

      monthCard.appendChild(dosesGrid);
      timelineContainer.appendChild(monthCard);
    });
  };

  btn.addEventListener("click", renderTimeline);
  
  ageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") renderTimeline();
  });
});
