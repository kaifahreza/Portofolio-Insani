import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Data untuk proyek. Anda dapat mengganti data dan URL gambar
const projects = [
    {
        title: 'Smart Greenhouse',
        category: 'Design & Development',
        image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&crop=center'
    },
    {
        title: 'Wisata Gua Maiga',
        category: 'Design & Development', 
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center'
    },
    {
        title: 'PPLK ITERA 2024',
        category: 'Design & Development',
        image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop&crop=center'
    },
    {
        title: 'Project Selanjutnya',
        category: 'Design & Development',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center'
    },
];

export default function ProjectSection() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Track mouse movement
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        if (hoveredProject) {
            window.addEventListener('mousemove', handleMouseMove);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [hoveredProject]);

    return (
        <section className="relative w-full bg-black min-h-screen py-20 px-4 sm:px-8 md:py-32 overflow-hidden">
            <div className="container mx-auto max-w-6xl relative z-10">
                <h2 className="text-5xl md:text-6xl font-light leading-tight text-white mb-20">
                    List of My Works
                </h2>
                
                <div className="space-y-0">
                    {projects.map((project, index) => (
                        <div 
                            key={index} 
                            className="relative border-b border-gray-800/50 cursor-pointer group"
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <a href={project.link} className="flex justify-between items-center py-8 md:py-12 transition-all duration-300">
                                <div className="flex items-center space-x-4">
                                    <h3 className="text-3xl md:text-5xl font-light text-gray-400 transition-all duration-300 group-hover:text-white group-hover:translate-x-4">
                                        {project.title}
                                    </h3>
                                </div>
                                <span className="text-sm md:text-base text-gray-500 transition-colors duration-300 group-hover:text-gray-300">
                                    {project.category}
                                </span>
                            </a>
                        </div>
                    ))}
                </div>
                
                {/* Image preview that follows cursor */}
                {hoveredProject && (
                    <div 
                        className="fixed z-50 pointer-events-none transition-all duration-200 ease-out"
                        style={{
                            left: mousePosition.x + 20,
                            top: mousePosition.y - 150,
                            transform: 'translate(0, 0)'
                        }}
                    >
                        <div className="relative">
                            <Image 
                                src={hoveredProject.image} 
                                alt={hoveredProject.title} 
                                width={320}
                                height={240}
                                className="w-80 h-60 object-cover rounded-lg shadow-2xl border border-gray-700/50" 
                            />
                            {/* Glow effect around image */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-500/20 via-purple-500/20 to-blue-500/20 blur-xl -z-10"></div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    );
}