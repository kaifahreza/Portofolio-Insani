'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeText from './components/MarqueeText';
import AboutSection from './components/AboutSection';
import LoadingScreen from './components/LoadingScreen';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasikan waktu pemuatan, ganti dengan logika pemuatan data asli Anda
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <LoadingScreen />;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black font-poppins">
            <Header />
            <HeroSection />
            <MarqueeText />
            <AboutSection />
        </main>
    );
}
