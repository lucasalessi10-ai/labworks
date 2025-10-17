 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/lab-report-app/README.md b/lab-report-app/README.md
new file mode 100644
index 0000000000000000000000000000000000000000..b2a54d8488a71127bd25bba1e15cda6b7392a3c5
--- /dev/null
+++ b/lab-report-app/README.md
@@ -0,0 +1,19 @@
+# Lab Report App
+
+An interactive Next.js workspace for exploring patient laboratory data, reviewing flagged biomarkers, and exporting FHIR-compatible diagnostic reports.
+
+## Features
+
+- Tailwind CSS interface with tabbed navigation for Summary, Inflammation, Lipids, Metabolic, Hormones, and Care Plan views
+- In-memory data models for Patients, Observations, Reports, and Care Plans with clinical seed data
+- API routes to list and create patients or observations, fetch individual patient detail, and export a FHIR DiagnosticReport JSON payload
+- Automatic high/low flagging of LDL-P, Triglycerides (TG), and Vitamin D observations based on clinical thresholds
+
+## Getting Started
+
+```bash
+npm install
+npm run dev
+```
+
+Open [http://localhost:3000/patients](http://localhost:3000/patients) to browse patients. The `/patients/[id]` route displays patient details alongside observation tables and a downloadable FHIR report.
 
EOF
)
