import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ChatBlock",
    description:
      "AI-powered blockchain payments app with a chatbot-driven interface to manage wallets, check balances, view history, and make paymail-based payments — boosting accessibility and expanding the user base by 60%.",
    tech: ["React", "Firebase", "Neucron API", "Tailwind CSS", "Gemini"],
  },
  {
    title: "StudyHelp",
    description:
      "Full-stack AI learning platform for 100+ users, generating personalized notes, quizzes, flashcards, and outlines by topic, goal, and difficulty using Gemini AI. Boosted engagement by 30%+.",
    tech: ["Next.js", "Inngest", "Neon", "Clerk", "Stripe", "Gemini AI"],
  },
  {
    title: "Admin Dashboard",
    description:
      "Enterprise-grade admin panel with secure login, real-time charts, activity feeds, and a Kanban board supporting task assignment, due dates, and real-time collaboration.",
    tech: ["React", "Refine", "TypeScript", "GraphQL", "Ant Design"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3 text-muted-foreground">
                  <Github className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                  <ExternalLink className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-primary/80 font-heading tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
