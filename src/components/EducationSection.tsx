import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12">Education</h2>
        <div className="flex items-start gap-5">
          <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-xl font-bold">Netaji Subhash University Of Technology</h3>
            <p className="text-muted-foreground text-sm mt-1">
              Bachelor of Technology, Computer Science And Engineering
            </p>
            <div className="flex flex-wrap gap-4 mt-2 text-sm">
              <span className="text-primary font-heading font-semibold">CGPA: 8.48</span>
              <span className="text-muted-foreground">2022 – 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
