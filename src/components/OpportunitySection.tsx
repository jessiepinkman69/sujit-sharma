const OpportunitySection = () => {
  const roles = [
    "Java Developer",
    "Jr. Software Engineer", 
    "Backend Developer",
    "Flutter Developer"
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-background/50">
      <div className="container mx-auto max-w-4xl">
        <div className="fade-in-up glass-effect rounded-2xl p-6 sm:p-8 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 violet-white-gradient">
            I am looking for joining a cross-functional team
          </h2>
          
          <p className="text-lg sm:text-xl mb-8 violet-white-gradient font-medium">
            Roles I'm open to:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {roles.map((role, index) => (
              <div 
                key={index}
                className="glass-effect rounded-xl p-4 hover-glow transition-all"
              >
                <span className="violet-white-gradient font-medium text-sm sm:text-base">
                  {role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;