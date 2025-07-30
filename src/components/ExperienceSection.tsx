const ExperienceSection = () => {
  const experiences = [
    {
      title: "IT Sales Recruiter",
      company: "US-based C2C Staffing Firm",
      period: "2025 - Present",
      responsibilities: [
        "Skilled IT Sales Recruiter with hands-on experience placing qualified consultants",
        "Proficient in full-cycle recruitment, candidate sourcing, and client coordination",
        "Adept at aligning tech talent with project needs while maintaining strong relationships",
        "Managing both client and consultant relationships effectively",
        "Sourcing and screening candidates for various IT positions",
        "Coordinating placements and ensuring successful onboarding"
      ]
    },
    {
      title: "UI/UX Designer",
      company: "Freelance/Projects",
      period: "2022 - Present",
      responsibilities: [
        "Passionate and creative UI/UX designer with hands-on experience",
        "Crafting intuitive and engaging user experiences using Figma",
        "Working with industry-standard design platforms and tools",
        "Creating wireframes, prototypes, and high-fidelity designs",
        "Conducting user research and usability testing",
        "Collaborating with development teams for seamless implementation"
      ]
    },
    {
      title: "Sales & Marketing Professional",
      company: "Various Organizations",
      period: "2022 - Present",
      responsibilities: [
        "Versatile Sales and Marketing professional with proven experience",
        "Talent acquisition, consultative and product sales expertise",
        "Event management and strategic campaign execution",
        "Lead generation and client relationship building",
        "Employer branding and marketing initiatives",
        "Connecting people, products, and opportunities to drive business growth"
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 violet-white-gradient">
          Professional Experience
        </h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="fade-in-up glass-effect rounded-2xl p-4 sm:p-6 lg:p-8 hover-glow"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold violet-white-gradient mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg sm:text-xl violet-white-gradient font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="inline-block bg-accent/20 text-accent px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium mt-2 sm:mt-0 self-start">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 sm:space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                    <span className="violet-white-gradient leading-relaxed text-sm sm:text-base">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;