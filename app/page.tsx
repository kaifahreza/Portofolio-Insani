'use client'

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/app/components/Navbar/ResizableNavbar";
import { useState, useEffect, useMemo } from "react";
import { Mail, Hand, Sparkle, ExternalLink, ChevronDown } from 'lucide-react';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import Image from "next/image";

// --- Data Definitions (Moved outside the component for better performance) ---

const NAV_ITEMS = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Weather",
    description: "Application to check the weather in your area",
    year: "2025",
    image: "/assets/project/weather.jpg",
    link: "https://weather-eta-teal-97.vercel.app/",
    type: "Web Application",
  },
  // Add more projects here if needed
];

const LANGUAGE_FRAMEWORK_DATA = [
  { name: "Next.js", icon: "/assets/icons/nextjs.svg", color: "#FFFFFF" },
  { name: "TypeScript", icon: "/assets/icons/typescript.svg", color: "#3178C6" },
  { name: "Node.js", icon: "/assets/icons/nodejs.svg", color: "#339933" },
  { name: "Tailwind CSS", icon: "/assets/icons/tailwindcss.svg", color: "#06B6D4" },
  { name: "MongoDB", icon: "/assets/icons/mongodb.svg", color: "#47A248" },
  { name: "Figma", icon: "/assets/icons/figma.svg", color: "#F24E1E" },
  { name: "PHP", icon: "/assets/icons/php.svg", color: "#777BB4" },
  { name: "HTML", icon: "/assets/icons/html.svg", color: "#E34F26" },
  { name: "CSS", icon: "/assets/icons/css.svg", color: "#1572B6" },
  { name: "JavaScript", icon: "/assets/icons/javascript.svg", color: "#F7DF1E" },
  { name: "MySQL", icon: "/assets/icons/sql.svg", color: "#4479A1" },
  { name: "Github", icon: "/assets/icons/github.svg", color: "#181717" },
];

const SPECIALITY_IMAGES: { [key: string]: string } = {
  development: '/assets/img/code.jpg',
  uiux: '/assets/img/uiux.jpg',
  branding: '/assets/img/branding.jpg',
};

