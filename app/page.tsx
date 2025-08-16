'use client'

import { useState, useEffect } from 'react'
import { IconBriefcase, IconId, IconMail } from '@tabler/icons-react'
import Image from 'next/image'

export default function Home() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black font-poppins">
            {/* Navigation Header */}
            <div className="absolute top-0 z-40 flex w-full flex-col items-center justify-between gap-2 p-4 sm:p-9 font-light text-white md:flex-row md:gap-0">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 rounded-full border border-gray-100/20 p-2 sm:p-3 text-xs sm:text-sm leading-tight">
                    <span className="relative flex items-center justify-center">
                        <span className="h-2 sm:h-3 w-2 sm:w-3 animate-pulse rounded-full bg-white"></span>
                    </span>
                    <span>Insani.</span>
                </a>

                {/* Navigation Menu */}
                <div className="flex items-center">
                    <span className="flex items-center gap-4 sm:gap-10 rounded-full border border-gray-100/20 py-2 px-3 sm:py-3 sm:px-5 text-xs sm:text-sm leading-tight md:ml-4">
                        {/* Work Link */}
                        <div className="group relative z-10 flex cursor-pointer flex-col">
                            <a className="flex items-center gap-1">
                                <IconBriefcase className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="hidden sm:inline">Work</span>
                            </a>
                        </div>
                        {/* About Link */}
                        <div className="group relative z-10 flex cursor-pointer flex-col">
                            <a className="flex items-center gap-1">
                                <IconId className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="hidden sm:inline">About</span>
                            </a>
                        </div>
                        {/* Contact Link */}
                        <div className="group relative z-10 flex cursor-pointer flex-col">
                            <a className="flex items-center gap-1">
                                <IconMail className="w-4 h-4 sm:w-5 sm:h-5" />
                                <span className="hidden sm:inline">Contact</span>
                            </a>
                        </div>
                    </span>
                </div>
            </div>

            {/* Hero Section */}
            <div className="relative z-20 flex h-screen w-full overflow-hidden bg-black items-center justify-center">
                {/* Hero Image */}
                <div className="absolute left-0 top-0 h-full flex items-start w-full md:w-auto">
                    <Image
                        src="/assets/img/aku.png"
                        className="w-full h-auto md:w-auto md:h-full opacity-70 brightness-125 transition-all duration-500 ease-in-out md:opacity-100 object-cover object-left hero-image-animate"
                        alt="Hero Image"
                        width={400}
                        height={600}
                        priority
                    />
                </div>

                {/* Main Content */}
                <div className="relative z-30 flex flex-col items-center justify-center text-center px-4 pt-24 md:pt-32 md:items-end md:text-right md:pl-32 lg:pl-48">
                    <div className="mb-4 md:mb-8">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-poppins text-white leading-tight tracking-tight">
                            <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-2 md:gap-4">
                                <div className="font-semibold">DIGITAL</div>
                                <div className="text-xs sm:text-sm text-gray-400 border border-gray-400 px-2 py-1 rounded-full text-center">
                                    Based in Indonesia
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="font-semibold">EXPERIENCE.</div>
                            </div>
                            <div className="flex flex-col md:flex-row items-end md:items-center justify-end gap-2 md:gap-4">
                                <div className="text-gray-400 font-semibold">DESIGNER</div>
                                <div className="flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-green-500 mr-1 animate-pulse"></div>
                                    <span className="text-xs sm:text-sm font-semibold text-gray-400">Available Now</span>
                                </div>
                            </div>
                            <div className="text-gray-400 font-semibold">&DEVELOPER</div>
                        </h1>
                    </div>
                </div>

                
            </div>
        </main>
    )
}