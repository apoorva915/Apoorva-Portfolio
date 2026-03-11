const skills = [
  { category: "Languages", items: ["Java", "Kotlin", "C++", "Python", "JavaScript"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS"] },
  { category: "Backend", items: ["Spring Boot", "Node.js", "Express.js", "REST APIs"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Amazon Aurora"] },
  { category: "Cloud & Tools", items: ["AWS", "Docker", "Git", "Postman", "Maven"] },
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
              I'm a Computer Science student at Netaji Subhash University of Technology (CGPA: 8.26), 
              passionate about creating scalable, impactful solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From cutting remediation time at Salesforce from months to hours, to developing novel 
              data hiding algorithms at DRDO — I thrive at the intersection of engineering and innovation.
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
