const skills = [
  { category: "Languages", items: ["Java", "Kotlin", "C++", "Python", "JavaScript", "TypeScript"] },
  { category: "Frontend", items: ["React", "Next.js", "React Native", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Spring", "Spring Boot", "Node.js", "Express.js", "REST APIs"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Mongoose", "Amazon Aurora"] },
  { category: "Cloud & Tools", items: ["AWS", "AWS S3", "Docker", "Git", "GitHub", "Postman", "Maven"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="px-6 py-10 md:px-12 lg:px-24 xl:px-32 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-12 text-center">Skills</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-heading">
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
    </section>
  );
};

export default SkillsSection;
