const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-3">About</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-heading font-semibold leading-snug mb-6">
            Building software that makes a <span className="text-gradient">real difference</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            As a passionate learner, I thrive on making a meaningful impact in the ever-evolving world of technology. I am driven by an insatiable curiosity and a proactive approach to embracing challenges and emerging technologies, viewing them as opportunities to broaden my skill set and sharpen my problem-solving capabilities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Beyond technical pursuits, I am deeply committed to leveraging technology for social good, creating solutions that address societal challenges and improve lives. I aspire to lead ventures that blend cutting-edge innovation with a clear purpose, championing a vision that drives both technological and societal progress.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Alongside my strong interest in technology and entrepreneurship, I am also deeply intrigued by finance, fintech, marketing, and community engagement. I aim to merge my technical acumen with entrepreneurial spirit and a growth-focused mindset, building purpose-driven ventures that inspire change, foster communities, and leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
