import { ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Python Basics",
      provider: "Alison",
      link: "https://alison.com",
      description: "Fundamental Python programming concepts and applications"
    },
    {
      title: "GenAI Powered Data Analytics Job Simulation",
      provider: "TATA Group",
      link: "https://www.tata.com",
      description: "AI-powered data analytics simulation and practical applications"
    },
    {
      title: "Business Communication",
      provider: "HP",
      link: "https://www.hp.com",
      description: "Professional business communication skills and strategies"
    },
    {
      title: "Social Media Marketing",
      provider: "HP",
      link: "https://www.hp.com",
      description: "Digital marketing strategies and social media management"
    },
    {
      title: "Customer Relationship Management",
      provider: "HP",
      link: "https://www.hp.com",
      description: "CRM strategies and customer engagement techniques"
    }
  ];

  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 violet-white-gradient">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="fade-in-up glass-effect rounded-2xl p-4 sm:p-6 hover-glow group cursor-pointer"
              onClick={() => window.open(cert.link, '_blank')}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-bold violet-white-gradient mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="violet-white-gradient font-medium text-sm mb-2">
                    {cert.provider}
                  </p>
                </div>
                <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 ml-2" />
              </div>
              
              <p className="violet-white-gradient text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;