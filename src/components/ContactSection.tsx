import { Mail, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "parajulibibek275@gmail.com",
      link: "mailto:parajulibibek275@gmail.com",
      color: "text-accent"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/bibekprj/",
      color: "text-primary"
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@bibek__parajuli2",
      link: "https://www.instagram.com/bibek__parajuli2/",
      color: "text-accent"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-8 violet-white-gradient">
          Let's Connect
        </h2>
        
        <p className="text-center violet-white-gradient mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto">
          Ready to collaborate or discuss opportunities? Feel free to reach out through any of these channels.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            
            return (
              <a 
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="fade-in-up glass-effect rounded-2xl p-6 sm:p-8 hover-glow group transition-all duration-300 text-center"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 rounded-full glass-effect flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}>
                  <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                
                <h3 className="text-base sm:text-lg font-bold violet-white-gradient mb-2">
                  {method.label}
                </h3>
                
                <p className="violet-white-gradient text-sm group-hover:text-primary transition-colors">
                  {method.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="violet-white-gradient mb-6 text-sm sm:text-base">
            Open to full-time opportunities, freelance projects, and collaboration
          </p>
          <a 
            href="mailto:parajulibibek275@gmail.com"
            className="inline-flex items-center px-6 sm:px-8 py-2 sm:py-3 bg-primary text-primary-foreground rounded-full font-medium hover-glow transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;