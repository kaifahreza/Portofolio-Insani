'use client';


import React, { useState, useEffect } from 'react';

// Data untuk timeline
const timelineEvents = [
    {
        year: '2015',
        title: 'Lulusan SMA',
        company: 'SMA Negeri 1',
        description: 'Memperoleh pendidikan menengah dengan fokus pada ilmu pengetahuan alam dan matematika, berpartisipasi dalam berbagai kompetisi sains.',
        side: 'right',
        icon: '🎓'
    },
    {
        year: '2016 - 2020',
        title: 'Sarjana Ilmu Komputer',
        company: 'Universitas Teknologi',
        description: 'Mempelajari dasar-dasar ilmu komputer, algoritma, struktur data, dan rekayasa perangkat lunak. Lulus dengan predikat cum laude.',
        side: 'left',
        icon: '💻'
    },
    {
        year: '2020 - 2022',
        title: 'Desainer UI/UX',
        company: 'Agensi Kreatif ABC',
        description: 'Menciptakan prototipe dan desain UI yang menarik untuk berbagai produk digital, berkolaborasi erat dengan tim pengembang untuk memastikan implementasi yang akurat.',
        side: 'right',
        icon: '🎨'
    },
    {
        year: '2022 - Sekarang',
        title: 'Pengembang Web Full-Stack',
        company: 'Perusahaan XYZ',
        description: 'Merancang dan mengembangkan aplikasi web skala penuh menggunakan teknologi modern seperti React, Node.js, dan MongoDB. Bertanggung jawab atas seluruh siklus pengembangan produk, mulai dari konsep hingga implementasi.',
        side: 'left',
        icon: '🚀'
    },
];

// Komponen Partikel
const Particle = ({ x, y, size, opacity, speed }) => {
    const [position, setPosition] = useState({ x, y });

    useEffect(() => {
        const animateParticle = () => {
            setPosition(prev => ({
                x: prev.x + (Math.random() - 0.5) * speed,
                y: prev.y + (Math.random() - 0.5) * speed
            }));
        };

        const interval = setInterval(animateParticle, 100);
        return () => clearInterval(interval);
    }, [speed]);

    return (
        <div
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"
            style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                transition: 'all 0.1s ease-out',
            }}
        />
    );
};

// Komponen Background Partikel
const ParticleBackground = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
        const generateParticles = () => {
            const newParticles = [];
            for (let i = 0; i < 30; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 3 + 1,
                    opacity: Math.random() * 0.3 + 0.1,
                    speed: Math.random() * 0.5 + 0.1,
                });
            }
            setParticles(newParticles);
        };

        generateParticles();
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <Particle key={particle.id} {...particle} />
            ))}
        </div>
    );
};

export default function TimelineSection() {
    const [visibleItems, setVisibleItems] = useState(new Set());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const timelineItems = document.querySelectorAll('[data-timeline-item]');
        timelineItems.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative w-full min-h-screen bg-black py-20 px-4 sm:px-8 md:py-32 overflow-hidden">
            {/* Background Partikel */}
            <ParticleBackground />
            
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent pointer-events-none" />
            
            <div className="container mx-auto max-w-6xl text-center relative z-10">
                {/* Judul Bagian */}
                <div className="mb-20">
                    <h2 className="text-5xl font-bold leading-tight text-white sm:text-6xl mb-6 animate-fade-in">
                        My Journey
                    </h2>
                    <div className="w-24 h-1 mx-auto bg-blue-500 rounded-full" />
                    <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
                        Perjalanan karir dan pendidikan yang membentuk siapa saya hari ini
                    </p>
                </div>

                {/* Container Utama Timeline */}
                <div className="relative">
                    {/* Garis Vertikal Timeline dengan gradient */}
                    <div className="absolute inset-y-0 left-1/2 w-0.5 bg-blue-500 transform -translate-x-1/2 rounded-full hidden md:block opacity-80" />
                    <div className="absolute inset-y-0 left-6 w-0.5 bg-blue-500 rounded-full md:hidden opacity-80" />

                    {/* Timeline Items */}
                    {timelineEvents.map((event, index) => (
                        <div
                            key={index}
                            data-timeline-item
                            data-index={index}
                            className={`relative mb-12 flex items-center transition-all duration-700 ${
                                visibleItems.has(index.toString()) 
                                    ? 'opacity-100 translate-y-0' 
                                    : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: `${index * 0.2}s` }}
                        >
                            {/* Titik Timeline Mobile */}
                            <div className="absolute left-4 w-5 h-5 rounded-full bg-blue-500 border-3 border-blue-300 shadow-lg z-20 md:hidden animate-pulse" />
                            
                            {/* Container Konten */}
                            <div className={`w-full pl-12 md:w-1/2 md:pl-0 relative ${
                                event.side === 'left' ? 'md:pr-12' : 'md:pl-12 md:ml-auto'
                            }`}>
                                {/* Titik Timeline Desktop */}
                                <div className={`absolute hidden md:block top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full bg-blue-500 border-4 border-blue-300 shadow-xl z-20 ${
                                    event.side === 'left' 
                                        ? 'right-[-12px]' 
                                        : 'left-[-12px]'
                                }`}>
                                    <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-30" />
                                </div>

                                {/* Arrow untuk desktop */}
                                <div className={`hidden md:block absolute top-8 w-0 h-0 ${
                                    event.side === 'left' 
                                        ? 'right-[-8px] border-l-8 border-l-gray-800/80 border-y-8 border-y-transparent' 
                                        : 'left-[-8px] border-r-8 border-r-gray-800/80 border-y-8 border-y-transparent'
                                }`} />
                                
                                {/* Card Konten */}
                                <div className={`group relative bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 text-left shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:bg-gray-800/90 hover:border-blue-500/50 hover:shadow-blue-500/20 ${
                                    event.side === 'right' ? 'md:ml-auto' : 'md:mr-auto'
                                }`}>
                                    {/* Background glow effect */}
                                    <div className="absolute inset-0 rounded-2xl bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    <div className="relative z-10">
                                        {/* Icon dan Year */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">{event.icon}</span>
                                            <span className="text-sm font-medium text-blue-300 bg-blue-500/20 px-3 py-1 rounded-full border border-blue-400/30">
                                                {event.year}
                                            </span>
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-all duration-300">
                                            {event.title}
                                        </h3>
                                        
                                        {/* Company */}
                                        <p className="text-lg font-semibold text-gray-300 mb-4 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-blue-400" />
                                            {event.company}
                                        </p>
                                        
                                        {/* Description */}
                                        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                            {event.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Decorative bottom gradient */}
                <div className="mt-20 w-full h-px bg-blue-500 opacity-40" />
            </div>
        </section>
    );
}