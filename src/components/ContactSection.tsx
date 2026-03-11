import { Mail, ArrowUpRight, Phone, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-6">Get In Touch</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Let's build something <span className="text-gradient">great together</span>.
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi — my inbox is always open.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="mailto:apoorvak915@gmail.com"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg hover-lift"
          >
            <Mail className="w-4 h-4" />
            Say Hello
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+918799784774"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg hover-lift"
          >
            <Phone className="w-4 h-4" />
            Call Me
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/apoorva-kumari-283a30254/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/apoorva915" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
