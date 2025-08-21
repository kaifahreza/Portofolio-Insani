'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutSection() {
    const floatingTechStack = [
        // Frontend Cluster (Top-Left)
        { name: 'HTML', src: '/assets/img/skill/html.png', level: 95, category: 'Markup', color: 'from-orange-500 to-red-500', position: { top: '10%', left: '15%' } },
        { name: 'CSS', src: '/assets/img/skill/css.png', level: 92, category: 'Styling', color: 'from-blue-400 to-blue-600', position: { top: '25%', left: '5%' } },
        { name: 'JavaScript', src: '/assets/img/skill/javascript.png', level: 88, category: 'Language', color: 'from-yellow-400 to-orange-500', position: { top: '40%', left: '10%' } },
        { name: 'React', src: '/assets/img/skill/react.png', level: 90, category: 'Frontend', color: 'from-cyan-400 to-blue-500', position: { top: '15%', left: '30%' } },
        { name: 'Next.js', src: '/assets/img/skill/nextjs.png', level: 85, category: 'Framework', color: 'from-gray-300 to-gray-600', position: { top: '30%', left: '25%' } },

        // Backend Cluster (Top-Right)
        { name: 'PHP', src: '/assets/img/skill/php.png', level: 85, category: 'Backend', color: 'from-purple-500 to-indigo-600', position: { top: '10%', right: '15%' } },
        { name: 'Laravel', src: '/assets/img/skill/laravel.png', level: 82, category: 'Framework', color: 'from-red-400 to-red-600', position: { top: '25%', right: '5%' } },
        { name: 'Node.js', src: '/assets/img/skill/nodejs.png', level: 78, category: 'Runtime', color: 'from-green-400 to-green-600', position: { top: '40%', right: '10%' } },
        { name: 'Express.js', src: '/assets/img/skill/expressjs.png', level: 75, category: 'Framework', color: 'from-gray-400 to-gray-700', position: { top: '15%', right: '30%' } },

        // Styling & Tools Cluster (Bottom)
        { name: 'Bootstrap', src: '/assets/img/skill/bootstrap.png', level: 88, category: 'Framework', color: 'from-purple-400 to-purple-600', position: { bottom: '15%', left: '10%' } },
        { name: 'Tailwind', src: '/assets/img/skill/tailwindcss.png', level: 92, category: 'Styling', color: 'from-teal-400 to-cyan-500', position: { bottom: '30%', left: '25%' } },
        { name: 'MySQL', src: '/assets/img/skill/mysql.png', level: 80, category: 'Database', color: 'from-blue-500 to-indigo-600', position: { bottom: '10%', right: '10%' } },
        { name: 'Figma', src: '/assets/img/skill/figma.png', level: 87, category: 'Design', color: 'from-purple-400 to-pink-500', position: { bottom: '25%', right: '25%' } },
        { name: 'Git', src: '/assets/img/skill/git.png', level: 85, category: 'Tool', color: 'from-orange-600 to-red-700', position: { bottom: '30%', left: '5%' } },
        { name: 'MongoDB', src: '/assets/img/skill/mongodb.png', level: 70, category: 'Database', color: 'from-green-600 to-lime-700', position: { bottom: '10%', left: '30%' } },
        { name: 'GitHub', src: '/assets/img/skill/github.png', level: 89, category: 'Version Control', color: 'from-gray-400 to-gray-600', position: { bottom: '23%', right: '5%' } },
    ].map((tech, index) => ({
        ...tech,
        delay: index * 0.1
    }));

    const [hoveredTech, setHoveredTech] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <section className="relative z-10 w-full bg-black py-20 px-4 sm:px-8 md:py-32">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
                    {/* Floating Tech Stack Visualization */}
                    <div className="relative w-full max-w-lg h-[500px] md:w-1/2">
                        {/* Central Hub */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                            <div className="relative">
                                {/* Pulsing Ring */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
                                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                                
                                {/* Central Icon */}
                                <div className="relative w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-gray-700 overflow-hidden">
                                    <Image
                                    src="/assets/img/icon.png"
                                    alt="My Profile"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-full"
                                    />
                                    </div>
                            </div>
                        </div>

                        {/* Floating Tech Items */}
                        {floatingTechStack.map((tech, index) => (
                            <div
                                key={tech.name}
                                className={`absolute transform transition-all duration-700 cursor-pointer ${
                                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                                }`}
                                style={{
                                    ...tech.position,
                                    transitionDelay: `${tech.delay}s`
                                }}
                                onMouseEnter={() => setHoveredTech(tech)}
                                onMouseLeave={() => setHoveredTech(null)}
                            >
                                {/* Connection Line */}
                                <div className={`absolute top-1/2 left-1/2 w-px bg-gradient-to-r ${tech.color} opacity-30 transition-opacity duration-300 ${
                                    hoveredTech?.name === tech.name ? 'opacity-60' : ''
                                }`}
                                style={{
                                    height: '60px',
                                    transform: 'translate(-50%, -50%) rotate(45deg)',
                                    transformOrigin: 'center'
                                }}></div>

                                {/* Tech Item */}
                                <div className={`relative group transition-all duration-300 ${
                                    hoveredTech?.name === tech.name ? 'scale-125 z-30' : 'hover:scale-110'
                                }`}>
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-2 rounded-full bg-gradient-to-r ${tech.color} opacity-0 blur-md transition-opacity duration-300 ${
                                        hoveredTech?.name === tech.name ? 'opacity-40' : 'group-hover:opacity-20'
                                    }`}></div>
                                    
                                    {/* Tech Icon Container */}
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-2 border border-gray-700 group-hover:border-gray-600 transition-colors duration-300">
                                        <Image
                                            src={tech.src}
                                            alt={tech.name}
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>

                                    {/* Floating Animation */}
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div 
                                            className="w-full h-full animate-bounce opacity-60"
                                            style={{
                                                animationDelay: `${index * 0.3}s`,
                                                animationDuration: '3s'
                                            }}
                                        ></div>
                                    </div>
                                </div>

                                {/* Tooltip */}
                                {hoveredTech?.name === tech.name && (
                                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-40">
                                        <div className="bg-gray-900 border border-gray-700 rounded-lg p-3 min-w-[140px] shadow-xl">
                                            <div className="text-white font-semibold text-sm">{tech.name}</div>
                                            <div className="text-gray-400 text-xs mb-2">{tech.category}</div>
                                            
                                            {/* Progress Bar */}
                                            <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                                                <div 
                                                    className={`h-2 rounded-full bg-gradient-to-r ${tech.color} transition-all duration-500`}
                                                    style={{ width: `${tech.level}%` }}
                                                ></div>
                                            </div>
                                            <div className="text-white text-xs font-medium">{tech.level}%</div>
                                            
                                            {/* Arrow */}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Background Particles */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animation: `float 6s ease-in-out infinite ${Math.random() * 3}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Section Teks "About Me" */}
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <h2 className="text-5xl font-light leading-tight text-white sm:text-6xl">
                            <span className="text-white">About Me</span>
                        </h2>
                        <p className="mt-6 font-light leading-relaxed text-gray-400">
                            Halo! Saya adalah seorang desainer dan pengembang yang bersemangat dalam menciptakan pengalaman digital yang menarik. Saya memiliki keahlian dalam desain UI/UX dan pengembangan web full-stack.
                        </p>
                        <p className="mt-4 font-light leading-relaxed text-gray-400">
                            Dengan pengalaman saya, saya berkomitmen untuk terus belajar dan mengadaptasi teknologi terbaru untuk memberikan solusi terbaik. Mari kita ciptakan sesuatu yang luar biasa bersama!
                        </p>
                        
                        {/* Tech Summary */}
                        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                            <h3 className="text-white font-semibold mb-3">Complete Tech Stack</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                <div>
                                    <div className="text-orange-400 font-medium mb-1">Frontend:</div>
                                    <div className="text-gray-300 text-xs mb-2">HTML, CSS, JavaScript, React, Next.js, Vue.js</div>
                                </div>
                                <div>
                                    <div className="text-purple-400 font-medium mb-1">Backend:</div>
                                    <div className="text-gray-300 text-xs mb-2">PHP, Laravel, Node.js, Express.js</div>
                                </div>
                                <div>
                                    <div className="text-teal-400 font-medium mb-1">Styling:</div>
                                    <div className="text-gray-300 text-xs mb-2">Tailwind CSS, Bootstrap</div>
                                </div>
                                <div>
                                    <div className="text-blue-400 font-medium mb-1">Tools & DB:</div>
                                    <div className="text-gray-300 text-xs">MySQL, MongoDB, Figma, Git, GitHub</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-20px) rotate(180deg);
                        opacity: 0.6;
                    }
                }
            `}</style>
        </section>
    );
}