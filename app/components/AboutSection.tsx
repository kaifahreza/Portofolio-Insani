import React from 'react';
import Image from 'next/image';
import LogoLoop from './LogoLoop/LogoLoop';

export default function AboutSection() {
    const techLogos = [
        { src: '/assets/img/html.png', alt: 'HTML' },
        { src: '/assets/img/css.png', alt: 'CSS' },
        { src: '/assets/img/javascript.png', alt: 'JavaScript' },
        { src: '/assets/img/php.png', alt: 'PHP' },
        { src: '/assets/img/mysql.png', alt: 'MySQL' },
        { src: '/assets/img/laravel.png', alt: 'Laravel' },
        { src: '/assets/img/react.png', alt: 'React' },
        { src: '/assets/img/nextjs.png', alt: 'Next.js' },
        { src: '/assets/img/tailwindcss.png', alt: 'Tailwind CSS' },
        { src: '/assets/img/figma.png', alt: 'Figma' },
        { src: '/assets/img/expressjs.png', alt: 'Express JS' },
        { src: '/assets/img/nodejs.png', alt: 'Node JS' },
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
                        
                        <div className="mt-8">
                            <LogoLoop
                                logos={techLogos}
                                speed={120}
                                direction="left"
                                logoHeight={48}
                                gap={40}
                                pauseOnHover
                                scaleOnHover
                                fadeOut
                                fadeOutColor="#000000"
                                ariaLabel="Keahlian teknologi"
                            >
                                {/* Ini adalah children dari LogoLoop */}
                                {techLogos.map((skill, index) => (
                                    <div key={index} className="flex h-12 w-12 items-center justify-center p-2 mx-4">
                                        <Image
                                            src={skill.src}
                                            alt={skill.alt}
                                            width={48}
                                            height={48}
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </LogoLoop>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}