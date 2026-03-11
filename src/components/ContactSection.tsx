import { useState } from "react";
import { Mail, Send, Linkedin, Github, X } from "lucide-react";

const ContactSection = () => {
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:apoorvak915@gmail.com?subject=${subject}&body=${body}`;
    setFormOpen(false);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-primary mb-6">Get In Touch</h2>
        <p className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Let's build something <span className="text-gradient">great together</span>.
        </p>
        <p className="text-muted-foreground max-w-md mx-auto mb-10 leading-relaxed">
          I'm currently open to new opportunities and collaborations.
          Whether you have a question or just want to connect — reach out!
        </p>
        <button
          onClick={() => setFormOpen(true)}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold px-8 py-3.5 rounded-lg hover-lift mb-8"
        >
          <Mail className="w-4 h-4" />
          Connect with Me
        </button>
        <div className="flex justify-center gap-4">
          <a href="https://www.linkedin.com/in/apoorva-kumari-283a30254/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/apoorva915" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Contact Form Modal */}
      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="bg-card border border-border rounded-2xl p-8 w-full max-w-md relative shadow-2xl">
            <button
              onClick={() => setFormOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-heading text-xl font-bold mb-1">Send me a message</h3>
            <p className="text-muted-foreground text-sm mb-6">This will open your email client with the details filled in.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary text-foreground rounded-lg px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-heading font-semibold py-3 rounded-lg hover-lift inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
