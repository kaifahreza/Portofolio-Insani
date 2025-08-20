// components/LanyardCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { IconBrandInstagram, IconBrandLinkedin, IconMail, IconMapPin } from '@tabler/icons-react';
import QRCode from "react-qr-code";

export default function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`relative w-72 h-[420px] rounded-2xl shadow-2xl overflow-hidden cursor-pointer flip-container ${isFlipped ? 'flipped' : ''}`}
      onClick={handleFlip}
    >
      <div className="flipper">
        {/* Bagian Depan Kartu */}
        <div className="front">
          <div className="relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
            
            {/* Header Section (Blue) */}
            <div className="relative h-20 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-4">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="text-white font-bold text-xs opacity-80">FULLSTACK DEVELOPER</div>
                <div className="text-white text-xs opacity-60">#ARC758</div>
              </div>
              <div className="absolute top-2 right-2 w-8 h-8 bg-white/20 rounded-full"></div>
              <div className="absolute bottom-2 right-4 w-4 h-4 bg-white/10 rounded-full"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 pt-8">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-1">
                  <div className="w-full h-full rounded-full overflow-hidden bg-white">
                    <Image
                      src="/assets/img/aku.png"
                      alt="Profile Picture"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg">
                  <div className="w-full h-full bg-green-400 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-bold text-xl text-gray-800 mb-1">Insani</h3>
                <p className="text-sm font-medium text-gray-600 mb-1">Fullstack Developer</p>
                <div className="flex items-center justify-center gap-1 text-xs text-gray-500">
                  <IconMapPin className="h-3 w-3" />
                  <span>Bandung, Indonesia</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-full font-medium">React</span>
                <span className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full font-medium">Node.js</span>
                <span className="px-2 py-1 text-xs bg-purple-100 text-purple-700 rounded-full font-medium">Next.js</span>
              </div>
              <div className="flex justify-center gap-6">
                <a href="https://www.linkedin.com/in/insani" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 bg-blue-50 hover:bg-blue-100 rounded-full transition-all duration-200 hover:scale-110 group"><IconBrandLinkedin className="h-5 w-5 text-blue-600 group-hover:text-blue-700" /></a>
                <a href="https://www.instagram.com/innsannii/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex items-center justify-center w-10 h-10 bg-pink-50 hover:bg-pink-100 rounded-full transition-all duration-200 hover:scale-110 group"><IconBrandInstagram className="h-5 w-5 text-pink-600 group-hover:text-pink-700" /></a>
                <a href="mailto:arulfitrahinsani10@gmail.com" aria-label="Email" className="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 group"><IconMail className="h-5 w-5 text-gray-600 group-hover:text-gray-700" /></a>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
              <div className="text-xs text-gray-500 font-mono">EST. 2024</div>
            </div>
          </div>
        </div>

        {/* Bagian Belakang Kartu */}
        <div className="back">
          <div className="relative w-full h-full bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-2xl border border-gray-200 overflow-hidden">
            <div className="p-8 flex flex-col items-center justify-center h-full text-center">
              <h4 className="font-bold text-lg mb-2 text-gray-800">SCAN ME</h4>
              <p className="text-sm text-gray-600 mb-6">untuk melihat portofolio saya</p>
              
              {/* Kode QR yang Dihasilkan */}
              <div className="w-48 h-48 bg-white p-4 rounded-lg flex items-center justify-center shadow-inner">
                <QRCode
                  value="https://insani.dev" // Ganti dengan URL atau data Anda sendiri
                  size={160}
                  className="w-full h-full"
                />
              </div>

              <div className="text-xs text-gray-500 mt-6">
                <p>Insani</p>
                <p>arulfitrahinsani10@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}