from fpdf import FPDF

pdf = FPDF()
pdf.add_page()
pdf.set_font("Arial", size=12)
pdf.cell(200, 10, txt="Sayandip Bar - AI Engineer", ln=1, align="C")
pdf.cell(200, 10, txt="Placeholder Resume", ln=2, align="C")
pdf.output("/app/frontend/public/resume.pdf")
