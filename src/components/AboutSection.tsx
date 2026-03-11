const skills = [
  { category: "Languages", items: ["Java", "Kotlin", "C++", "Python", "JavaScript", "TypeScript"] },
  { category: "Frontend", items: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Spring", "Spring Boot", "Node.js", "Express.js", "REST APIs"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Amazon Aurora"] },
  { category: "Cloud & Tools", items: ["AWS", "AWS S3", "Docker", "Git", "GitHub", "Postman", "Maven"] },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">About</h2>
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl md:text-3xl font-heading font-semibold leading-snug mb-6">
              Building software that makes a <span className="text-gradient">real difference</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              As a passionate learner, I thrive on making a meaningful impact in the ever-evolving world of technology. I am driven by an insatiable curiosity and a proactive approach to embracing challenges and emerging technologies, viewing them as opportunities to broaden my skill set and sharpen my problem-solving capabilities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Beyond technical pursuits, I am deeply committed to leveraging technology for social good, creating solutions that address societal challenges and improve lives. I aspire to lead ventures that blend cutting-edge innovation with a clear purpose, championing a vision that drives both technological and societal progress.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Alongside my strong interest in technology and entrepreneurship, I am also deeply intrigued by finance, fintech, marketing, and community engagement. I aim to merge my technical acumen with entrepreneurial spirit and a growth-focused mindset, building purpose-driven ventures that inspire change, foster communities, and leave a lasting impact.
            </p>
          </div>
          <div className="space-y-6">
            {skills.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2 font-heading">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-md font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
