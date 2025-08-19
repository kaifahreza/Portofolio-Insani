import React from 'react';
import Image from 'next/image';
import LogoLoop from './LogoLoop/LogoLoop';
import { SiHtml5, SiCss3, SiJavascript, SiPhp, SiMysql, SiLaravel, SiReact, SiNextdotjs, SiTailwindcss, SiFigma } from 'react-icons/si';

export default function AboutSection() {
    const techLogos = [
        { node: <SiHtml5 color="#ffffff" />, title: "HTML" },
        { node: <SiCss3 color="#ffffff" />, title: "CSS" },
        { node: <SiJavascript color="#ffffff" />, title: "JavaScript" },
        { node: <SiPhp color="#ffffff" />, title: "PHP" },
        { node: <SiMysql color="#ffffff" />, title: "MySQL" },
        { node: <SiLaravel color="#ffffff" />, title: "Laravel" },
        { node: <SiReact color="#ffffff" />, title: "React" },
        { node: <SiNextdotjs color="#ffffff" />, title: "Next.js" },
        { node: <SiTailwindcss color="#ffffff" />, title: "Tailwind CSS" },
        { node: <SiFigma color="#ffffff" />, title: "Figma" },
    ];

    return (
        <section className="relative z-10 w-full bg-black py-20 px-4 sm:px-8 md:py-32">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
                    {/* Section Foto dan Sosial Media */}
                    <div className="relative w-full max-w-sm md:w-1/2">
                        <div className="relative z-10 w-full overflow-hidden rounded-lg">
                            <Image
                                src="/assets/img/aku.png" 
                                alt="Profile Picture"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Section Teks "About Me" */}
                    <div className="w-full text-center md:w-1/2 md:text-left">
                        <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">
                            <span className="text-gray-400">About Me</span>
                        </h2>
                        <p className="mt-6 font-light leading-relaxed text-gray-400">
                            Halo! Saya adalah seorang desainer dan pengembang yang bersemangat dalam menciptakan pengalaman digital yang menarik. Saya memiliki keahlian dalam desain UI/UX dan pengembangan web full-stack. Saya suka mengubah ide-ide menjadi produk digital yang fungsional dan indah.
                        </p>
                        <p className="mt-4 font-light leading-relaxed text-gray-400">
                            Dengan pengalaman saya, saya berkomitmen untuk terus belajar dan mengadaptasi teknologi terbaru untuk memberikan solusi terbaik. Mari kita ciptakan sesuatu yang luar biasa bersama!
                        </p>
                        
                        <div className="mt-8 flex items-center justify-center">
                            <LogoLoop
                                logos={techLogos}
                                speed={120}
                                direction="left"
                                logoHeight={48}
                                gap={40}
                                pauseOnHover
                                scaleOnHover
                                fadeOut
                                fadeOutColor="#ffffff"
                                ariaLabel="Keahlian teknologi"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}