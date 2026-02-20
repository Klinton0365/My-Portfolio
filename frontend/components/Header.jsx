'use client';
import { useState } from 'react';
import HireModal from './HireModal';

export default function Header() {
    const [hireOpen, setHireOpen] = useState(false);

    return (
        <>
            <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
                <img src="/assets/my-prof.png" alt="" className="rounded-full w-32 h-42" />
                <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                    Hi! I&apos;m Klinton A
                    <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
                </h3>
                <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">Software Engineer</h1>
                <p className="max-w-2xl mx-auto font-Ovo">I am a Software Engineer based in Bangalore, India, specializing in building secure, scalable web applications with Laravel, React JS, and modern PHP full-stack technologies.</p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                    <a href="#contact"
                        className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white flex items-center gap-2 dark:border-transparent">
                        contact me <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                    </a>

                    <button
                        onClick={() => setHireOpen(true)}
                        className="px-10 py-2.5 rounded-full border-2 border-[#4f46e5] text-[#4f46e5] dark:text-[#a5b4fc] dark:border-[#7c3aed] font-medium flex items-center gap-2 hover:bg-[#4f46e5] hover:text-white dark:hover:bg-[#7c3aed] dark:hover:text-white transition-all duration-300 font-Outfit"
                    >
                        Hire Me
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    <a href="/assets/Klinton-A-Resume.pdf" download
                        className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                        my resume <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                    </a>
                </div>
            </div>

            <HireModal isOpen={hireOpen} onClose={() => setHireOpen(false)} />
        </>
    );
}
