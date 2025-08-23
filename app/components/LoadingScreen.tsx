'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const greetings = [
    { text: "Hello", lang: "English" },
    { text: "Halo", lang: "Indonesian" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "你好", lang: "Chinese" },
    { text: "Bonjour", lang: "French" },
    { text: "Hola", lang: "Spanish" },
    { text: "Guten Tag", lang: "German" },
    { text: "Ciao", lang: "Italian" },
    { text: "Olá", lang: "Portuguese" },
    { text: "Привет", lang: "Russian" },
    { text: "مرحبا", lang: "Arabic" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "สวัสดี", lang: "Thai" },
    { text: "Xin chào", lang: "Vietnamese" }
];

const LoadingScreen: React.FC = () => {
    const [currentGreeting, setCurrentGreeting] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [particles, setParticles] = useState([]);
    const [geos, setGeos] = useState([]);

    useEffect(() => {
        // Generate particles only on the client side
        const particleArray = [...Array(40)].map((_, i) => ({
            key: i,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.6 + 0.1,
            duration: Math.random() * 20 + 15,
            delay: Math.random() * 10,
            left: Math.random() * 100,
            top: Math.random() * 100,
        }));
        setParticles(particleArray);

        // Generate geometric shapes only on the client side
        const geoArray = [...Array(8)].map((_, i) => ({
            key: `geo-${i}`,
            size: 20 + Math.random() * 30,
            left: Math.random() * 100,
            top: Math.random() * 100,
            duration: 10 + Math.random() * 20,
            delay: Math.random() * 5,
            borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            transform: `rotate(${Math.random() * 360}deg)`
        }));
        setGeos(geoArray);
        
        // Interval for changing greetings
        const interval = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentGreeting((prev) => (prev + 1) % greetings.length);
                setIsVisible(true);
            }, 200);
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
            {/* Animated background with floating particles and gradient orbs */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient orbs */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-indigo-900/20 to-cyan-900/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
                <div className="absolute top-3/4 left-1/3 w-32 h-32 bg-gradient-to-r from-gray-700/10 to-gray-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
                
                {/* Floating particles with different sizes and opacity */}
                {particles.map((particle) => (
                    <div
                        key={particle.key}
                        className="absolute rounded-full bg-white animate-bounce"
                        style={{
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            left: `${particle.left}%`,
                            top: `${particle.top}%`,
                            opacity: particle.opacity,
                            animationDuration: `${particle.duration}s`,
                            animationDelay: `${particle.delay}s`,
                            animationIterationCount: 'infinite',
                            animationTimingFunction: 'ease-in-out'
                        }}
                    ></div>
                ))}

                {/* Subtle grid pattern overlay */}
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Floating geometric shapes */}
                {geos.map((geo) => (
                    <div
                        key={geo.key}
                        className="absolute border border-white/10 animate-spin"
                        style={{
                            width: `${geo.size}px`,
                            height: `${geo.size}px`,
                            left: `${geo.left}%`,
                            top: `${geo.top}%`,
                            animationDuration: `${geo.duration}s`,
                            animationDelay: `${geo.delay}s`,
                            borderRadius: geo.borderRadius,
                            transform: geo.transform
                        }}
                    ></div>
                ))}
            </div>

            <div className="flex flex-col items-center z-10">
                {/* Modern Loading Spinner with Character Image */}
                <div className="relative w-16 h-16 mb-8">
                    <div className="absolute inset-0 w-16 h-16 border-2 border-gray-800 rounded-full"></div>
                    <div className="absolute inset-0 w-16 h-16 border-2 border-t-white border-r-white rounded-full animate-spin"></div>
                    
                    {/* Character Image in Center */}
                    <div className="absolute inset-3 w-10 h-10 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                        <Image 
                            src="/assets/img/icon.png"
                            alt="Character Avatar"
                            width={32}
                            height={32}
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                    
                    <div className="absolute inset-1 w-14 h-14 border border-gray-700 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
                </div>
                
                {/* Greeting Text with Fade Animation */}
                <div 
                    className={`text-center transition-all duration-200 ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}
                >
                    <h1 className="text-4xl md:text-6xl font-light text-white mb-2 tracking-wider">
                        {greetings[currentGreeting].text}
                    </h1>
                    <p className="text-gray-400 text-sm uppercase tracking-widest">
                        {greetings[currentGreeting].lang}
                    </p>
                </div>

                {/* Loading Progress Dots */}
                <div className="flex space-x-2 mt-8">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className="w-2 h-2 bg-white rounded-full animate-pulse"
                            style={{
                                animationDelay: `${i * 0.3}s`,
                                animationDuration: '1s'
                            }}
                        ></div>
                    ))}
                </div>

                {/* Loading Text */}
                <p className="text-gray-300 text-sm mt-4 font-light tracking-wide">
                    Preparing your experience...
                </p>
            </div>
        </div>
    );
};

export default LoadingScreen;