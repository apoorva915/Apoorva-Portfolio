import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "AlignTurtle",
    role: "Frontend Developer",
    period: "Sep 2025 – Present",
    bullets: [
      "Engineered the company's MVP across both web and mobile platforms from the ground up by converting wireframes into responsive, production-ready UI screens.",
    ],
  },
  {
    company: "Salesforce",
    role: "Software Engineering Intern",
    period: "May 2025 – July 2025",
    bullets: [
      "Built an automated validation and correction framework to resolve data integrity issues in AWS DMS–based org migrations.",
      "Designed a 3-phase solution to classify orgs by discrepancies, trigger row-level validation via AWS DMS, and selectively re-migrate missing records.",
      "Cut remediation time from 2–6 months to hours, reduced CPU usage from 20% to 8%, and eliminated 90–100% of manual effort.",
    ],
  },
  {
    company: "Defence Research and Development Organisation (DRDO)",
    role: "Research Intern",
    period: "May 2024 – July 2024",
    bullets: [
      "Collaborated with top scientists to develop advanced algorithms for information security and data hiding, contributing to state-of-the-art cryptology systems.",
      "Developed a novel histogram-based reversible data hiding scheme that reduced pixel distortion by 30%+ and improved embedding efficiency by 25%, while preserving high image quality (PSNR > 40dB).",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12">Experience</h2>
        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l border-border">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                <Briefcase className="w-3 h-3 text-primary" />
              </div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground font-heading mb-1">
                {exp.period}
              </p>
              <h3 className="font-heading text-2xl font-bold mb-1">{exp.company}</h3>
              <p className="text-primary font-medium mb-4">{exp.role}</p>
              <ul className="space-y-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="text-muted-foreground leading-relaxed flex gap-3">
                    <span className="text-primary mt-1.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
