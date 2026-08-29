// Exact Saudi National Immunization Schedule Catalog
const SAUDI_SCHEDULE_CATALOG = [
  {
    monthId: "birth",
    monthLabel: "Birth",
    vaccines: [
      { id: "hepb_1", vax: "HepB", label: "HepB (Dose 1)" }
    ]
  },
  {
    monthId: "2m",
    monthLabel: "2 Months",
    vaccines: [
      { id: "hepb_2", vax: "HepB", label: "HepB (Dose 2)" },
      { id: "rv_1", vax: "RV", label: "RV (Dose 1)" },
      { id: "dtap_1", vax: "DTaP", label: "DTaP (Dose 1)" },
      { id: "hib_1", vax: "Hib", label: "Hib (Dose 1)" },
      { id: "pcv_1", vax: "PCV", label: "PCV (Dose 1)" },
      { id: "ipv_1", vax: "IPV", label: "IPV (Dose 1)" }
    ]
  },
  {
    monthId: "4m",
    monthLabel: "4 Months",
    vaccines: [
      { id: "hepb_3", vax: "HepB", label: "HepB (Dose 3)" },
      { id: "rv_2", vax: "RV", label: "RV (Dose 2)" },
      { id: "dtap_2", vax: "DTaP", label: "DTaP (Dose 2)" },
      { id: "hib_2", vax: "Hib", label: "Hib (Dose 2)" },
      { id: "pcv_2", vax: "PCV", label: "PCV (Dose 2)" },
      { id: "ipv_2", vax: "IPV", label: "IPV (Dose 2)" }
    ]
  },
  {
    monthId: "6m",
    monthLabel: "6 Months",
    vaccines: [
      { id: "bcg_1", vax: "BCG", label: "BCG (Dose 1)" },
      { id: "hepb_4", vax: "HepB", label: "HepB (Dose 4)" },
      { id: "rv_3", vax: "RV", label: "RV (Dose 3)" },
      { id: "dtap_3", vax: "DTaP", label: "DTaP (Dose 3)" },
      { id: "hib_3", vax: "Hib", label: "Hib (Dose 3)" },
      { id: "pcv_3", vax: "PCV", label: "PCV (Dose 3)" },
      { id: "ipv_3", vax: "IPV", label: "IPV (Dose 3)" },
      { id: "opv_1", vax: "OPV", label: "OPV (Dose 1)" }
    ]
  },
  {
    monthId: "9m",
    monthLabel: "9 Months",
    vaccines: [
      { id: "measles_1", vax: "Measles", label: "Measles (Dose 1)" },
      { id: "mcv4_1", vax: "MenACWY", label: "MCV4 (Dose 1)" }
    ]
  },
  {
    monthId: "12m",
    monthLabel: "12 Months",
    vaccines: [
      { id: "pcv_4", vax: "PCV", label: "PCV (Dose 4)" },
      { id: "opv_2", vax: "OPV", label: "OPV (Dose 2)" },
      { id: "mcv4_2", vax: "MenACWY", label: "MCV4 (Dose 2)" },
      { id: "mmr_1", vax: "MMR", label: "MMR (Dose 1)" }
    ]
  },
  {
    monthId: "18m",
    monthLabel: "18 Months",
    vaccines: [
      { id: "dtap_4", vax: "DTaP", label: "DTaP (Dose 4)" },
      { id: "hib_4", vax: "Hib", label: "Hib (Dose 4)" },
      { id: "opv_3", vax: "OPV", label: "OPV (Dose 3)" },
      { id: "hepa_1", vax: "HepA", label: "HepA (Dose 1)" },
      { id: "varicella_1", vax: "Varicella", label: "Varicella (Dose 1)" },
      { id: "mmr_2", vax: "MMR", label: "MMR (Dose 2)" }
    ]
  },
  {
    monthId: "24m",
    monthLabel: "24 Months",
    vaccines: [
      { id: "hepa_2", vax: "HepA", label: "HepA (Dose 2)" }
    ]
  },
  {
    monthId: "4y",
    monthLabel: "4–6 Years",
    vaccines: [
      { id: "dtap_5", vax: "DTaP", label: "DTaP (Dose 5)" },
      { id: "opv_4", vax: "OPV", label: "OPV (Dose 4)" },
      { id: "varicella_2", vax: "Varicella", label: "Varicella (Dose 2)" },
      { id: "mmr_3", vax: "MMR", label: "MMR (Dose 3)" }
    ]
  },
  {
    monthId: "11y",
    monthLabel: "11 Years",
    vaccines: [
      { id: "tdap_1", vax: "Tdap", label: "Tdap (Dose 1)" },
      { id: "hpv_1", vax: "HPV", label: "HPV (Dose 1)" }
    ]
  },
  {
    monthId: "12y",
    monthLabel: "12 Years",
    vaccines: [
      { id: "hpv_2", vax: "HPV", label: "HPV (Dose 2)" }
    ]
  },
  {
    monthId: "18y",
    monthLabel: "18 Years",
    vaccines: [
      { id: "mcv4_3", vax: "MenACWY", label: "MCV4 (Dose 3)" }
    ]
  }
];

// Preset Schedule History mapping
const SCHEDULE_HISTORY = {
  "None": { HepB: 0, RV: 0, DTaP: 0, Hib: 0, PCV: 0, IPV: 0, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 },
  "Birth": { HepB: 1, RV: 0, DTaP: 0, Hib: 0, PCV: 0, IPV: 0, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 },
  "2m": { HepB: 2, RV: 1, DTaP: 1, Hib: 1, PCV: 1, IPV: 1, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 },
  "4m": { HepB: 3, RV: 2, DTaP: 2, Hib: 2, PCV: 2, IPV: 2, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 },
  "6m": { HepB: 4, RV: 3, DTaP: 3, Hib: 3, PCV: 3, IPV: 3, BCG: 1, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 },
  "9m": { HepB: 4, RV: 3, DTaP: 3, Hib: 3, PCV: 3, IPV: 3, BCG: 1, Measles: 1, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 1, HPV: 0, Tdap: 0 },
  "12m": { HepB: 4, RV: 3, DTaP: 3, Hib: 3, PCV: 4, IPV: 3, BCG: 1, Measles: 1, MMR: 1, Varicella: 0, HepA: 0, MenACWY: 2, HPV: 0, Tdap: 0 },
  "18m": { HepB: 4, RV: 3, DTaP: 4, Hib: 4, PCV: 4, IPV: 3, BCG: 1, Measles: 1, MMR: 2, Varicella: 1, HepA: 1, MenACWY: 2, HPV: 0, Tdap: 0 },
  "24m": { HepB: 4, RV: 3, DTaP: 4, Hib: 4, PCV: 4, IPV: 3, BCG: 1, Measles: 1, MMR: 2, Varicella: 1, HepA: 2, MenACWY: 2, HPV: 0, Tdap: 0 },
  "4y": { HepB: 4, RV: 3, DTaP: 5, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 3, Varicella: 2, HepA: 2, MenACWY: 2, HPV: 0, Tdap: 0 },
  "11y": { HepB: 4, RV: 3, DTaP: 5, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 3, Varicella: 2, HepA: 2, MenACWY: 2, HPV: 1, Tdap: 1 },
  "12y": { HepB: 4, RV: 3, DTaP: 5, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 3, Varicella: 2, HepA: 2, MenACWY: 2, HPV: 2, Tdap: 1 },
  "18y": { HepB: 4, RV: 3, DTaP: 5, Hib: 4, PCV: 4, IPV: 4, BCG: 1, Measles: 1, MMR: 3, Varicella: 2, HepA: 2, MenACWY: 3, HPV: 2, Tdap: 1 }
};

