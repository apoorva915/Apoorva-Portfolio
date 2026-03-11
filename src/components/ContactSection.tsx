import { Mail, ArrowUpRight } from "lucide-react";

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
        <a
          href="mailto:apoorva@example.com"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg hover-lift"
        >
          <Mail className="w-4 h-4" />
          Say Hello
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
