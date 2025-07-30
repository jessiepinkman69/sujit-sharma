import { ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const roles = [
    "Aspiring software engineer",
    "Java Developer", 
    "Flutter Developer",
    "Backend Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, 50);
      } else {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentRoleIndex, roles]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen hero-gradient relative">
      <div className="container mx-auto px-4 sm:px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold violet-white-gradient leading-tight">
                Hello! I Am{' '}
                <span className="violet-white-gradient block">
                  Bibek Parajuli.
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl gray-text font-light max-w-2xl mx-auto lg:mx-0 h-8">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>

            {/* Motivational Quote */}
            <div className="space-y-3 max-w-3xl mx-auto lg:mx-0">
              <blockquote className="text-base sm:text-lg lg:text-xl violet-white-gradient italic font-light">
                "Strive not to be a success, but rather to be of value."
              </blockquote>
              <p className="text-sm sm:text-base gray-text">
                Also I am working as a Technical Recruiter in US IT Staffing.
              </p>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="profile-glow w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
                <img 
                  src="/lovable-uploads/715e5d5e-bdde-461b-9ae8-2c33affec62f.png"
                  alt="Bibek Parajuli"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bounce-arrow hover-glow p-3 rounded-full glass-effect"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;