// Preset Milestone to checkbox IDs mapping for pre-filling custom modal
const PRESET_CHECKBOX_MAP = {
  "None": [],
  "Birth": ["hepb_1"],
  "2m": ["hepb_1", "hepb_2", "rv_1", "dtap_1", "hib_1", "pcv_1", "ipv_1"],
  "4m": ["hepb_1", "hepb_2", "hepb_3", "rv_1", "rv_2", "dtap_1", "dtap_2", "hib_1", "hib_2", "pcv_1", "pcv_2", "ipv_1", "ipv_2"],
  "6m": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "hib_1", "hib_2", "hib_3", "pcv_1", "pcv_2", "pcv_3", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1"],
  "9m": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "hib_1", "hib_2", "hib_3", "pcv_1", "pcv_2", "pcv_3", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "measles_1", "mcv4_1"],
  "12m": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "hib_1", "hib_2", "hib_3", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "measles_1", "mcv4_1", "mcv4_2", "mmr_1"],
  "18m": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "dtap_4", "hib_1", "hib_2", "hib_3", "hib_4", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "opv_3", "measles_1", "mcv4_1", "mcv4_2", "mmr_1", "mmr_2", "hepa_1", "varicella_1"],
  "24m": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "dtap_4", "hib_1", "hib_2", "hib_3", "hib_4", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "opv_3", "measles_1", "mcv4_1", "mcv4_2", "mmr_1", "mmr_2", "hepa_1", "hepa_2", "varicella_1"],
  "4y": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "dtap_4", "dtap_5", "hib_1", "hib_2", "hib_3", "hib_4", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "opv_3", "opv_4", "measles_1", "mcv4_1", "mcv4_2", "mmr_1", "mmr_2", "mmr_3", "hepa_1", "hepa_2", "varicella_1", "varicella_2"],
  "11y": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "dtap_4", "dtap_5", "tdap_1", "hpv_1", "hib_1", "hib_2", "hib_3", "hib_4", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "opv_3", "opv_4", "measles_1", "mcv4_1", "mcv4_2", "mmr_1", "mmr_2", "mmr_3", "hepa_1", "hepa_2", "varicella_1", "varicella_2"],
  "12y": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "dtap_4", "dtap_5", "tdap_1", "hpv_1", "hpv_2", "hib_1", "hib_2", "hib_3", "hib_4", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "opv_3", "opv_4", "measles_1", "mcv4_1", "mcv4_2", "mmr_1", "mmr_2", "mmr_3", "hepa_1", "hepa_2", "varicella_1", "varicella_2"],
  "18y": ["hepb_1", "hepb_2", "hepb_3", "hepb_4", "rv_1", "rv_2", "rv_3", "dtap_1", "dtap_2", "dtap_3", "dtap_4", "dtap_5", "tdap_1", "hpv_1", "hpv_2", "hib_1", "hib_2", "hib_3", "hib_4", "pcv_1", "pcv_2", "pcv_3", "pcv_4", "ipv_1", "ipv_2", "ipv_3", "bcg_1", "opv_1", "opv_2", "opv_3", "opv_4", "measles_1", "mcv4_1", "mcv4_2", "mcv4_3", "mmr_1", "mmr_2", "mmr_3", "hepa_1", "hepa_2", "varicella_1", "varicella_2"]
};

const SCHEDULE_LABELS = {
  "None": "None (0 Doses)",
  "Birth": "Birth (HepB 1)",
  "2m": "2 Months Completed",
  "4m": "4 Months Completed",
  "6m": "6 Months Completed",
  "9m": "9 Months Completed",
  "12m": "12 Months Completed",
  "18m": "18 Months Completed",
  "24m": "24 Months Completed",
  "4y": "4–6 Years Completed",
  "11y": "11 Years Completed",
  "12y": "12 Years Completed",
  "18y": "18 Years Completed",
  "Custom": "Custom Selection"
};

// Global state for custom checked vaccine IDs
let selectedCustomDoseIds = new Set();
let customHistoryCounts = { HepB: 0, RV: 0, DTaP: 0, Hib: 0, PCV: 0, IPV: 0, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 };

/**
 * Calculate history dose counts from a set of checked vaccine IDs
 */
