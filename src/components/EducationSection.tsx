const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech Computer Science Engineering",
      institution: "KIIT University",
      period: "2022 - 2026",
      gpa: "CGPA 8.86",
      type: "primary"
    },
    {
      degree: "Computer Science (12th Grade)",
      institution: "Annapurna Model College",
      period: "2020 - 2022",
      gpa: "GPA 3.22 (12th), 3.95 (11th)",
      type: "secondary"
    },
    {
      degree: "Secondary Education (10th Grade)",
      institution: "Shree Saraswoti Secondary Public School",
      period: "Completed 2020",
      gpa: "GPA 3.85",
      type: "secondary"
    }
  ];

  return (
    <section id="education" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 violet-white-gradient">
          Education
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className={`fade-in-up glass-effect rounded-2xl p-6 hover-glow ${
                edu.type === 'primary' ? 'border-l-4 border-primary' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold violet-white-gradient mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg violet-white-gradient font-medium mb-1">
                    {edu.institution}
                  </p>
                  <p className="violet-white-gradient">
                    {edu.period}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 md:text-right">
                  <span className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                    {edu.gpa}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;