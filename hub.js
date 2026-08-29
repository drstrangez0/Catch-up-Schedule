// Complete Vaccine Hub Database: Saudi National Schedule & Catch-up Rules
const VACCINES_DATABASE = [
  {
    id: "hepb",
    name: "Hepatitis B",
    acronym: "HepB",
    category: "infant",
    categoryLabel: "Infant Series (0–6m)",
    targetDiseases: "Hepatitis B viral infection, chronic liver disease, cirrhosis, and hepatocellular carcinoma.",
    saudiSchedule: [
      { age: "At Birth", dose: "Dose 1 (Monovalent within 24h of birth)" },
      { age: "2 Months", dose: "Dose 2 (Hexavalent combination)" },
      { age: "4 Months", dose: "Dose 3 (Hexavalent combination)" },
      { age: "6 Months", dose: "Dose 4 (Hexavalent combination)" }
    ],
    minAge: "Birth (0 weeks / first 24 hours of life)",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 2 → Dose 3", minInterval: "8 weeks (2 months)" },
      { fromTo: "Dose 1 → Final Dose", minInterval: "16 weeks (4 months)" }
    ],
    catchUpRules: [
      "The final dose must NOT be given before 24 weeks (6 months) of age.",
      "For delayed infants starting catch-up after birth, a 3-dose series with proper intervals (0, 1 month, 6 months) provides full protective immunity.",
      "If the child receives the routine Saudi hexavalent combination (DTaP-Hib-HepB-IPV) at 2, 4, and 6 months in addition to the birth dose, 4 total doses are recorded and valid.",
      "Preterm infants born to HBsAg-negative mothers weighing <2,000 g: The birth dose does not count toward the 3-dose series; begin 3-dose series at 1 month of chronologic age."
    ]
  },
  {
    id: "rv",
    name: "Rotavirus",
    acronym: "RV",
    category: "infant",
    categoryLabel: "Infant Series (2–6m)",
    targetDiseases: "Severe rotaviral gastroenteritis, severe dehydration, and infant diarrhea.",
    saudiSchedule: [
      { age: "2 Months", dose: "Dose 1" },
      { age: "4 Months", dose: "Dose 2" },
      { age: "6 Months", dose: "Dose 3 (Final dose)" }
    ],
    minAge: "6 weeks of age",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 2 → Dose 3", minInterval: "4 weeks (1 month)" }
    ],
    catchUpRules: [
      "STRICT STARTING AGE LIMIT: The first dose must NOT be administered after 15 weeks (14 weeks 6 days / ~3.5 months) of age. If unimmunized at ≥15 weeks, Rotavirus vaccination is NOT recommended and must be omitted.",
      "STRICT FINAL AGE LIMIT: The final dose must NOT be given past the maximum age limit: Rotarix (6 months), RotaTeq (8 months), Rotasiil (12 months). Standard maximum age for any dose is 8 months 0 days.",
      "If any dose in the series was RotaTeq or if the brand is unknown, a default 3-dose series is required.",
      "Do not repeat dose if infant spits up or regurgitates; continue schedule at recommended intervals."
    ]
  },
  {
    id: "dtap",
    name: "Diphtheria, Tetanus, acellular Pertussis",
    acronym: "DTaP",
    category: "infant",
    categoryLabel: "Infant & Childhood (2m–6y)",
    targetDiseases: "Diphtheria (respiratory/cutaneous), Tetanus (lockjaw), and Pertussis (whooping cough).",
    saudiSchedule: [
      { age: "2 Months", dose: "Dose 1 (Hexavalent)" },
      { age: "4 Months", dose: "Dose 2 (Hexavalent)" },
      { age: "6 Months", dose: "Dose 3 (Hexavalent)" },
      { age: "18 Months", dose: "Dose 4 (Booster 1)" },
      { age: "4–6 Years", dose: "Dose 5 (School Booster 2)" }
    ],
    minAge: "6 weeks of age",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 2 → Dose 3", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 3 → Dose 4", minInterval: "6 months" },
      { fromTo: "Dose 4 → Dose 5", minInterval: "6 months" }
    ],
    catchUpRules: [
      "4-YEAR MILESTONE RULE: If Dose 4 is administered at ≥4 years of age (with at least 6 months after Dose 3), Dose 5 is NOT needed and is skipped.",
      "If Dose 4 is administered before age 4 years (<48 months), Dose 5 must be given at 4–6 years with a minimum interval of 6 months from Dose 4.",
      "DTaP is approved for children <7 years of age. For children aged 7 years and older, Td or Tdap must be used instead of DTaP."
    ]
  },
  {
    id: "hib",
    name: "Haemophilus influenzae type b",
    acronym: "Hib",
    category: "infant",
    categoryLabel: "Infant & Toddler (2m–18m)",
    targetDiseases: "Bacterial meningitis, epiglottitis, pneumonia, sepsis, and septic arthritis caused by Hib.",
    saudiSchedule: [
      { age: "2 Months", dose: "Dose 1 (Hexavalent)" },
      { age: "4 Months", dose: "Dose 2 (Hexavalent)" },
      { age: "6 Months", dose: "Dose 3 (Hexavalent)" },
      { age: "18 Months", dose: "Dose 4 (Booster)" }
    ],
    minAge: "6 weeks of age",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 2 → Dose 3", minInterval: "4 weeks (1 month)" },
      { fromTo: "Previous Dose → Booster", minInterval: "8 weeks (and child must be ≥12 months)" }
    ],
    catchUpRules: [
      "AGE 12–59 MONTHS (1–5 YEARS): Unimmunized or partially immunized children (who received 0 or 1 dose before 12m, or 2 doses before 12m with no booster) require ONLY 1 SINGLE CATCH-UP DOSE.",
      "If a child aged 12–59 months received 3 doses before 12 months, administer 1 final booster dose at least 8 weeks after Dose 3.",
      "AGE ≥5 YEARS (≥60 MONTHS): Healthy children older than 5 years do NOT need Hib vaccination.",
      "High-risk individuals (asplenia, sickle cell disease, immunodeficiency) may receive Hib at any age regardless of prior history."
    ]
  },
  {
    id: "pcv",
    name: "Pneumococcal Conjugate Vaccine",
    acronym: "PCV",
    category: "infant",
    categoryLabel: "Infant & Toddler (2m–12m)",
    targetDiseases: "Invasive pneumococcal disease (Streptococcus pneumoniae bacteremia, meningitis, pneumonia, acute otitis media).",
    saudiSchedule: [
      { age: "2 Months", dose: "Dose 1" },
      { age: "4 Months", dose: "Dose 2" },
      { age: "6 Months", dose: "Dose 3" },
      { age: "12 Months", dose: "Dose 4 (Booster)" }
    ],
    minAge: "6 weeks of age",
    intervals: [
      { fromTo: "Doses before 12m", minInterval: "4 weeks between doses" },
      { fromTo: "Previous Dose → Booster", minInterval: "8 weeks (and child must be ≥12 months)" }
    ],
    catchUpRules: [
      "STARTING AT 12–23 MONTHS: Unvaccinated children require 2 doses separated by at least 8 weeks.",
      "STARTING AT ≥24 MONTHS (24–59 MONTHS): Unvaccinated healthy children require ONLY 1 SINGLE DOSE (no further doses needed).",
      "AGE ≥5 YEARS (≥60 MONTHS): Healthy children older than 5 years do NOT require PCV vaccination.",
      "Children with underlying medical conditions (cochlear implants, sickle cell, asplenia, CSF leak) require additional doses of PCV and PPSV23 according to high-risk protocols."
    ]
  },
  {
    id: "polio",
    name: "Polio (IPV & OPV)",
    acronym: "IPV / OPV",
    category: "infant",
    categoryLabel: "Infant through School Age (2m–6y)",
    targetDiseases: "Poliomyelitis (acute flaccid paralysis).",
    saudiSchedule: [
      { age: "2 Months", dose: "IPV (Dose 1 - Hexavalent)" },
      { age: "4 Months", dose: "IPV (Dose 2 - Hexavalent)" },
      { age: "6 Months", dose: "IPV (Dose 3 - Hexavalent) & OPV (Dose 1)" },
      { age: "12 Months", dose: "OPV (Dose 2)" },
      { age: "18 Months", dose: "OPV (Dose 3)" },
      { age: "4–6 Years", dose: "OPV (Dose 4) / IPV (Dose 4)" }
    ],
    minAge: "6 weeks of age",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 2 → Dose 3", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 3 → Final Dose", minInterval: "6 months" }
    ],
    catchUpRules: [
      "FINAL DOSE MINIMUM AGE: The final dose in the series must NOT be given before 4 years (48 months) of age, regardless of the number of prior doses.",
      "If 4 or more doses are given prior to age 4 years, an additional dose must still be administered at age 4–6 years (min 6 months after previous dose).",
      "Inactivated Poliovirus Vaccine (IPV) is preferred for immunocompromised patients and their household contacts."
    ]
  },
  {
    id: "bcg",
    name: "Bacille Calmette-Guérin (Tuberculosis)",
    acronym: "BCG",
    category: "infant",
    categoryLabel: "Infant (6–12m)",
    targetDiseases: "Severe forms of tuberculosis in infants and children (TB meningitis and miliary disseminated TB).",
    saudiSchedule: [
      { age: "6 Months", dose: "Single intradermal dose" }
    ],
    minAge: "6 months of age (in routine Saudi MOH schedule)",
    intervals: [
      { fromTo: "Single dose", minInterval: "N/A (Single lifetime dose)" }
    ],
    catchUpRules: [
      "BETWEEN 6–12 MONTHS: BCG is administered as a single dose WITHOUT requiring a prior PPD (tuberculin skin) test.",
      "AFTER 12 MONTHS OF AGE: BCG is indicated ONLY for high-risk groups and REQUIRES a prior PPD (Mantoux) skin test. If PPD test is negative (induration <5mm), BCG may be administered.",
      "BCG is contraindicated in infants with suspected or confirmed cellular immunodeficiency (e.g. SCID, HIV) or immunosuppressive therapy."
    ]
  },
  {
    id: "measles",
    name: "Monovalent Measles",
    acronym: "Measles",
    category: "infant",
    categoryLabel: "Infant (9m)",
    targetDiseases: "Measles (rubeola) viral infection, pneumonia, encephalitis, and subacute sclerosing panencephalitis (SSPE).",
    saudiSchedule: [
      { age: "9 Months", dose: "Dose 1 (Monovalent)" }
    ],
    minAge: "9 months of age",
    intervals: [
      { fromTo: "Measles → MMR 1", minInterval: "At least 4 weeks (standard at 12m)" }
    ],
    catchUpRules: [
      "Administered at 9–11 months to provide critical early antibody coverage before the routine MMR series at 12 months.",
      "IF CHILD IS ≥12 MONTHS: The monovalent measles dose is OMITTED, and the patient proceeds directly with the routine MMR series.",
      "Any measles-containing vaccine administered before 12 months does not count toward the standard 2-dose MMR requirement."
    ]
  },
  {
    id: "mmr",
    name: "Measles, Mumps, Rubella",
    acronym: "MMR",
    category: "toddler",
    categoryLabel: "Toddler & School Age (12m–6y)",
    targetDiseases: "Measles, Mumps (parotitis, orchitis, aseptic meningitis), and Rubella (German measles, congenital rubella syndrome).",
    saudiSchedule: [
      { age: "12 Months", dose: "Dose 1" },
      { age: "18 Months", dose: "Dose 2" },
      { age: "4–6 Years", dose: "Dose 3 (School Entry Booster)" }
    ],
    minAge: "12 months of age",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "4 weeks (1 month)" },
      { fromTo: "Dose 2 → Dose 3", minInterval: "4 weeks (1 month)" }
    ],
    catchUpRules: [
      "MINIMUM AGE: First dose must be administered on or after the first birthday (≥12 months). Doses given prior to 12 months are invalid and must be repeated at ≥12 months.",
      "In delayed catch-up, the minimum interval between all MMR doses is 4 weeks.",
      "LIVE VIRUS SPACING: If MMR and Varicella are not administered simultaneously on the same calendar day, they must be separated by at least 28 days (4 weeks)."
    ]
  },
  {
    id: "varicella",
    name: "Varicella (Chickenpox)",
    acronym: "Varicella",
    category: "toddler",
    categoryLabel: "Toddler & School Age (18m–6y)",
    targetDiseases: "Varicella-zoster infection (chickenpox), secondary bacterial skin infections, pneumonia, and encephalitis.",
    saudiSchedule: [
      { age: "18 Months", dose: "Dose 1" },
      { age: "4–6 Years", dose: "Dose 2 (School Entry Booster)" }
    ],
    minAge: "12 months of age (Routine at 18m)",
    intervals: [
      { fromTo: "Age < 13 Years", minInterval: "3 months between doses" },
      { fromTo: "Age ≥ 13 Years", minInterval: "4 weeks (28 days) between doses" }
    ],
    catchUpRules: [
      "In catch-up, Dose 1 can be administered starting at 12 months of age.",
      "Interval is 3 months for children younger than 13 years (<156 months). If Dose 2 is accidentally given at an interval ≥4 weeks but <3 months, it does not need to be repeated.",
      "For persons aged 13 years and older, 2 doses separated by at least 4 weeks are required.",
      "LIVE VACCINE RULE: Separate by at least 4 weeks from MMR if not administered simultaneously on the same visit."
    ]
  },
  {
    id: "hepa",
    name: "Hepatitis A",
    acronym: "HepA",
    category: "toddler",
    categoryLabel: "Toddler (18m–24m)",
    targetDiseases: "Hepatitis A viral infection, acute hepatitis, jaundice, and fulminant hepatic failure.",
    saudiSchedule: [
      { age: "18 Months", dose: "Dose 1" },
      { age: "24 Months", dose: "Dose 2 (Final dose)" }
    ],
    minAge: "12 months of age (Routine at 18m)",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "6 months" }
    ],
    catchUpRules: [
      "A complete series consists of 2 doses separated by at least 6 months.",
      "In catch-up schedules, Dose 1 can be given at any time on or after 12 months of age, with Dose 2 administered 6 months later.",
      "If the interval between doses is extended (e.g. years later), the series does NOT need to be restarted; simply administer Dose 2."
    ]
  },
  {
    id: "menacwy",
    name: "Meningococcal Conjugate (MenACWY / MCV4)",
    acronym: "MCV4",
    category: "adolescent",
    categoryLabel: "Infant, Toddler & Adolescent (9m, 12m, 18y)",
    targetDiseases: "Invasive meningococcal disease (meningococcal meningitis, fulminant purpura, septicemia) caused by serogroups A, C, W, and Y.",
    saudiSchedule: [
      { age: "9 Months", dose: "Dose 1" },
      { age: "12 Months", dose: "Dose 2" },
      { age: "18 Years", dose: "Dose 3 (Adolescent/Adult Booster)" }
    ],
    minAge: "9 months of age",
    intervals: [
      { fromTo: "Children < 2 Years (<24m)", minInterval: "3 months between Dose 1 and Dose 2" },
      { fromTo: "Adolescent Booster", minInterval: "Routine booster at 18 years of age" }
    ],
    catchUpRules: [
      "CHILDREN AGED ≥2 YEARS: If unimmunized at age 2 years or older, ONLY 1 SINGLE PRIMARY DOSE is needed.",
      "ROUTINE BOOSTER AT 18 YEARS: A routine adolescent booster dose (Dose 3) is given at 18 years of age.",
      "High-risk persons (asplenia, complement deficiency, Hajj/Umrah pilgrims, travelers to endemic meningitis belt) should receive revaccination every 5 years if risk persists."
    ]
  },
  {
    id: "tdap",
    name: "Tetanus, Reduced Diphtheria, Acellular Pertussis",
    acronym: "Tdap",
    category: "adolescent",
    categoryLabel: "Adolescent (11y)",
    targetDiseases: "Tetanus, Diphtheria, and Pertussis in adolescents and adults.",
    saudiSchedule: [
      { age: "11 Years", dose: "Adolescent Booster (Dose 1)" }
    ],
    minAge: "10–11 years of age",
    intervals: [
      { fromTo: "Single booster", minInterval: "Given at 11 years (Can be given regardless of interval since last Td)" }
    ],
    catchUpRules: [
      "Administered routinely at 11 years of age to restore immunity against pertussis and tetanus.",
      "Adolescents aged 11–18 years who have not received Tdap should receive a single dose.",
      "Pregnant adolescents and women should receive 1 dose of Tdap during EACH pregnancy (preferably between 27 and 36 weeks gestation) regardless of prior vaccination history."
    ]
  },
  {
    id: "hpv",
    name: "Human Papillomavirus",
    acronym: "HPV",
    category: "adolescent",
    categoryLabel: "Adolescent (11y–12y)",
    targetDiseases: "Cervical, anogenital, and oropharyngeal cancers, precancerous lesions, and genital warts caused by HPV types.",
    saudiSchedule: [
      { age: "11 Years", dose: "Dose 1" },
      { age: "12 Years", dose: "Dose 2 (Final dose)" }
    ],
    minAge: "9–11 years of age",
    intervals: [
      { fromTo: "Dose 1 → Dose 2", minInterval: "6 to 12 months" }
    ],
    catchUpRules: [
      "2-DOSE SCHEDULE (<15 YEARS): For persons starting the series before age 15, a 2-dose series (at 0 and 6–12 months) is complete and fully protective.",
      "3-DOSE SCHEDULE (≥15 YEARS): If the first dose is given on or after the 15th birthday, a 3-dose schedule (0, 1–2, 6 months) is recommended.",
      "Immunocompromised individuals (e.g. HIV, immunosuppressive therapy) require a 3-dose series regardless of age at initiation."
    ]
  }
];