function calculateHistoryFromCheckedIds(checkedIds) {
  const counts = { HepB: 0, RV: 0, DTaP: 0, Hib: 0, PCV: 0, IPV: 0, BCG: 0, Measles: 0, MMR: 0, Varicella: 0, HepA: 0, MenACWY: 0, HPV: 0, Tdap: 0 };

  // HepB (Doses 1 to 4)
  if (checkedIds.has("hepb_1")) counts.HepB++;
  if (checkedIds.has("hepb_2")) counts.HepB++;
  if (checkedIds.has("hepb_3")) counts.HepB++;
  if (checkedIds.has("hepb_4")) counts.HepB++;

  // RV (Doses 1 to 3)
  if (checkedIds.has("rv_1")) counts.RV++;
  if (checkedIds.has("rv_2")) counts.RV++;
  if (checkedIds.has("rv_3")) counts.RV++;

  // DTaP (Doses 1 to 5)
  if (checkedIds.has("dtap_1")) counts.DTaP++;
  if (checkedIds.has("dtap_2")) counts.DTaP++;
  if (checkedIds.has("dtap_3")) counts.DTaP++;
  if (checkedIds.has("dtap_4")) counts.DTaP++;
  if (checkedIds.has("dtap_5")) counts.DTaP++;

  // Tdap (11y)
  if (checkedIds.has("tdap_1")) counts.Tdap = 1;

  // Hib (Doses 1 to 4)
  if (checkedIds.has("hib_1")) counts.Hib++;
  if (checkedIds.has("hib_2")) counts.Hib++;
  if (checkedIds.has("hib_3")) counts.Hib++;
  if (checkedIds.has("hib_4")) counts.Hib++;

  // PCV (Doses 1 to 4)
  if (checkedIds.has("pcv_1")) counts.PCV++;
  if (checkedIds.has("pcv_2")) counts.PCV++;
  if (checkedIds.has("pcv_3")) counts.PCV++;
  if (checkedIds.has("pcv_4")) counts.PCV++;

  // IPV / OPV
  if (checkedIds.has("ipv_1")) counts.IPV++;
  if (checkedIds.has("ipv_2")) counts.IPV++;
  if (checkedIds.has("ipv_3")) counts.IPV++;
  if (checkedIds.has("opv_4") || counts.IPV >= 3) {
    if (checkedIds.has("opv_4")) counts.IPV = Math.max(counts.IPV, 4);
  }

  // BCG
  if (checkedIds.has("bcg_1")) counts.BCG = 1;

  // Measles
  if (checkedIds.has("measles_1")) counts.Measles = 1;

  // MMR (Doses 1, 2, 3)
  if (checkedIds.has("mmr_1")) counts.MMR++;
  if (checkedIds.has("mmr_2")) counts.MMR++;
  if (checkedIds.has("mmr_3")) counts.MMR++;

  // Varicella (Doses 1, 2)
  if (checkedIds.has("varicella_1")) counts.Varicella++;
  if (checkedIds.has("varicella_2")) counts.Varicella++;

  // HepA (Doses 1, 2)
  if (checkedIds.has("hepa_1")) counts.HepA++;
  if (checkedIds.has("hepa_2")) counts.HepA++;

  // MenACWY / MCV4 (Doses 1, 2, 3)
  if (checkedIds.has("mcv4_1")) counts.MenACWY++;
  if (checkedIds.has("mcv4_2")) counts.MenACWY++;
  if (checkedIds.has("mcv4_3")) counts.MenACWY++;

  // HPV (Doses 1, 2)
  if (checkedIds.has("hpv_1")) counts.HPV++;
  if (checkedIds.has("hpv_2")) counts.HPV++;

  return counts;
}

/**
 * Generate catch-up schedule based on current age in months and last received milestone
 */
