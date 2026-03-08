// ============================================================
// GCSE SPEC DATA — RAM'S EXAM COMMAND CENTER (REVISED 2026)
// All dates and spec points validated against 2026 exam boards.
// ============================================================

const GCSE_SUBJECTS = {

  // ── MATHS (Edexcel) ───────────────────────────────────────
  maths: {
    name: "Mathematics",
    board: "Edexcel",
    color: "#3b82f6",
    icon: "📐",
    exams: [
      { paper: "Paper 1 (Non-Calc)", date: "2026-05-19", time: "AM" },
      { paper: "Paper 2 (Calc)",     date: "2026-06-04", time: "AM" },
      { paper: "Paper 3 (Calc)",     date: "2026-06-08", time: "AM" },
    ],
    topics: [
      { id: "m1",  topic: "Number",           points: [
        "HCF, LCM and Product of Prime Factors",
        "Surds: simplifying, expanding and rationalising denominators",
        "Standard form calculations and conversions",
        "Compound interest and reverse percentages",
        "Direct and Inverse Proportion (algebraic k-constant)",
        "Upper and Lower bounds including calculation limits",
      ]},
      { id: "m2",  topic: "Algebra",          points: [
        "Quadratic Formula and Completing the Square",
        "Simultaneous equations (linear/linear and linear/quadratic)",
        "Nth term of Quadratic Sequences",
        "Functions: Composite $fg(x)$ and Inverse $f^{-1}(x)$",
        "Iterative methods for solving equations",
        "Algebraic proof and identities",
      ]},
      { id: "m3",  topic: "Graphs",           points: [
        "Equation of a circle $x^2 + y^2 = r^2$",
        "Parallel & perpendicular lines ($m_1 \times m_2 = -1$)",
        "Trigonometric graphs and transformations",
        "Gradient of a curve and area under a graph",
      ]},
      { id: "m5",  topic: "Geometry & Measures", points: [
        "Circle Theorems (all 8 rules)",
        "Trigonometry: SOHCAHTOA and Sine/Cosine Rules",
        "Vector geometry and proof of parallel lines",
        "Volume and Surface Area of spheres, cones, and frustums",
        "Enlargement by negative and fractional scale factors",
      ]},
      { id: "m6",  topic: "Probability & Stats", points: [
        "Conditional probability and Tree Diagrams",
        "Venn Diagrams and Set Notation",
        "Histograms with unequal class widths (Frequency Density)",
        "Cumulative Frequency and Box Plots",
      ]},
    ],
  },

  // ── FURTHER MATHS (AQA L2) ────────────────────────────────
  furtherMaths: {
    name: "Further Maths (L2)",
    board: "AQA",
    color: "#8b5cf6",
    icon: "∑",
    exams: [
      { paper: "Paper 1 (Non-Calc)", date: "2026-06-08", time: "PM" },
      { paper: "Paper 2 (Calc)",     date: "2026-06-15", time: "PM" },
    ],
    topics: [
      { id: "fm1", topic: "Algebra", points: ["Factor Theorem", "Algebraic long division", "Polynomials"]},
      { id: "fm3", topic: "Calculus", points: ["Differentiation", "Stationary points", "Equations of tangents/normals"]},
      { id: "fm4", topic: "Matrices", points: ["Matrix transformations", "Multiplication and Identity matrices"]},
    ],
  },

  // ── PHYSICS (AQA Triple) ──────────────────────────────────
  physics: {
    name: "Physics",
    board: "AQA Triple",
    color: "#f59e0b",
    icon: "⚛",
    exams: [
      { paper: "Paper 1", date: "2026-05-14", time: "AM" },
      { paper: "Paper 2", date: "2026-06-12", time: "AM" },
    ],
    topics: [
      { id: "ph1", topic: "Energy", points: ["Kinetic/Potential Energy", "Specific Heat Capacity", "Power and Efficiency"]},
      { id: "ph2", topic: "Electricity", points: ["Ohm's Law", "Series/Parallel", "Domestic AC/DC", "Static Electricity"]},
      { id: "ph7", topic: "Magnetism", points: ["Motor Effect", "Generator Effect", "Transformers"]},
      { id: "ph8", topic: "Space", points: ["Life cycle of stars", "Red-shift", "Big Bang Theory"]},
    ],
  },

  // ── CHEMISTRY (AQA Triple) ────────────────────────────────
  chemistry: {
    name: "Chemistry",
    board: "AQA Triple",
    color: "#10b981",
    icon: "🧪",
    exams: [
      { paper: "Paper 1", date: "2026-05-18", time: "AM" },
      { paper: "Paper 2", date: "2026-06-15", time: "AM" },
    ],
    topics: [
      { id: "ch3", topic: "Quantitative", points: ["The Mole", "Yield/Atom Economy", "Titration calculations"]},
      { id: "ch7", topic: "Organic", points: ["Cracking", "Alkenes/Alcohols", "Polymers", "DNA/Amino Acids"]},
      { id: "ch10", topic: "Resources", points: ["Potable Water", "LCA", "Haber Process", "Alloys"]},
    ],
  },

  // ── BIOLOGY (AQA Triple) ──────────────────────────────────
  biology: {
    name: "Biology",
    board: "AQA Triple",
    color: "#84cc16",
    icon: "🧬",
    exams: [
      { paper: "Paper 1", date: "2026-05-12", time: "AM" },
      { paper: "Paper 2", date: "2026-06-10", time: "AM" },
    ],
    topics: [
      { id: "bio1", topic: "Cell Bio", points: ["Microscopy", "Mitosis", "Transport (Diffusion/Osmosis/Active)"]},
      { id: "bio5", topic: "Homeostasis", points: ["The Eye", "The Brain", "Kidneys", "Menstrual Cycle", "Diabetes"]},
      { id: "bio7", topic: "Ecology", points: ["Levels of Organisation", "Carbon/Nitrogen Cycles", "Biodiversity"]},
    ],
  },

  // ── COMPUTER SCIENCE (OCR J277) ───────────────────────────
  computerScience: {
    name: "Computer Science",
    board: "OCR J277",
    color: "#06b6d4",
    icon: "💻",
    exams: [
      { paper: "Paper 1 (Systems)", date: "2026-05-15", time: "PM" },
      { paper: "Paper 2 (Thinking)", date: "2026-05-21", time: "PM" },
    ],
    topics: [
      { id: "cs2", topic: "Data Rep", points: ["Binary/Hex", "Images/Sound", "Lossy/Lossless Compression"]},
      { id: "cs7", topic: "Algorithms", points: ["Standard Searches/Sorts", "Pseudocode and Trace Tables"]},
      { id: "cs9", topic: "Boolean Logic", points: ["Logic Gates", "Truth Tables", "Boolean Algebra"]},
    ],
  },

  // ── ENGLISH LANGUAGE (AQA) ────────────────────────────────
  englishLang: {
    name: "English Language",
    board: "AQA",
    color: "#f43f5e",
    icon: "✍",
    exams: [
      { paper: "Paper 1 (Fiction)", date: "2026-05-20", time: "AM" },
      { paper: "Paper 2 (Non-Fiction)", date: "2026-06-03", time: "AM" },
    ],
    topics: [
      { id: "el1", topic: "Reading", points: ["Language/Structure Analysis", "Evaluation", "Comparison"]},
      { id: "el2", topic: "Writing", points: ["Narrative/Descriptive Writing", "Argue/Persuade Non-Fiction"]},
    ],
  },

  // ── ENGLISH LITERATURE (Edexcel) ──────────────────────────
  englishLit: {
    name: "English Literature",
    board: "Edexcel",
    color: "#ec4899",
    icon: "📖",
    exams: [
      { paper: "Paper 1 (Drama)", date: "2026-05-13", time: "AM" },
      { paper: "Paper 2 (Novel/Poetry)", date: "2026-05-22", time: "AM" },
    ],
    topics: [
      { id: "lit1", topic: "Romeo & Juliet", points: ["Duality of Love", "Fate", "Patriarchal Violence"]},
      { id: "lit2", topic: "An Inspector Calls", points: ["Social Responsibility", "Class", "Gender", "Age"]},
      { id: "lit3", topic: "Jekyll & Hyde", points: ["Victorian Repression", "Evolution vs Degeneration", "Duality"]},
      { id: "lit4", topic: "Conflict Poetry (Edexcel Cluster)", points: [
        "A Poison Tree (Blake)",
        "The Destruction of Sennacherib (Byron)",
        "Extract from The Prelude (Wordsworth)",
        "The Man He Killed (Hardy)",
        "Cousin Kate (Rossetti)",
        "Half-caste (Agard)",
        "Exposure (Owen)",
        "The Charge of the Light Brigade (Tennyson)",
        "Catrin (Clarke)",
        "War Photographer (Satyamurti)",
        "Belfast Confetti (Carson)",
        "The Class Game (Casey)",
        "Poppies (Weir)",
        "No Problem (Zephaniah)",
        "What Were They Like? (Levertov)",
      ]},
    ],
  },

  // ── GERMAN (AQA) ──────────────────────────────────────────
  german: {
    name: "German",
    board: "AQA",
    color: "#f97316",
    icon: "🇩🇪",
    exams: [
      { paper: "Listening/Reading", date: "2026-05-22", time: "PM" },
      { paper: "Writing", date: "2026-06-05", time: "AM" },
    ],
    topics: [
      { id: "de4", topic: "Grammar", points: ["Cases (Nom/Acc/Dat/Gen)", "Word Order (V2/Subordinate)", "Tenses (Perfect/Future/Imperfect/Conditional)"]},
    ],
  },

  // ── HISTORY (Edexcel) ─────────────────────────────────────
  history: {
    name: "History",
    board: "Edexcel",
    color: "#a78bfa",
    icon: "🏛",
    exams: [
      { paper: "Paper 1 (Medicine)", date: "2026-05-11", time: "AM" },
      { paper: "Paper 2 (Cold War/Elizabeth)", date: "2026-06-03", time: "PM" },
      { paper: "Paper 3 (Nazi Germany)", date: "2026-06-11", time: "PM" },
    ],
    topics: [
      { id: "hi1", topic: "Medicine", points: ["Medieval Church", "Renaissance Anatomy", "Germ Theory", "NHS"]},
      { id: "hi2", topic: "Cold War", points: ["Cuban Missile Crisis", "Berlin Wall", "Détente", "Collapse of USSR"]},
      { id: "hi3", topic: "Elizabethan", points: ["Religious Settlement", "Spanish Armada", "Mary Queen of Scots"]},
      { id: "hi4", topic: "Nazi Germany", points: ["Rise of Hitler", "Police State", "Life for Women/Youth", "Persecution"]},
    ],
  },
};