// Helper to filter vaccines
function getCategoryTag(category) {
  switch (category) {
    case "infant": return '<span class="vax-cat-pill cat-infant">Infant (0–12m)</span>';
    case "toddler": return '<span class="vax-cat-pill cat-toddler">Toddler (1–2y)</span>';
    case "child": return '<span class="vax-cat-pill cat-child">Childhood (4–6y)</span>';
    case "adolescent": return '<span class="vax-cat-pill cat-adolescent">Adolescent (11–18y)</span>';
    default: return '';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const hubGrid = document.getElementById("vaccine-hub-grid");
  const searchInput = document.getElementById("vaccine-search");
  const filterChips = document.getElementById("filter-chips");
  const countText = document.getElementById("hub-count-text");
  const expandAllBtn = document.getElementById("expand-all-btn");
  const collapseAllBtn = document.getElementById("collapse-all-btn");
  const printHubBtn = document.getElementById("print-hub-btn");

  // National Schedule Modal elements
  const viewScheduleBtn = document.getElementById("view-schedule-btn");
  const scheduleModal = document.getElementById("schedule-modal");
  const scheduleModalCloseBtn = document.getElementById("schedule-modal-close-btn");
  const scheduleModalCancelBtn = document.getElementById("schedule-modal-cancel-btn");

  let currentFilter = "all";
  let searchQuery = "";

  // Modal Handlers
  if (viewScheduleBtn && scheduleModal) {
    viewScheduleBtn.addEventListener("click", () => scheduleModal.style.display = "flex");
    scheduleModalCloseBtn.addEventListener("click", () => scheduleModal.style.display = "none");
    scheduleModalCancelBtn.addEventListener("click", () => scheduleModal.style.display = "none");
    scheduleModal.addEventListener("click", (e) => {
      if (e.target === scheduleModal) scheduleModal.style.display = "none";
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && scheduleModal) {
      scheduleModal.style.display = "none";
    }
  });

  // Render Vaccine Cards
  const renderVaccines = () => {
    hubGrid.innerHTML = "";

    const filtered = VACCINES_DATABASE.filter(vax => {
      // Category match
      let matchCat = true;
      if (currentFilter === "infant") matchCat = (vax.category === "infant");
      else if (currentFilter === "toddler") matchCat = (vax.category === "toddler" || vax.category === "infant");
      else if (currentFilter === "child") matchCat = (vax.category === "child" || vax.saudiSchedule.some(s => s.age.includes("4–6")));
      else if (currentFilter === "adolescent") matchCat = (vax.category === "adolescent");

      // Search match
      let matchSearch = true;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        matchSearch = vax.name.toLowerCase().includes(q) ||
          vax.acronym.toLowerCase().includes(q) ||
          vax.targetDiseases.toLowerCase().includes(q) ||
          vax.catchUpRules.some(r => r.toLowerCase().includes(q));
      }

      return matchCat && matchSearch;
    });

    countText.textContent = `Showing ${filtered.length} of ${VACCINES_DATABASE.length} vaccines`;

    if (filtered.length === 0) {
      hubGrid.innerHTML = `
        <div class="hub-empty-state">
          <h3>No matching vaccines found</h3>
          <p>Try searching for a different vaccine name or clear your filters.</p>
        </div>
      `;
      return;
    }

    filtered.forEach((vax, index) => {
      const card = document.createElement("article");
      card.className = "hub-card";
      card.id = `vax-card-${vax.id}`;
      card.style.animationDelay = `${index * 0.04}s`;

      // Routine Schedule items HTML
      const scheduleItemsHTML = vax.saudiSchedule.map(s => `
        <div class="hub-sched-item">
          <span class="hub-sched-age">${s.age}</span>
          <span class="hub-sched-dose">${s.dose}</span>
        </div>
      `).join("");

      // Intervals table HTML
      const intervalsHTML = vax.intervals.map(int => `
        <tr>
          <td><strong>${int.fromTo}</strong></td>
          <td><span class="interval-badge">${int.minInterval}</span></td>
        </tr>
      `).join("");

      // Catch-up rules list HTML
      const rulesListHTML = vax.catchUpRules.map(rule => `
        <li class="hub-rule-item">${rule}</li>
      `).join("");

      card.innerHTML = `
        <div class="hub-card-header">
          <div class="hub-card-title-wrap">
            <div class="hub-badge-group">
              <span class="hub-acronym-badge">${vax.acronym}</span>
              ${getCategoryTag(vax.category)}
            </div>
            <h2>${vax.name}</h2>
            <p class="hub-diseases"><strong>Target:</strong> ${vax.targetDiseases}</p>
          </div>
          <button type="button" class="hub-card-toggle" aria-label="Toggle details">
            <span class="toggle-icon">▼</span>
          </button>
        </div>

        <div class="hub-card-content">
          <!-- 1. Saudi Routine Schedule -->
          <div class="hub-section">
            <h3 class="hub-section-title">
              <span class="sec-icon">🇸🇦</span>
              <span>1. Routine Saudi National Schedule Timing</span>
            </h3>
            <div class="hub-sched-grid">
              ${scheduleItemsHTML}
            </div>
          </div>

          <!-- 2. Minimum Age & Intervals -->
          <div class="hub-section">
            <h3 class="hub-section-title">
              <span class="sec-icon">⏱️</span>
              <span>2. Minimum Starting Age & Dose Intervals</span>
            </h3>
            <div class="min-age-callout">
              <strong>Minimum Starting Age for 1st Dose:</strong>
              <span class="min-age-pill">${vax.minAge}</span>
            </div>
            <table class="hub-intervals-table">
              <thead>
                <tr>
                  <th style="width: 50%;">Dose Sequence</th>
                  <th style="width: 50%;">Minimum Required Interval</th>
                </tr>
              </thead>
              <tbody>
                ${intervalsHTML}
              </tbody>
            </table>
          </div>

          <!-- 3. Catch-up Rules & Special Scenarios -->
          <div class="hub-section">
            <h3 class="hub-section-title">
              <span class="sec-icon">💡</span>
              <span>3. Catch-up Rules & Special Clinical Scenarios</span>
            </h3>
            <ul class="hub-rules-list">
              ${rulesListHTML}
            </ul>
          </div>
        </div>
      `;

      // Toggle collapse/expand per card
      const toggleBtn = card.querySelector(".hub-card-toggle");
      const content = card.querySelector(".hub-card-content");
      const cardHeader = card.querySelector(".hub-card-header");

      const toggleCard = () => {
        const isCollapsed = card.classList.toggle("collapsed");
        toggleBtn.querySelector(".toggle-icon").textContent = isCollapsed ? "▲" : "▼";
      };

      toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleCard();
      });
      cardHeader.addEventListener("click", toggleCard);

      hubGrid.appendChild(card);
    });
  };

  // Search input listener
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderVaccines();
  });

  // Filter chips listener
  filterChips.querySelectorAll(".filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      filterChips.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentFilter = chip.dataset.filter;
      renderVaccines();
    });
  });

  // Expand / Collapse All
  expandAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".hub-card").forEach(c => {
      c.classList.remove("collapsed");
      const icon = c.querySelector(".toggle-icon");
      if (icon) icon.textContent = "▼";
    });
  });

  collapseAllBtn.addEventListener("click", () => {
    document.querySelectorAll(".hub-card").forEach(c => {
      c.classList.add("collapsed");
      const icon = c.querySelector(".toggle-icon");
      if (icon) icon.textContent = "▲";
    });
  });

  // Print Guide
  if (printHubBtn) {
    printHubBtn.addEventListener("click", () => {
      // Expand all before printing
      document.querySelectorAll(".hub-card").forEach(c => c.classList.remove("collapsed"));
      window.print();
    });
  }

  // Initial render
  renderVaccines();
});