function generateTimeline(currentAge, lastScheduleKey) {
  let history = SCHEDULE_HISTORY[lastScheduleKey];
  if (lastScheduleKey === "Custom") {
    history = customHistoryCounts;
  }
  if (!history) history = SCHEDULE_HISTORY["None"];

  const scheduledDoses = [];

  const addDose = (vaccine, age, label, badgeType, notes) => {
    scheduledDoses.push({
      age: Math.round(age),
      vaccine,
      doseLabel: label,
      badgeType: badgeType || 'regular',
      notes: notes || ''
    });
  };

  // 1. Hepatitis B (Standard Saudi schedule: 4 doses at Birth, 2m, 4m, 6m; Catch-up series requires at least 3 doses)
  const hepBHistory = history.HepB;
  const hepBAge = currentAge;
  if (hepBHistory === 0) {
    addDose("Hepatitis B", hepBAge, "Dose 1", "regular", "Start immediate primary dose");
    addDose("Hepatitis B", hepBAge + 1, "Dose 2", "regular", "Min 4 weeks after Dose 1");
    addDose("Hepatitis B", Math.max(hepBAge + 3, 6), "Dose 3 (Final)", "final", "Min 8 weeks after Dose 2, min 16 weeks after Dose 1, and age ≥24 weeks (6m)");
  } else if (hepBHistory === 1) {
    addDose("Hepatitis B", hepBAge, "Dose 2", "regular", "Min 4 weeks after Dose 1");
    addDose("Hepatitis B", Math.max(hepBAge + 2, 6), "Dose 3 (Final)", "final", "Min 8 weeks after Dose 2, min 16 weeks after Dose 1, and age ≥24 weeks (6m)");
  } else if (hepBHistory === 2) {
    addDose("Hepatitis B", Math.max(hepBAge, 6), "Dose 3 (Final)", "final", "Min 8 weeks after Dose 2 and age ≥24 weeks (6m)");
  } else if (hepBHistory === 3 && currentAge < 6) {
    addDose("Hepatitis B", 6, "Dose 4", "final", "6-month routine hexavalent dose (min 8 weeks after Dose 2)");
  }

  // 2. Rotavirus (3 doses at 2m, 4m, 6m; Max starting age: 15 weeks / ~3.5m; Max final age: 8 months)
  const rvHistory = history.RV;
  const rvAge = currentAge;
  if (rvHistory === 0 && rvAge < 3.5) {
    addDose("Rotavirus", rvAge, "Dose 1", "regular", "Must start before 15 weeks of age");
    if (rvAge + 1 <= 8) addDose("Rotavirus", rvAge + 1, "Dose 2", "regular", "Min 4 weeks after Dose 1");
    if (rvAge + 2 <= 8) addDose("Rotavirus", rvAge + 2, "Dose 3 (Final)", "final", "Min 4 weeks after Dose 2 (Max age 8 months)");
  } else if (rvHistory === 1 && rvAge <= 8) {
    addDose("Rotavirus", rvAge, "Dose 2", "regular", "Min 4 weeks after Dose 1");
    if (rvAge + 1 <= 8) addDose("Rotavirus", rvAge + 1, "Dose 3 (Final)", "final", "Min 4 weeks after Dose 2 (Max age 8 months)");
  } else if (rvHistory === 2 && rvAge <= 8) {
    addDose("Rotavirus", rvAge, "Dose 3 (Final)", "final", "Min 4 weeks after Dose 2 (Max age 8 months)");
  }

  // 3. DTaP (5 doses at 2m, 4m, 6m, 18m, 4-6y)
  const dtapHistory = Math.min(history.DTaP, 5);
  const dtapAge = currentAge;
  if (dtapHistory < 5) {
    let nextAges = [];
    if (dtapHistory === 0) nextAges = [dtapAge, dtapAge + 1, dtapAge + 2, dtapAge + 8, dtapAge + 14];
    else if (dtapHistory === 1) nextAges = [dtapAge, dtapAge + 1, dtapAge + 7, dtapAge + 13];
    else if (dtapHistory === 2) nextAges = [dtapAge, dtapAge + 6, dtapAge + 12];
    else if (dtapHistory === 3) nextAges = [Math.max(dtapAge, 18), Math.max(dtapAge + 6, 48)];
    else if (dtapHistory === 4) nextAges = [Math.max(dtapAge, 48)];

    let currentDoseNum = dtapHistory + 1;
    for (let i = 0; i < nextAges.length; i++) {
      let ageSched = nextAges[i];
      let prevAgeSched = i > 0 ? nextAges[i - 1] : 0;

      if (currentDoseNum === 5) {
        if (prevAgeSched >= 48 || (dtapHistory === 4 && dtapAge >= 48)) {
          break; // If Dose 4 was at ≥4 years, Dose 5 is skipped
        }
        addDose("DTaP", Math.max(ageSched, 48), "Dose 5 (School Booster)", "booster", "Min 6 months after Dose 4. Required because Dose 4 was given at <4 years");
      } else if (currentDoseNum === 4) {
        addDose("DTaP", ageSched, "Dose 4 (Booster 1)", "booster", "Min 6 months after Dose 3 (If given at ≥4 yrs, Dose 5 is skipped)");
      } else if (currentDoseNum === 3) {
        addDose("DTaP", ageSched, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      } else if (currentDoseNum === 2) {
        addDose("DTaP", ageSched, "Dose 2", "regular", "Min 4 weeks after Dose 1");
      } else if (currentDoseNum === 1) {
        addDose("DTaP", ageSched, "Dose 1", "regular", "Start primary DTaP series");
      }
      currentDoseNum++;
    }
  }

  // 4. Hib (4 doses at 2m, 4m, 6m, 18m)
  const hibHistory = history.Hib;
  const hibAge = currentAge;
  if (hibAge < 12) {
    if (hibHistory === 0) {
      addDose("Hib", hibAge, "Dose 1", "regular", "Primary infant dose");
      addDose("Hib", hibAge + 1, "Dose 2", "regular", "Min 4 weeks after Dose 1");
      addDose("Hib", hibAge + 2, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      addDose("Hib", Math.max(hibAge + 4, 18), "Dose 4 (Booster)", "booster", "Min 8 weeks after Dose 3 (Scheduled at 18 months in Saudi schedule)");
    } else if (hibHistory === 1) {
      addDose("Hib", hibAge, "Dose 2", "regular", "Min 4 weeks after Dose 1");
      addDose("Hib", hibAge + 1, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      addDose("Hib", Math.max(hibAge + 3, 18), "Dose 4 (Booster)", "booster", "Min 8 weeks after Dose 3 (Scheduled at 18 months)");
    } else if (hibHistory === 2) {
      addDose("Hib", hibAge, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      addDose("Hib", Math.max(hibAge + 2, 18), "Dose 4 (Booster)", "booster", "Min 8 weeks after Dose 3 (Scheduled at 18 months)");
    } else if (hibHistory === 3) {
      addDose("Hib", Math.max(hibAge, 18), "Dose 4 (Booster)", "booster", "Final booster dose at 18 months (Min 8 weeks after Dose 3)");
    }
  } else if (hibAge >= 12 && hibAge <= 59) {
    if (hibHistory < 3) {
      addDose("Hib", hibAge, "Single Catch-up Dose", "final", "Only 1 dose needed for unimmunized/partially immunized children aged 1–5 years");
    } else if (hibHistory === 3) {
      addDose("Hib", hibAge, "Dose 4 (Booster)", "final", "Booster dose (Min 8 weeks after previous dose)");
    }
  } // Older than 5 years (≥60m): No dose needed

  // 5. Pneumococcal (PCV: 4 doses at 2m, 4m, 6m, 12m)
  const pcvHistory = history.PCV;
  const pcvAge = currentAge;
  if (pcvAge >= 24 && pcvAge <= 59) {
    if (pcvHistory < 4) {
      addDose("PCV", pcvAge, "Single Catch-up Dose", "final", "Only 1 dose needed for healthy children starting at ≥24 months (No further doses needed)");
    }
  } else if (pcvAge >= 12 && pcvAge < 24) {
    if (pcvHistory === 0) {
      addDose("PCV", pcvAge, "Dose 1", "regular", "Starting dose at 12–23 months");
      addDose("PCV", pcvAge + 2, "Dose 2 (Final)", "final", "Min 8 weeks after Dose 1");
    } else if (pcvHistory === 1) {
      addDose("PCV", pcvAge, "Dose 2", "regular", "Min 8 weeks after previous dose");
      addDose("PCV", pcvAge + 2, "Dose 3 (Final)", "final", "Min 8 weeks interval");
    } else if (pcvHistory === 2 || pcvHistory === 3) {
      addDose("PCV", pcvAge, "Dose 4 (Booster)", "final", "Min 8 weeks after previous dose at ≥12 months");
    }
  } else if (pcvAge < 12) {
    if (pcvHistory === 0) {
      addDose("PCV", pcvAge, "Dose 1", "regular", "Primary infant series");
      addDose("PCV", pcvAge + 1, "Dose 2", "regular", "Min 4 weeks after Dose 1");
      addDose("PCV", pcvAge + 2, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      addDose("PCV", Math.max(pcvAge + 4, 12), "Dose 4 (Booster)", "booster", "Min 8 weeks after Dose 3, scheduled at 12 months");
    } else if (pcvHistory === 1) {
      addDose("PCV", pcvAge, "Dose 2", "regular", "Min 4 weeks after Dose 1");
      addDose("PCV", pcvAge + 1, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      addDose("PCV", Math.max(pcvAge + 3, 12), "Dose 4 (Booster)", "booster", "Min 8 weeks after Dose 3, scheduled at 12 months");
    } else if (pcvHistory === 2) {
      addDose("PCV", pcvAge, "Dose 3", "regular", "Min 4 weeks after Dose 2");
      addDose("PCV", Math.max(pcvAge + 2, 12), "Dose 4 (Booster)", "booster", "Min 8 weeks after Dose 3, scheduled at 12 months");
    } else if (pcvHistory === 3) {
      addDose("PCV", Math.max(pcvAge, 12), "Dose 4 (Booster)", "booster", "Booster dose at 12 months (Min 8 weeks after Dose 3)");
    }
  } // Older than 5 years (≥60m): No dose needed

  // 6. Inactivated Polio Vaccine (IPV / OPV)
  const ipvHistory = history.IPV;
  const ipvAge = currentAge;
  if (ipvHistory === 0) {
    addDose("IPV", ipvAge, "Dose 1", "regular", "Primary dose");
    addDose("IPV", ipvAge + 1, "Dose 2", "regular", "Min 4 weeks after Dose 1");
    addDose("IPV", ipvAge + 2, "Dose 3", "regular", "Min 4 weeks after Dose 2");
    addDose("IPV", Math.max(ipvAge + 8, 48), "Dose 4 (Final)", "final", "Min 6 months after Dose 3, must be at age ≥4 years (48m)");
  } else if (ipvHistory === 1) {
    addDose("IPV", ipvAge, "Dose 2", "regular", "Min 4 weeks after Dose 1");
    addDose("IPV", ipvAge + 1, "Dose 3", "regular", "Min 4 weeks after Dose 2");
    addDose("IPV", Math.max(ipvAge + 7, 48), "Dose 4 (Final)", "final", "Min 6 months after Dose 3, must be at age ≥4 years (48m)");
  } else if (ipvHistory === 2) {
    addDose("IPV", ipvAge, "Dose 3", "regular", "Min 4 weeks after Dose 2");
    addDose("IPV", Math.max(ipvAge + 6, 48), "Dose 4 (Final)", "final", "Min 6 months after Dose 3, must be at age ≥4 years (48m)");
  } else if (ipvHistory === 3) {
    addDose("IPV", Math.max(ipvAge, 48), "Dose 4 (Final)", "final", "Final dose: must not be given before 4 years of age");
  }

  // 7. BCG (Tuberculosis at 6 Months)
  if (history.BCG === 0) {
    if (currentAge < 6) {
      addDose("BCG", 6, "Dose 1", "regular", "Routine single dose at 6 months of age without PPD test");
    } else if (currentAge <= 12) {
      addDose("BCG", currentAge, "Dose 1", "regular", "Given between 6–12 months without a PPD test");
    } else {
      addDose("BCG", currentAge, "Dose 1", "regular", "High-risk groups only. Requires prior PPD test according to guidelines");
    }
  }

  // 8. Measles (Monovalent at 9 Months)
  if (history.Measles === 0 && currentAge >= 9 && currentAge < 12) {
    addDose("Measles", currentAge, "Dose 1", "regular", "Monovalent measles dose at 9–11 months before MMR at 12 months");
  }

  // 9. MMR (3 doses in Saudi schedule: 12m, 18m, 4–6y)
  const mmrHistory = history.MMR;
  const mmrAge = Math.max(12, currentAge);
  if (currentAge < 48) {
    if (mmrHistory === 0) {
      addDose("MMR", mmrAge, "Dose 1", "regular", "First dose at ≥12 months of age");
      addDose("MMR", Math.max(mmrAge + 1, 18), "Dose 2", "regular", "Min 4 weeks after Dose 1 (Routine at 18 months)");
      addDose("MMR", 48, "Dose 3 (School Booster)", "booster", "School entry dose at 4–6 years (Min 4 weeks after Dose 2)");
    } else if (mmrHistory === 1) {
      addDose("MMR", Math.max(mmrAge, 18), "Dose 2", "regular", "Min 4 weeks after Dose 1 (Routine at 18 months)");
      addDose("MMR", 48, "Dose 3 (School Booster)", "booster", "School entry dose at 4–6 years");
    } else if (mmrHistory === 2) {
      addDose("MMR", 48, "Dose 3 (School Booster)", "booster", "School entry dose at 4–6 years (Min 4 weeks after Dose 2)");
    }
  } else {
    // For children starting at age >= 4 years (48m), 2 properly spaced doses complete catch-up
    if (mmrHistory === 0) {
      addDose("MMR", mmrAge, "Dose 1", "regular", "Catch-up dose starting at age ≥4 years");
      addDose("MMR", mmrAge + 1, "Dose 2 (Final)", "final", "Min 4 weeks after Dose 1 (2 doses complete catch-up series)");
    } else if (mmrHistory === 1) {
      addDose("MMR", mmrAge, "Dose 2 (Final)", "final", "Min 4 weeks after Dose 1 (2 doses complete catch-up series)");
    }
  }

  // 10. Varicella (2 doses in Saudi schedule: 18m, 4–6y)
  const varHistory = history.Varicella;
  const varAge = Math.max(12, currentAge);
  if (currentAge < 156) {
    // Under 13 years: 3 months minimum interval
    if (varHistory === 0) {
      addDose("Varicella", Math.max(varAge, 18), "Dose 1", "regular", "First dose at 18 months (or ≥12m in catch-up)");
      const dose2Age = Math.max(varAge + 3, 48);
      addDose("Varicella", dose2Age, "Dose 2 (Final)", "final", "Min 3 months after Dose 1 (Routine school booster at 4–6 years)");
    } else if (varHistory === 1) {
      addDose("Varicella", Math.max(varAge, 48), "Dose 2 (Final)", "final", "Min 3 months after Dose 1 (Routine at 4–6 years)");
    }
  } else {
    // 13 years and older (≥156m): 4 weeks (28 days) minimum interval
    if (varHistory === 0) {
      addDose("Varicella", varAge, "Dose 1", "regular", "First dose for age ≥13 years");
      addDose("Varicella", varAge + 1, "Dose 2 (Final)", "final", "Min 4 weeks (28 days) after Dose 1 (for age ≥13 years)");
    } else if (varHistory === 1) {
      addDose("Varicella", varAge, "Dose 2 (Final)", "final", "Min 4 weeks (28 days) after Dose 1 (for age ≥13 years)");
    }
  }

  // 11. Hepatitis A (2 doses in Saudi schedule: 18m, 24m)
  const hepaHistory = history.HepA;
  const hepaAge = Math.max(12, currentAge);
  if (hepaHistory === 0) {
    addDose("Hepatitis A", Math.max(hepaAge, 18), "Dose 1", "regular", "First dose at 18 months (or ≥12m in catch-up)");
    addDose("Hepatitis A", Math.max(hepaAge + 6, 24), "Dose 2 (Final)", "final", "Min 6 months after Dose 1 (Routine at 24 months)");
  } else if (hepaHistory === 1) {
    const minDose2Age = lastScheduleKey === "18m" ? 24 : Math.max(hepaAge, 24);
    addDose("Hepatitis A", minDose2Age, "Dose 2 (Final)", "final", "Min 6 months after Dose 1 (Routine at 24 months)");
  }

  // 12. Meningococcal (MCV4: 3 doses in Saudi schedule: 9m, 12m, 18y)
  const menHistory = history.MenACWY;
  const menAge = Math.max(9, currentAge);
  if (menAge < 24) {
    if (menHistory === 0) {
      addDose("MenACWY", menAge, "Dose 1", "regular", "First dose starting at 9 months");
      addDose("MenACWY", Math.max(menAge + 3, 12), "Dose 2", "regular", "Min 3 months after Dose 1 (Routine at 12 months)");
      addDose("MenACWY", 216, "Dose 3 (Booster)", "booster", "Routine adult booster at 18 years of age");
    } else if (menHistory === 1) {
      addDose("MenACWY", Math.max(currentAge, 12), "Dose 2", "regular", "Min 3 months after Dose 1 (Routine at 12 months)");
      addDose("MenACWY", 216, "Dose 3 (Booster)", "booster", "Routine adult booster at 18 years of age");
    } else if (menHistory === 2) {
      addDose("MenACWY", 216, "Dose 3 (Booster)", "booster", "Routine adult booster at 18 years of age");
    }
  } else if (menAge >= 24 && menAge < 216) {
    if (menHistory === 0) {
      addDose("MenACWY", menAge, "Single Catch-up Dose", "regular", "Single dose sufficient for primary series in children ≥2 years");
      addDose("MenACWY", 216, "Dose 3 (Booster)", "booster", "Routine adult booster at 18 years of age");
    } else {
      addDose("MenACWY", 216, "Dose 3 (Booster)", "booster", "Routine adult booster at 18 years of age");
    }
  } else if (menAge >= 216) {
    if (menHistory < 3) {
      addDose("MenACWY", menAge, "Dose 3 (Booster)", "booster", "Adolescent/Adult catch-up dose at 18+ years");
    }
  }

  // 13. Tdap (11 Years adolescent booster)
  const tdapHistory = history.Tdap || 0;
  if (currentAge >= 132 && tdapHistory === 0) {
    addDose("Tdap", currentAge, "Dose 1", "booster", "Adolescent Tdap booster (Routine at 11 years)");
  } else if (currentAge < 132 && dtapHistory >= 5) {
    addDose("Tdap", 132, "Dose 1", "booster", "Routine adolescent booster at 11 years");
  }

  // 14. HPV (Human Papillomavirus: 2-dose series if started <15 yrs, 3-dose series if started ≥15 yrs)
  const hpvHistory = history.HPV || 0;
  if (currentAge >= 180) {
    // AGE ≥ 15 YEARS (≥180 MONTHS): REQUIRES 3-DOSE SERIES (0, 2, 6 months)
    if (hpvHistory === 0) {
      addDose("HPV", currentAge, "Dose 1", "regular", "1st dose of 3-dose series (Required for starting age ≥15 years)");
      addDose("HPV", currentAge + 2, "Dose 2", "regular", "Min 1–2 months (4–8 weeks) after Dose 1 (3-dose schedule)");
      addDose("HPV", currentAge + 6, "Dose 3 (Final)", "final", "Min 12 weeks after Dose 2 and min 5 months after Dose 1 (3-dose series completion)");
    } else if (hpvHistory === 1) {
      addDose("HPV", currentAge, "Dose 2", "regular", "Min 1–2 months after Dose 1 (3-dose schedule for age ≥15 years)");
      addDose("HPV", currentAge + 4, "Dose 3 (Final)", "final", "Min 12 weeks after Dose 2 and min 5 months after Dose 1 (3-dose series completion)");
    } else if (hpvHistory === 2) {
      addDose("HPV", currentAge, "Dose 3 (Final)", "final", "Final 3rd dose (Min 12 weeks after Dose 2 for age ≥15 years)");
    }
  } else if (currentAge >= 132 && currentAge < 180) {
    // AGE 11 TO 14 YEARS (132–179 MONTHS): 2-DOSE SERIES (0, 6–12 months)
    if (hpvHistory === 0) {
      addDose("HPV", currentAge, "Dose 1", "regular", "Routine HPV 1st dose (2-dose series for age <15 years)");
      addDose("HPV", Math.max(currentAge + 6, 144), "Dose 2 (Final)", "final", "Min 6–12 months after Dose 1 (2-dose series completion)");
    } else if (hpvHistory === 1) {
      addDose("HPV", Math.max(currentAge, 144), "Dose 2 (Final)", "final", "Min 6–12 months after Dose 1 (2-dose series completion)");
    }
  } else {
    // UNDER 11 YEARS (<132 MONTHS): SCHEDULE ROUTINE 2-DOSE SERIES AT 11 & 12 YEARS
    addDose("HPV", 132, "Dose 1", "regular", "Routine HPV 1st dose at 11 years (2-dose series for age <15 years)");
    addDose("HPV", 144, "Dose 2 (Final)", "final", "Routine HPV 2nd dose at 12 years (Min 6–12 months after Dose 1)");
  }

  // Sort chronologically by age
  scheduledDoses.sort((a, b) => a.age - b.age);

  // Group by scheduled age
  const grouped = {};
  scheduledDoses.forEach(item => {
    if (!grouped[item.age]) grouped[item.age] = [];
    grouped[item.age].push(item);
  });

  return { grouped, totalDoses: scheduledDoses.length };
}

/**
 * Format age number into a clean string
 */
function formatAgeHeader(months) {
  if (months === 0) return { main: "At Birth", sub: "(0 Months)" };
  if (months < 12) return { main: `At ${months} Months`, sub: `${months}m` };
  const years = Math.floor(months / 12);
  const rem = months % 12;
  if (rem === 0) return { main: `At ${years} Years`, sub: `(${months} Months)` };
  return { main: `At ${years} Y, ${rem} M`, sub: `(${months} Months)` };
}

/**
 * Calculate scheduled date given base date and months difference
 */
function calculateScheduledDate(baseDate, monthDiff) {
  const d = new Date(baseDate.getTime());
  d.setMonth(d.getMonth() + monthDiff);
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("generate-btn");
  const ageInput = document.getElementById("patient-age");
  const ageUnitHidden = document.getElementById("age-unit");
  const unitMonthsBtn = document.getElementById("unit-months-btn");
  const unitYearsBtn = document.getElementById("unit-years-btn");
  const historySelect = document.getElementById("last-schedule");
  const agePromptHint = document.getElementById("age-prompt-hint");
  const dateInput = document.getElementById("assessment-date");
  const resultWrapper = document.getElementById("result-wrapper");
  const summaryCard = document.getElementById("summary-card");
  const tbody = document.getElementById("catchup-tbody");
  const printBtn = document.getElementById("print-btn");

  // Custom Modal elements
  const customModal = document.getElementById("custom-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalCancelBtn = document.getElementById("modal-cancel-btn");
  const modalApplyBtn = document.getElementById("modal-apply-btn");
  const selectAllBtn = document.getElementById("select-all-btn");
  const clearAllBtn = document.getElementById("clear-all-btn");
  const editCustomBtn = document.getElementById("edit-custom-btn");
  const selectedCountBadge = document.getElementById("selected-count-badge");
  const customScheduleGrid = document.getElementById("custom-schedule-grid");

  // National Schedule Modal elements
  const viewScheduleBtn = document.getElementById("view-schedule-btn");
  const scheduleModal = document.getElementById("schedule-modal");
  const scheduleModalCloseBtn = document.getElementById("schedule-modal-close-btn");
  const scheduleModalCancelBtn = document.getElementById("schedule-modal-cancel-btn");

  let previousSelectValue = "";
  let currentUnit = "months";

  // Set default assessment date to today
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  dateInput.value = `${yyyy}-${mm}-${dd}`;

  /**
   * Get calculated patient age in total months
   */
  const getPatientAgeInMonths = () => {
    const raw = ageInput.value.trim();
    if (raw === "" || isNaN(raw)) return null;
    const num = parseFloat(raw);
    if (num < 0) return null;
    return currentUnit === "years" ? Math.round(num * 12) : Math.round(num);
  };

  /**
   * Update state of Last Vaccine Taken select based on entered age
   */
  const updateLastScheduleState = () => {
    const ageMonths = getPatientAgeInMonths();

    if (ageMonths === null) {
      historySelect.disabled = true;
      historySelect.value = "";
      editCustomBtn.style.display = "none";
      if (agePromptHint) agePromptHint.style.display = "block";
      return;
    }

    // Age is valid -> enable select
    historySelect.disabled = false;
    if (agePromptHint) agePromptHint.style.display = "none";

    // If no option selected yet, select "None"
    if (!historySelect.value) {
      historySelect.value = "None";
      previousSelectValue = "None";
    }

    // Filter/disable milestone options that are greater than patient age
    let currentlySelectedValid = true;
    historySelect.querySelectorAll("option").forEach(opt => {
      if (opt.value === "" || opt.value === "None" || opt.value === "Custom") {
        opt.disabled = false;
      } else if (opt.dataset.minM !== undefined) {
        const minM = parseInt(opt.dataset.minM, 10);
        if (minM > ageMonths) {
          opt.disabled = true;
          if (historySelect.value === opt.value) {
            currentlySelectedValid = false;
          }
        } else {
          opt.disabled = false;
        }
      }
    });

    // If previously selected option is now disabled, reset to "None"
    if (!currentlySelectedValid) {
      historySelect.value = "None";
      previousSelectValue = "None";
      editCustomBtn.style.display = "none";
    }
  };

  // Unit switcher listeners
  const setUnit = (unit) => {
    currentUnit = unit;
    ageUnitHidden.value = unit;
    if (unit === "months") {
      unitMonthsBtn.classList.add("active");
      unitYearsBtn.classList.remove("active");
      ageInput.placeholder = "Enter age in months (e.g. 15)";
      ageInput.max = "216";
    } else {
      unitYearsBtn.classList.add("active");
      unitMonthsBtn.classList.remove("active");
      ageInput.placeholder = "Enter age in years (e.g. 5 or 1.5)";
      ageInput.max = "18";
    }
    updateLastScheduleState();
  };

  unitMonthsBtn.addEventListener("click", () => setUnit("months"));
  unitYearsBtn.addEventListener("click", () => setUnit("years"));

  // Age input change listeners
  ageInput.addEventListener("input", updateLastScheduleState);
  ageInput.addEventListener("change", updateLastScheduleState);

  // National Schedule Modal Handlers
  const openScheduleModal = () => {
    scheduleModal.style.display = "flex";
  };
  const closeScheduleModal = () => {
    scheduleModal.style.display = "none";
  };

  viewScheduleBtn.addEventListener("click", openScheduleModal);
  scheduleModalCloseBtn.addEventListener("click", closeScheduleModal);
  scheduleModalCancelBtn.addEventListener("click", closeScheduleModal);

  // Close modals on clicking backdrop
  [customModal, scheduleModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });

  // Close modals on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      customModal.style.display = "none";
      scheduleModal.style.display = "none";
    }
  });

  // Build the Custom Modal Checkbox Grid dynamically
  const buildModalGrid = () => {
    customScheduleGrid.innerHTML = "";

    SAUDI_SCHEDULE_CATALOG.forEach(group => {
      const monthBox = document.createElement("div");
      monthBox.className = "month-box";
      monthBox.dataset.monthId = group.monthId;

      const header = document.createElement("div");
      header.className = "month-box-header";
      header.innerHTML = `
        <span class="month-title">🟢 ${group.monthLabel}</span>
        <button type="button" class="month-toggle-btn" data-month-id="${group.monthId}">Toggle</button>
      `;
      monthBox.appendChild(header);

      group.vaccines.forEach(vax => {
        const label = document.createElement("label");
        label.className = "vax-checkbox-label";
        const isChecked = selectedCustomDoseIds.has(vax.id);
        if (isChecked) label.classList.add("checked");

        label.innerHTML = `
          <input type="checkbox" value="${vax.id}" data-month-id="${group.monthId}" ${isChecked ? 'checked' : ''}>
          <span>${vax.label}</span>
        `;

        const checkbox = label.querySelector("input");
        checkbox.addEventListener("change", (e) => {
          if (e.target.checked) {
            selectedCustomDoseIds.add(vax.id);
            label.classList.add("checked");
          } else {
            selectedCustomDoseIds.delete(vax.id);
            label.classList.remove("checked");
          }
          updateSelectedCountDisplay();
        });

        monthBox.appendChild(label);
      });

      customScheduleGrid.appendChild(monthBox);
    });

    customScheduleGrid.querySelectorAll(".month-toggle-btn").forEach(toggleBtn => {
      toggleBtn.addEventListener("click", () => {
        const mId = toggleBtn.dataset.monthId;
        const cbs = customScheduleGrid.querySelectorAll(`input[data-month-id="${mId}"]`);
        const anyUnchecked = Array.from(cbs).some(cb => !cb.checked);

        cbs.forEach(cb => {
          cb.checked = anyUnchecked;
          const parentLabel = cb.closest(".vax-checkbox-label");
          if (anyUnchecked) {
            selectedCustomDoseIds.add(cb.value);
            if (parentLabel) parentLabel.classList.add("checked");
          } else {
            selectedCustomDoseIds.delete(cb.value);
            if (parentLabel) parentLabel.classList.remove("checked");
          }
        });
        updateSelectedCountDisplay();
      });
    });

    updateSelectedCountDisplay();
  };

  const updateSelectedCountDisplay = () => {
    const count = selectedCustomDoseIds.size;
    selectedCountBadge.textContent = `${count} dose${count === 1 ? '' : 's'} selected`;
  };

  const openCustomModal = () => {
    if (selectedCustomDoseIds.size === 0 && previousSelectValue && previousSelectValue !== "Custom" && PRESET_CHECKBOX_MAP[previousSelectValue]) {
      PRESET_CHECKBOX_MAP[previousSelectValue].forEach(id => selectedCustomDoseIds.add(id));
    }
    buildModalGrid();
    customModal.style.display = "flex";
  };

  const closeCustomModal = () => {
    customModal.style.display = "none";
  };

  // Open modal on selecting 'Custom'
  historySelect.addEventListener("change", () => {
    if (historySelect.value === "Custom") {
      editCustomBtn.style.display = "inline-block";
      openCustomModal();
    } else {
      previousSelectValue = historySelect.value;
      editCustomBtn.style.display = "none";
    }
  });

  editCustomBtn.addEventListener("click", openCustomModal);
  modalCloseBtn.addEventListener("click", closeCustomModal);
  modalCancelBtn.addEventListener("click", closeCustomModal);

  selectAllBtn.addEventListener("click", () => {
    customScheduleGrid.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.checked = true;
      selectedCustomDoseIds.add(cb.value);
      const parentLabel = cb.closest(".vax-checkbox-label");
      if (parentLabel) parentLabel.classList.add("checked");
    });
    updateSelectedCountDisplay();
  });

  clearAllBtn.addEventListener("click", () => {
    customScheduleGrid.querySelectorAll("input[type='checkbox']").forEach(cb => {
      cb.checked = false;
      selectedCustomDoseIds.delete(cb.value);
      const parentLabel = cb.closest(".vax-checkbox-label");
      if (parentLabel) parentLabel.classList.remove("checked");
    });
    updateSelectedCountDisplay();
  });

  modalApplyBtn.addEventListener("click", () => {
    customHistoryCounts = calculateHistoryFromCheckedIds(selectedCustomDoseIds);
    historySelect.value = "Custom";
    previousSelectValue = "Custom";
    editCustomBtn.style.display = "inline-block";
    closeCustomModal();

    if (ageInput.value.trim() !== "") {
      renderSchedule();
    }
  });

  // Render Table function
  const renderSchedule = () => {
    const currentAge = getPatientAgeInMonths();
    if (currentAge === null) {
      alert("Please enter a valid patient age (0 or greater).");
      ageInput.focus();
      return;
    }

    const historyKey = historySelect.value || "None";

    let baseDate = today;
    if (dateInput.value) {
      const parts = dateInput.value.split("-");
      baseDate = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
    }

    const { grouped, totalDoses } = generateTimeline(currentAge, historyKey);
    const sortedAges = Object.keys(grouped).map(Number).sort((a, b) => a - b);

    tbody.innerHTML = "";
    resultWrapper.style.display = "flex";

    // Populate Summary Card
    const ageYears = Math.floor(currentAge / 12);
    const ageMonthsRem = currentAge % 12;
    const ageFormatted = currentAge < 12 
      ? `${currentAge} Months` 
      : `${ageYears} Year${ageYears > 1 ? 's' : ''}${ageMonthsRem > 0 ? `, ${ageMonthsRem} Month${ageMonthsRem > 1 ? 's' : ''}` : ''} (${currentAge}m)`;

    const totalVisits = sortedAges.length;
    const formattedBaseDate = baseDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    let milestoneLabel = SCHEDULE_LABELS[historyKey] || historyKey;
    if (historyKey === "Custom") {
      milestoneLabel = `Custom (${selectedCustomDoseIds.size} Doses Recorded)`;
    }

    summaryCard.innerHTML = `
      <div class="summary-item">
        <span class="summary-label">Patient Current Age</span>
        <span class="summary-value highlight">${ageFormatted}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Assessment Date</span>
        <span class="summary-value">${formattedBaseDate}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Vaccination History</span>
        <span class="summary-value">${milestoneLabel}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Total Catch-up Plan</span>
        <span class="summary-value">${totalDoses > 0 ? `${totalDoses} Doses across ${totalVisits} Planned Visits` : 'All Up-to-Date'}</span>
      </div>
    `;

    // Render Table Rows
    if (sortedAges.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="5">
            <div class="empty-state">
              <h3>🎉 Fully Up to Date!</h3>
              <p>No additional catch-up doses are required based on the provided age and vaccination history.</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    sortedAges.forEach((ageMonth, visitIndex) => {
      const doses = grouped[ageMonth];
      const monthDiff = ageMonth - currentAge;
      const scheduledDateStr = calculateScheduledDate(baseDate, monthDiff);
      const ageInfo = formatAgeHeader(ageMonth);
      const isAltGroup = (visitIndex % 2 === 1);

      doses.forEach((doseItem, itemIndex) => {
        const tr = document.createElement("tr");
        if (itemIndex === 0) tr.classList.add("visit-first-row");
        if (isAltGroup) tr.classList.add("visit-group-alt");

        let rowHtml = "";

        if (itemIndex === 0) {
          rowHtml += `
            <td class="col-age" rowspan="${doses.length}">
              <span class="age-title">${ageInfo.main}</span>
              <span class="age-sub">${ageInfo.sub}</span>
            </td>
            <td class="col-date" rowspan="${doses.length}">
              <div class="date-pill">
                <span>📅</span>
                <span>${scheduledDateStr}</span>
              </div>
            </td>
          `;
        }

        let doseBadgeClass = "dose-badge";
        if (doseItem.badgeType === "final") doseBadgeClass += " final";
        if (doseItem.badgeType === "booster") doseBadgeClass += " booster";

        rowHtml += `
          <td class="col-vaccine">
            <div class="vaccine-tag">
              <span class="vax-dot"></span>
              <strong>${doseItem.vaccine}</strong>
            </div>
          </td>
          <td class="col-dose">
            <span class="${doseBadgeClass}">${doseItem.doseLabel}</span>
          </td>
          <td class="col-notes">
            <div class="notes-text">${doseItem.notes}</div>
          </td>
        `;

        tr.innerHTML = rowHtml;
        tbody.appendChild(tr);
      });
    });

    resultWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  btn.addEventListener("click", renderSchedule);

  ageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") renderSchedule();
  });

  if (printBtn) {
    printBtn.addEventListener("click", () => {
      window.print();
    });
  }

  // Initial state check
  updateLastScheduleState();
});
