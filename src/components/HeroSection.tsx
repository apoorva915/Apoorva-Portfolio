import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl">
        <p className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
          Software Engineer
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 animate-fade-in-up-delay-1">
          Apoorva
          <br />
          <span className="text-gradient">Kumari</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-12 animate-fade-in-up-delay-2">
          CS undergrad at NSUT building impactful software — from AI-powered platforms 
          to blockchain apps. Former intern at <span className="text-foreground font-medium">Salesforce</span> & <span className="text-foreground font-medium">DRDO</span>.
        </p>
        <div className="flex gap-6 items-center animate-fade-in-up-delay-3">
          <a
            href="#experience"
            className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg hover-lift inline-flex items-center gap-2"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition-colors font-heading font-medium"
          >
            Get in Touch →
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
