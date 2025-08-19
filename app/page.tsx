// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeText from './components/MarqueeText';
import AboutSection from './components/AboutSection';


export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
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