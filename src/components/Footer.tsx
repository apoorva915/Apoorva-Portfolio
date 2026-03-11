import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm font-body">
          Designed & Built by <span className="text-foreground">Apoorva Kumari</span>
        </p>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/apoorva-kumari-283a30254/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://github.com/apoorva915" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:apoorvak915@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