// --- Main App Component ---

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [currentSpecialityImage, setCurrentSpecialityImage] = useState('/assets/img/code.jpg');

  // Effect to update current time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      };
      setCurrentTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime(); // Set initial time
    const intervalId = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  // Memoize the concatenated language/framework data for the marquee
  const marqueeItems = useMemo(() => {
    return [...LANGUAGE_FRAMEWORK_DATA, ...LANGUAGE_FRAMEWORK_DATA];
  }, []);

  // Handles accordion toggling and updates the speciality image
  const toggleAccordion = (accordionName: string) => {
    if (openAccordion === accordionName) {
      setOpenAccordion(null);
      setCurrentSpecialityImage('/assets/img/code.jpg'); // Revert to default image
    } else {
      setOpenAccordion(accordionName);
      setCurrentSpecialityImage(SPECIALITY_IMAGES[accordionName]);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      {/* Navbar Section */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={NAV_ITEMS} onItemClick={() => setIsMobileMenuOpen(false)} />
          <div className="flex items-center gap-4">
            <span className="text-white text-sm">
              {currentTime || 'Loading...'}
            </span>
          </div>
        </NavBody>
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>
          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white py-2 w-full text-left hover:text-blue-600 transition-colors duration-200"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4 pt-4 border-t border-neutral-700">
              <span className="text-blue-500 text-sm font-semibold">
                {currentTime || 'Loading...'}
              </span>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col justify-center h-full text-center md:text-left">
          <div className="mb-8 mt-16">
            <p className="text-md sm:text-lg text-gray-400 font-medium flex items-center justify-center md:justify-start gap-2">
              <Hand size={20} className="text-blue-600 animate-wave" />
              Hey! It’s me Arul Fitrah Insani,
            </p>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex items-center justify-center md:justify-start">
            <div className="animate-fade-in max-w-4xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Crafting <span className="text-blue-600">purpose driven experiences</span> <br className="hidden sm:block" /> that inspire & engage.
              </h1>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center text-left mt-auto pt-10">
            <div className="flex space-x-6 mb-4 sm:mb-0">
              <a href="https://github.com/kaifahreza" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform flex items-center">
                <FaGithub className="mr-2" /> GITHUB
              </a>
              <a href="https://instagram.com/Innsannii" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors transform flex items-center">
                <FaInstagram className="mr-2" /> INSTAGRAM
              </a>
              <a href="mailto:arulfitrahinsani10@gmail.com" className="text-gray-400 hover:text-white transition-colors transform flex items-center">
                <Mail className="mr-2" /> GMAIL
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section (BISMILLAH FULLSTACK DEVELOPER) */}
      <div className="overflow-hidden whitespace-nowrap py-4 mb-16">
        <div className="inline-block animate-marquee">
          <span className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 uppercase px-8 flex items-center">
            GOALS TO <Sparkle className="mx-4 inline-block text-gray-800" size={40} /> FULLSTACK <Sparkle className="mx-4 inline-block text-gray-800" size={40} /> DEVELOPER <Sparkle className="mx-4 inline-block text-gray-800" size={40} />
            GOALS TO <Sparkle className="mx-4 inline-block text-gray-800" size={40} /> FULLSTACK <Sparkle className="mx-4 inline-block text-gray-800" size={40} /> DEVELOPER <Sparkle className="mx-4 inline-block text-gray-800" size={40} />
          </span>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col justify-center h-full text-center">
          <div className="mb-12">
            <p className="text-md sm:text-lg text-blue-600 font-medium flex items-center justify-center gap-2 uppercase">
              <Sparkle size={20} className="text-blue-600" />
              About Me
            </p>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <div className="max-w-5xl">
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 leading-tight text-white">
                I’m Arul Fitrah Insani, a recent graduate with 5 months of experience as an IT staff. I focus on providing technical explanations, troubleshooting problems, and contributing to system operational efficiency. I’m passionate about continuing to learn and applying my skills in a dynamic environment to build quality digital experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects/Work Section */}
      <section id="projects" className="min-h-screen flex flex-col justify-center items-center py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl relative z-10 flex flex-col h-full text-center">
          {/* "MY WORK" heading */}
          <div className="mb-8">
            <p className="text-md sm:text-lg text-blue-600 font-medium flex items-center justify-center gap-2 uppercase">
              <Sparkle size={20} className="text-blue-600" />
              My Work
            </p>
          </div>

          {/* "Selected Projects" title and description */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 leading-tight text-white">
            Selected Projects
          </h2>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Here’s a curated selection showcasing my expertise and the achieved results.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {PROJECTS_DATA.map((project) => (
              <div key={project.id} className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-t-lg"
                />
                <div className="p-6 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.type}</p>
                  <div className="flex justify-between items-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 flex items-center gap-1 transition-colors">
                      View Project <ExternalLink size={16} />
                    </a>
                    <span className="text-gray-500 text-sm">{project.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center px-8 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-transparent hover:bg-blue-600 hover:text-white transition-colors duration-300">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      {/* Speciality Section */}
      <section id="speciality" className="min-h-screen flex flex-col justify-center items-center py-20 relative px-4 sm:px-6 lg:px-8 bg-black">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12">
          {/* Left Column - Areas of Expertise */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <p className="text-md sm:text-lg text-blue-600 font-medium flex items-center gap-2 uppercase mb-4">
              <Sparkle size={20} className="text-blue-600" />
              Speciality
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 leading-tight text-white">
              Areas of Expertise
            </h2>

            {/* Accordion Items */}
            <div className="w-full space-y-4">
              {/* Development Accordion */}
              <div className="bg-neutral-900 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleAccordion('development')}
                >
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">&lt;/&gt;</span>
                    <span className="text-xl font-semibold text-white">Development</span>
                  </div>
                  <ChevronDown className={`text-white transition-transform duration-300 ${openAccordion === 'development' ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === 'development' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300">
                    <p>
                      Proficient in building robust and scalable web applications using modern frameworks and technologies. I focus on clean code, performance, and responsive design to deliver exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* UI/UX Design Accordion */}
              <div className="bg-neutral-900 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleAccordion('uiux')}
                >
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">🎨</span>
                    <span className="text-xl font-semibold text-white">UI/UX Design</span>
                  </div>
                  <ChevronDown className={`text-white transition-transform duration-300 ${openAccordion === 'uiux' ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === 'uiux' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300">
                    <p>
                      Creating intuitive and visually appealing user interfaces with a strong emphasis on user experience. I conduct user research, wireframing, prototyping, and usability testing to ensure designs are both functional and delightful.
                    </p>
                  </div>
                </div>
              </div>

              {/* Branding Accordion */}
              <div className="bg-neutral-900 rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleAccordion('branding')}
                >
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">🏷️</span>
                    <span className="text-xl font-semibold text-white">Branding</span>
                  </div>
                  <ChevronDown className={`text-white transition-transform duration-300 ${openAccordion === 'branding' ? 'rotate-180' : ''}`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openAccordion === 'branding' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300">
                    <p>
                      Developing strong brand identities that resonate with target audiences. This includes logo design, brand guidelines, and visual communication strategies to create a cohesive and memorable brand presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Dynamic Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            {currentSpecialityImage && (
              <Image
                key={currentSpecialityImage} // Key helps re-render and animate image change
                src={currentSpecialityImage}
                alt="Areas of Expertise"
                width={600}
                height={400}
                className="rounded-lg shadow-xl transition-opacity duration-300 ease-in-out"
                style={{ opacity: currentSpecialityImage ? 1 : 0 }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Languages and Frameworks Marquee Section */}
      <section id="languages-frameworks" className="py-16 overflow-hidden bg-black">
        <div className="relative w-full overflow-hidden">
          {/* Marquee Wrapper - Duplicate content for seamless loop */}
          <div className="flex animate-marquee-long">
            {marqueeItems.map((item, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center min-w-[120px] sm:min-w-[150px] lg:min-w-[170px] px-3 py-1.5 mx-4 bg-neutral-900 rounded-lg shadow-md"
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span
                  className="text-lg sm:text-xl text-white whitespace-nowrap"
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[70vh] flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 bg-black text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-md sm:text-lg text-blue-600 font-medium flex items-center justify-center gap-2 uppercase mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </span>
            Available for work
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-10 leading-tight text-white">
            Let’s create your next big idea.
          </h2>
          <a
            href="mailto:arulfitrahinsani10@gmail.com"
            className="inline-flex items-center justify-center px-10 py-4 border border-white text-base font-medium rounded-full text-white bg-transparent hover:bg-white hover:text-black transition-colors duration-300 shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black py-8 px-4 sm:px-6 lg:px-8 text-center border-t border-neutral-800">
        <div className="container mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Arul Fitrah Insani. All rights reserved.</p>
          <div className="flex space-x-6 mb-4 sm:mb-0">
            <a href="https://github.com/kaifahreza" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform flex items-center">
              <FaGithub className="mr-2" /> Github
            </a>
            <a href="https://instagram.com/innsannii" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform flex items-center">
              <FaInstagram className="mr-2" /> Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
