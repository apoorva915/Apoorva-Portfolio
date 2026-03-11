import { BadgeCheck } from "lucide-react";

const certifications = [
  "Include# Cohort 4.0 — Microsoft Azure and the Azure Developer Community",
  "AI Aware - AI For All — CBSE (Training And Skill Education) and Intel",
  "AI Appreciate - AI For All — CBSE (Training And Skill Education) and Intel",
  "AWS - Solutions Architecture Job Simulation — Forage",
  "Wells Fargo - Software Engineering Job Simulation — Forage",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12">Certifications</h2>
        <div className="space-y-4">
          {certifications.map((cert, i) => (
            <div key={i} className="flex items-start gap-3 group">
              <BadgeCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-foreground/90 leading-relaxed">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
