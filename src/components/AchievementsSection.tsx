import { Award, Trophy, Code, Star } from "lucide-react";

const achievements = [
  { icon: Star, text: "Selected in top 100 candidates by Salesforce India for the Futureforce Women In Tech Summit." },
  { icon: Trophy, text: "Secured 1st place in the Blockchain Hackathon organized by IIT Delhi × Timechain Labs." },
  { icon: Award, text: "Finalist at Hack for Impact, a nationwide hackathon at E-Summit 2025 by IIIT Delhi." },
  { icon: Award, text: "Finalist in Sprint4Good AI Hackathon organised by IIT Delhi × Reskill." },
  { icon: Code, text: "700+ questions solved on LeetCode." },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12 text-center">Achievements</h2>
        <div className="space-y-6">
          {achievements.map((a, i) => (
            <div key={i} className="flex items-start gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                <a.icon className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground/90 leading-relaxed pt-2">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
