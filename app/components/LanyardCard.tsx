'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IconMail, IconMapPin, IconPhone, IconWorld } from '@tabler/icons-react';
import QRCode from "react-qr-code";

export default function LanyardCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Lanyard Strap */}
      <div className="w-6 h-16 bg-gradient-to-b from-gray-300 to-gray-400 rounded-b-full shadow-inner relative">
        <div className="absolute inset-x-0 top-0 h-2 bg-gray-200 rounded-full"></div>
        <div className="absolute inset-x-0 bottom-0 w-8 h-3 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full -mx-1 shadow-md"></div>
      </div>

      {/* Card Container */}
      <div 
        className="relative w-80 h-[480px] rounded-lg cursor-pointer"
        onClick={handleFlip}
        style={{ 
          perspective: '1000px'
        }}
      >
        <div 
          className="relative w-full h-full transition-transform duration-700"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front Side */}
          <div 
            className="absolute inset-0"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl overflow-hidden">
              
              {/* Top Section with Profile */}
              <div className="relative p-8 pt-12">
                {/* Profile Picture with Red Accent Ring */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 bg-red-500 rounded-full p-1">
                    <div className="w-full h-full rounded-full overflow-hidden bg-gray-800">
                      <Image
                        src="/assets/img/aku.png"
                        alt="Profile Picture"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <div className="text-center mb-8">
                  <h3 className="font-bold text-2xl text-white mb-2 tracking-wide">INSANI</h3>
                  <p className="text-lg text-gray-300 font-medium">Fullstack Developer</p>
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconPhone className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">+6281 234 5678</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconMail className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">arulfitrahinsani10@gmail.com</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconWorld className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">www.insani.dev</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconMapPin className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-sm">Bandung, Indonesia</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0"
            style={{ 
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg shadow-2xl overflow-hidden">
              
              {/* Red Accent Lines */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-red-500"></div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-red-500"></div>
              
              <div className="flex flex-col items-center justify-center h-full text-center p-8">
                
                {/* Brand Logo Area */}
                <div className="mb-8">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <span className="text-white font-bold text-2xl">I</span>
                  </div>
                </div>

                {/* Brand Name */}
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white tracking-wider mb-2">INSANI</h2>
                  <p className="text-red-400 text-sm uppercase tracking-widest">Fullstack Developer</p>
                </div>

                {/* QR Code */}
                <div className="bg-white p-4 rounded-lg mb-6">
                  <QRCode
                    value="https://insani.dev"
                    size={120}
                    className="w-full h-full"
                    fgColor="#000000"
                    bgColor="#ffffff"
                  />
                </div>

                {/* Website */}
                <div className="text-center">
                  <div className="text-white text-sm font-bold mb-2">Satu baris kode hari ini, satu langkah maju untuk besok.</div>
                  <div className="text-white text-[8px] font-semibold">Arcshin</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}