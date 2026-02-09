const fs = require('fs');
const path = require('path');

const escapeText = (text) =>
  text.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');

const buildPdf = (outputPath, title, lines) => {
  const startY = 760;
  const lineHeight = 16;
  const textLines = [title, '', ...lines];
  const contentBlocks = textLines.map(
    (line, idx) =>
      `BT /F1 12 Tf 72 ${startY - idx * lineHeight} Td (${escapeText(
        line,
      )}) Tj ET`,
  );

  const contentStream = contentBlocks.join('\n');
  const streamObj = `<< /Length ${Buffer.byteLength(
    contentStream,
    'utf8',
  )} >>\nstream\n${contentStream}\nendstream`;

  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>',
    streamObj,
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
  ];

  let pdfContent = '%PDF-1.4\n';
  const offsets = [0];

  objects.forEach((obj, index) => {
    offsets.push(Buffer.byteLength(pdfContent, 'utf8'));
    pdfContent += `${index + 1} 0 obj\n${obj}\nendobj\n`;
  });

  const xrefStart = Buffer.byteLength(pdfContent, 'utf8');
  pdfContent += `xref\n0 ${objects.length + 1}\n`;
  pdfContent += '0000000000 65535 f \n';
  offsets.slice(1).forEach((offset) => {
    pdfContent += `${offset.toString().padStart(10, '0')} 00000 n \n`;
  });
  pdfContent += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pdfContent, 'utf8');
  console.log(`✅ Wrote ${outputPath}`);
};

const aiLines = [
  'Connor McNeely | Lafayette, LA | (337) 288-7449 | connordmcneely@gmail.com',
  'linkedin.com/in/connordmcneely | github.com/connordmcneely96',
  'Summary: Full-stack & AI/ML developer with engineering background.',
  'Tech: React, Next.js, Node.js, Python, TypeScript, SQL, Tailwind CSS.',
  'AI/ML: LangChain, LangGraph, OpenAI API, PyTorch, TensorFlow, RAG.',
  'Cloud/DevOps: AWS (SageMaker, Bedrock, Lambda, S3), Vercel, GitHub.',
  'Projects:',
  ' - Inner Animals AI Dashboard – Next.js, FastAPI, LangChain, Pinecone.',
  ' - RAG Q&A System – Python, LangChain, OpenAI, Pinecone, Next.js.',
  ' - CAD Autonomous Engine – AI-powered CAD assistant (FastAPI, React).',
  ' - AI Health & Fitness Coach – React, FastAPI, OpenAI API.',
  ' - Southern Pets Rescue – MERN app with admin dashboard.',
  'Experience:',
  ' - Lead Mechanical Design Engineer, Bayou Pumps (Dec 2023–Present):',
  '   Python/MATLAB analytics, FEA/CFD visualization, performance insights.',
  ' - Automation Engineer, John Deere Reman (Jan–Jul 2023):',
  '   Cognex vision, SQL schemas, predictive maintenance analytics.',
  ' - Manufacturing Tech Support, Pfizer (Sep 2021–Sep 2022):',
  '   IoT monitoring dashboards and image processing for inspection.',
  'Education: B.S. Mechanical Engineering, Louisiana Tech University.',
  'Training: ML & DS (scikit-learn, TensorFlow), LangChain/LangGraph,',
  '  AWS SageMaker/Bedrock, Agentic AI, RAG systems, prompt engineering.',
];

const mechanicalLines = [
  "Connor McNeely | Youngsville, LA | (337) 581-7113 | connordmcneely@gmail.com",
  "linkedin.com/in/connor-mcneely-b322b9176",
  "Summary: Mechanical Design Engineer (5+ yrs) in CAD/CAE, automation, CI.",
  "CAD/CAE: SolidWorks (FEA/CFD), AutoCAD, Inventor, CATIA, MATLAB.",
  "Analysis: FEA, CFD, GD&T (ASME Y14.5), DFMA, FMEA, stress/thermal.",
  "Automation: PLCs (Allen-Bradley/Siemens), SCADA/HMI, Cognex vision, Fanuc.",
  "Manufacturing: CNC machining, 3D printing, injection molding, BOMs.",
  "Standards: ISO 9001/1219/5199, ASME B73.1, ASTM, ANSI, GMP, FDA, NEC.",
  "Process: Lean Six Sigma, DMAIC, 5S, Kaizen, DOE, root-cause analysis.",
  "Programming: Python (TensorFlow, scikit-learn, pandas), SQL, Visual Basic.",
  "Experience:",
  " - Lead Mechanical Design Engineer (Dec 2023–Present):",
  "   Disc pump design, FEA/CFD, DFMA; +20% efficiency, -15% cost.",
  " - Automation/Mechatronics Engineer, John Deere Turf Care (Jan–Jul 2023):",
  "   PLC/HMI/SCADA, sensors, ergonomics +30%, takt time -20%.",
  " - Automation/Process Engineer, SOS (Sep–Dec 2022):",
  "   Mold design with FEA/CFD; cost -20%, scrap -15%; VFD throughput +25%.",
  " - Inspection/Automation/Mechanical Engineer, Pfizer (Sep 2021–Sep 2022):",
  "   CAD/FEA components, FMEA, Cognex vision; GMP/FDA compliance.",
  " - Mechanical Design Engineer (Capstone), Galaxy Products (2018–2019):",
  "   CNC pneumatic gang drill; downtime -75%, efficiency +50%; P&ID, FEA/CFD.",
  "Education: B.S. Mechanical Engineering, Louisiana Tech University.",
  "Certs: CSWP, Lean Six Sigma training, PLC Programming (Allen-Bradley/Siemens).",
];

const outputDir = path.join(process.cwd(), 'public', 'resumes');
buildPdf(
  path.join(
    outputDir,
    'AI Developer_Fullstack Developer_AIML_Engineer Resume.docx.pdf',
  ),
  'AI Developer | Fullstack | AIML Engineer',
  aiLines,
);
buildPdf(
  path.join(
    outputDir,
    'ME_Resume_Updated.pdf',
  ),
  'Mechanical Drafter | Modeler | Automation',
  mechanicalLines,
);