// ── FLAT LIST FOR CALENDAR ───────────────────
const ALL_EXAM_DATES = [];
Object.entries(GCSE_SUBJECTS).forEach(([key, subj]) => {
  subj.exams.forEach(exam => {
    ALL_EXAM_DATES.push({
      subject: subj.name,
      subjectKey: key,
      paper: exam.paper,
      date: exam.date,
      time: exam.time,
      color: subj.color,
      icon: subj.icon,
    });
  });
});
ALL_EXAM_DATES.sort((a, b) => a.date.localeCompare(b.date));

// ── DAILY STUDY PLAN DATA ───────────────────
const STUDY_PHASES = [
  {
    name: "PHASE 1 — DEEP FOUNDATION",
    range: ["2026-03-09", "2026-04-03"],
    description: "Build all knowledge from scratch. One topic block per day. Read, make notes, practice retrieval.",
    focus: "New learning + first retrieval pass",
    atomicHabit: "2-minute rule: open the textbook. The rest follows.",
  },
  {
    name: "PHASE 2 — CONSOLIDATION",
    range: ["2026-04-04", "2026-04-24"],
    description: "Easter revision. Active recall — flashcards, practice questions, past papers by topic.",
    focus: "Active recall + spaced repetition",
    atomicHabit: "Never miss twice. If you skip a session, do half the next day.",
  },
  {
    name: "PHASE 3 — EXAM SIMULATION",
    range: ["2026-04-25", "2026-05-12"],
    description: "Full past papers under timed conditions. Mark with mark scheme immediately.",
    focus: "Past papers + targeted weak areas",
    atomicHabit: "Identity: you are someone who does hard things consistently.",
  },
];

// ── UTILITY FUNCTIONS ────────────────────────
function getDailyRecommendation() {
  const today = new Date();
  const todayStr = today.toISOString().split('T')[0];

  const phase = STUDY_PHASES.find(p => todayStr >= p.range[0] && todayStr <= p.range[1])
    || STUDY_PHASES[STUDY_PHASES.length - 1];

  const upcoming = ALL_EXAM_DATES
    .filter(e => e.date >= todayStr)
    .sort((a, b) => a.date.localeCompare(b.date));

  const next = upcoming[0] || null;

  return { phase, upcoming: upcoming.slice(0, 5), next };
                                      }
                     
