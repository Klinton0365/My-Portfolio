'use client';
import { useEffect, useRef } from 'react';

export default function About() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Stagger the animations by adding delays
                        const elements = entry.target.querySelectorAll('.animate-on-scroll');
                        elements.forEach((el, i) => {
                            setTimeout(() => {
                                el.classList.add('in-view');
                            }, i * 150);
                        });
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const tools = [
        { name: 'VS Code', icon: '/assets/vscode.png' },
        { name: 'Git', icon: '/assets/git.png' },
        { name: 'Laravel', icon: null, svg: 'laravel' },
        { name: 'React', icon: '/assets/react.svg' },
        { name: 'Postman', icon: '/assets/postman.png' },
        { name: 'Linux', icon: '/assets/linux.png' },
    ];

    const stats = [
        { value: '2+', label: 'Years Experience' },
        { value: '20+', label: 'Projects Built' },
        { value: '6+', label: 'Happy Clients' },
    ];

    const data = [
        {
            name: 'Languages & Frameworks',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'PHP, React JS, Python, Laravel, Next JS, JavaScript, Node JS, .NET',
            accent: 'from-[#4f46e5] to-[#7c3aed]',
        },
        {
            name: 'Experience',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'Worked with startups and agencies building scalable production apps',
            accent: 'from-[#6366f1] to-[#a855f7]',
        },
        {
            name: 'Projects',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'Built 5+ projects including SaaS ERP, eCommerce & hosting platforms',
            accent: 'from-[#4f46e5] to-[#a855f7]',
        },
    ];

    return (
        <div
            ref={sectionRef}
            id="about"
            className="w-full px-[12%] py-10 scroll-mt-20 relative overflow-hidden"
        >
            {/* Decorative background glows */}
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-[#4f46e5]/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#7c3aed]/8 rounded-full blur-[120px] pointer-events-none" />

            {/* Section Header */}
            <div className="animate-on-scroll animate-slide-up text-center mb-16 relative">
                <p className="text-sm font-medium tracking-[0.3em] uppercase text-[#818cf8] dark:text-[#a5b4fc] mb-3 font-Outfit">
                    Get To Know Me
                </p>
                <h2 className="text-5xl font-Ovo dark:text-white inline-flex items-center justify-center gap-3 flex-wrap">
                    About{' '}
                    <span className="relative inline-block px-4 py-1">
                        <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-lg" />
                        <span className="relative text-white font-Ovo">KLINTON</span>
                    </span>
                </h2>
                <div className="mt-5 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]" />
            </div>

            <div className="flex w-full flex-col lg:flex-row items-center gap-16 lg:gap-20">
                {/* Left: Profile Image */}
                <div className="animate-on-scroll animate-slide-left lg:w-[40%] flex flex-col items-center gap-10">
                    <div className="relative group">
                        {/* Gradient glow behind image */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-700" />

                        {/* Image with gradient border */}
                        <div className="relative p-1 rounded-3xl bg-gradient-to-br from-[#4f46e5] to-[#7c3aed]">
                            <img
                                src="/assets/My-classy.png"
                                alt="Klinton"
                                className="w-64 sm:w-80 rounded-[20px] max-w-none relative z-10 bg-white dark:bg-darkTheme"
                            />
                        </div>

                        {/* Spinning badge */}
                        <div className="bg-black dark:bg-darkTheme w-24 h-24 sm:w-28 sm:h-28 absolute -right-4 -bottom-4 rounded-full shadow-[0_4px_55px_rgba(79,70,229,0.25)] flex items-center justify-center z-20 border-2 border-white dark:border-darkTheme">
                            <img src="/assets/full-stack deveoper.png" alt="" className="w-full animate-spin_slow" />
                            <img src="/assets/favicon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                        </div>
                    </div>

                    {/* Stats Row */}
                    <div className="flex items-center gap-6 sm:gap-8">
                        {stats.map((stat, i) => (
                            <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                                <div className="text-center">
                                    <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] font-Outfit">
                                        {stat.value}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-500 dark:text-white/60 mt-1 font-Outfit">
                                        {stat.label}
                                    </p>
                                </div>
                                {i < stats.length - 1 && (
                                    <div className="w-px h-12 bg-gray-300 dark:bg-white/20" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Content */}
                <div className="animate-on-scroll animate-slide-right flex-1 lg:w-[60%]">
                    <p className="mb-10 max-w-2xl font-Ovo text-gray-700 dark:text-white/90 text-lg leading-relaxed">
                        I am a <span className="font-semibold text-gray-900 dark:text-white">Software Engineer</span> based in Bangalore, India, with professional experience in building secure, scalable web applications. I have contributed to eCommerce startups, SaaS platforms, and multi-domain web solutions — delivering robust backend architectures, RESTful APIs, and seamless frontend experiences using <span className="font-semibold text-gray-900 dark:text-white">Laravel, React JS</span>, and modern full-stack technologies.
                    </p>

                    {/* Info Cards */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl">
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="group relative rounded-xl p-5 cursor-pointer hover:-translate-y-2 duration-500 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:shadow-lg hover:shadow-[#4f46e5]/10 dark:hover:shadow-[#4f46e5]/20 overflow-hidden"
                            >
                                {/* Top gradient accent bar */}
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#4f46e5]/10 to-[#7c3aed]/10 dark:from-[#4f46e5]/20 dark:to-[#7c3aed]/20 flex items-center justify-center mb-3">
                                    <img src={item.icon1} alt="" className="w-5 dark:hidden" />
                                    <img src={item.icon2} alt="" className="w-5 hidden dark:block" />
                                </div>
                                <h3 className="text-sm font-semibold text-gray-800 dark:text-white mb-2 font-Outfit">{item.name}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed dark:text-white/70">{item.description}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Tools Section */}
                    <div className="mt-10">
                        <h4 className="text-gray-700 font-Ovo dark:text-white/80 mb-5 flex items-center gap-3">
                            <span className="w-8 h-px bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]" />
                            Tools I Use
                        </h4>

                        <ul className="flex flex-wrap items-center gap-4">
                            {tools.map((tool) => (
                                <li
                                    key={tool.name}
                                    className="group flex flex-col items-center gap-2 cursor-pointer"
                                >
                                    <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 group-hover:border-[#4f46e5]/40 group-hover:-translate-y-1 group-hover:shadow-md group-hover:shadow-[#4f46e5]/10 transition-all duration-300">
                                        {tool.svg === 'laravel' ? (
                                            <svg className="w-7 h-7" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M49.626 11.564a.809.809 0 01.028.209v10.972a.8.8 0 01-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 01-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.4 39.944A.801.801 0 010 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.02-.02.047-.033.071-.05.027-.02.051-.044.082-.06h.001L9.829.015a.804.804 0 01.802 0L20.05 5.66h.001c.03.017.056.04.082.06.024.017.051.03.071.05.027.028.048.06.071.093.018.024.04.045.055.071.023.04.036.082.051.124.009.023.022.044.028.068a.81.81 0 01.028.209v20.559l8.008-4.611V10.82c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.014-.026.036-.047.054-.071.024-.032.044-.065.072-.093.02-.02.046-.033.07-.05.028-.02.052-.044.083-.06h.001l9.42-5.424a.803.803 0 01.801 0l9.42 5.424c.031.017.056.04.083.06.024.017.05.03.07.05.028.028.049.061.072.093.018.024.04.045.054.071.023.04.037.082.052.124.008.023.022.045.028.068zm-1.574 10.718V12.67l-3.363 1.936-4.646 2.675v9.613l8.01-4.612zm-9.42 16.18V27.849l-4.57 2.611-12.86 7.349v9.725l17.43-10.032zM1.604 7.27v31.517L19.034 48.82V39.1L9.838 34.03l-.003-.002-.004-.002c-.029-.016-.053-.038-.08-.057-.022-.016-.048-.029-.068-.048l-.002-.003c-.023-.022-.04-.05-.06-.076-.019-.024-.041-.046-.056-.073l-.001-.003c-.016-.027-.025-.058-.036-.088-.012-.025-.026-.049-.033-.077l-.002-.003c-.009-.03-.01-.064-.013-.097-.004-.025-.011-.049-.011-.075V12.669L6.237 9.999l-3.363-1.937-1.27-.793zM10.23 1.617l-8.008 4.611 8.008 4.612 8.009-4.612-8.01-4.611zm4.164 28.764l4.645-2.674V7.271l-3.363 1.936-4.646 2.675v20.436l3.364-1.937zM39.243 7.164l-8.009 4.612 8.01 4.612 8.008-4.612-8.01-4.612zm-.801 10.029l-4.646-2.675-3.363-1.936v9.612l4.645 2.675 3.364 1.937v-9.613zM20.636 38.556l11.591-6.624 5.83-3.332-8-4.606-9.215 5.307-8.216 4.732 8.01 4.523z" fill="#FF2D20"/>
                                            </svg>
                                        ) : (
                                            <img src={tool.icon} alt={tool.name} className="w-7" />
                                        )}
                                    </div>
                                    <span className="text-[10px] text-gray-400 dark:text-white/50 font-Outfit opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {tool.name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
