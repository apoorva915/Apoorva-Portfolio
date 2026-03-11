import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "ChatBlock",
    description:
      "Built an AI-powered blockchain payments app with a chatbot-driven interface to manage wallets, check balances, view history, and make paymail-based payments — boosting accessibility and expanding the user base by 60%. Integrated Neucron API for seamless blockchain wallet creation, reducing user drop-off by 30%.",
    tech: ["React", "Firebase", "Neucron API", "Tailwind CSS", "Gemini"],
    github: "https://github.com/apoorva915/chatblock",
    live: "https://chatblock-bay.vercel.app/login",
  },
  {
    title: "StudyHelp",
    description:
      "Built a full-stack AI learning platform for 100+ users, generating personalized notes, quizzes, flashcards, and outlines by topic, goal, and difficulty using Gemini AI. Integrated Inngest for async AI task handling, cutting backend cold-start latency and improving content delivery by 40%. Added Clerk auth, real-time tracking, and Stripe-based freemium model — boosting engagement by 30%+.",
    tech: ["Next.js", "Inngest", "Neon", "Clerk", "Stripe", "Gemini AI"],
    github: "https://github.com/apoorva915/Studyhelp",
    live: "https://studyhelp-red.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
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
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 hover:text-foreground transition-colors cursor-pointer" />
                  </a>
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
