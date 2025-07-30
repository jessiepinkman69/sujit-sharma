import { ExternalLink } from 'lucide-react';

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Java Course - Mastering the Fundamentals",
      provider: "Professional Development",
      link: "https://moonshot.scaler.com/s/li/EGUmxbXEKg",
      description: "Comprehensive Java programming course covering core concepts"
    },
    {
      title: "Data Structures and Algorithms",
      provider: "Scaler",
      link: "https://moonshot.scaler.com/s/sl/DX7huh4HnX?_gl=1%2Aw94lt6%2A_ga%2AMTcwOTc2NDQzNi4xNjkzOTM1OTIw%2A_ga_53S71ZZG1X%2AMTY5OTE5NjA2My4zNC4xLjE2OTkxOTYxMzEuMS4wLjA",
      description: "Advanced DSA concepts and problem-solving techniques"
    },
    {
      title: "Problem Solving Basic Certification",
      provider: "HackerRank",
      link: "https://www.hackerrank.com/certificates/iframe/8268214e4bf6",
      description: "Data Structures Problem solving using java."
    },
    {
      title: "Inbound Marketing Certification Course",
      provider: "HubSpot",
      link: "https://app.hubspot.com/academy/achievements/l5j2nv8y/en/1/bibek-parajuli/inbound-marketing",
      description: "Digital marketing strategies and customer acquisition"
    },
    {
      title: "Create and Design Digital Products using Canva",
      provider: "Design Institute",
      link: "https://drive.google.com/file/d/1Z2xewov6UPyr6STN0o-z7kNA0wWFFpCp/view?usp=sharing",
      description: "Digital design and creative content development"
    },
    {
      title: "TCS iON Career Edge - Young Professional",
      provider: "TCS",
      link: "https://drive.google.com/file/d/1CvOSgR80xoiF-4yWfYnY2E47myfsSetM/view?usp=sharing",
      description: "Professional development and industry readiness"
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