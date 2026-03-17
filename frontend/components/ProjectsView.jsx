'use client'

import { motion } from 'motion/react'
import Link from 'next/link'
import { ArrowUpRight, Layers, ArrowRight } from 'lucide-react'
import ProjectCard from '@/components/ProjectCard'

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }
})

export default function ProjectsView({ projects }) {
    return (
        <main className="relative bg-white dark:bg-neutral-950 text-black dark:text-white overflow-hidden">

            {/* ══════════════ HERO ══════════════ */}
            <section className="relative px-[10%] pt-32 pb-24 overflow-hidden">

                {/* Background radial glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-indigo-500/10 via-violet-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
                        backgroundSize: '64px 64px'
                    }}
                />

                <div className="relative max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 mb-8">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wide">
                            <Layers size={12} />
                            Portfolio · Selected Work
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1 {...fadeUp(0.1)} className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] mb-6">
                        Work that{' '}
                        <span className="relative">
                            <span className="relative z-10 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                                speaks
                            </span>
                        </span>
                        <br className="hidden md:block" />
                        {' '}for itself
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p {...fadeUp(0.2)} className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                        A curated collection of SaaS platforms, automation systems, and scalable
                        full-stack applications built with performance, security, and architecture-first thinking.
                    </motion.p>

                    {/* Stats row */}
                    <motion.div {...fadeUp(0.3)} className="inline-flex items-center gap-8 text-sm text-gray-400 dark:text-gray-500">
                        {[
                            { value: `${projects.length}`, label: 'Projects' },
                            { value: '3+', label: 'Industries' },
                            { value: '5+', label: 'Years Experience' },
                        ].map(({ value, label }) => (
                            <div key={label} className="flex items-center gap-2">
                                <span className="font-semibold text-gray-800 dark:text-gray-100 text-base">{value}</span>
                                <span>{label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ══════════════ PROJECTS LIST ══════════════ */}
            <section className="px-[10%] pb-32">
                <div className="max-w-6xl mx-auto space-y-32">
                    {projects.map((project, index) => (
                        <div key={project.slug}>
                            <ProjectCard project={project} index={index} />

                            {/* Divider — not after last item */}
                            {index < projects.length - 1 && (
                                <div className="mt-32 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ══════════════ CTA ══════════════ */}
            <section className="relative px-[10%] py-32 overflow-hidden">

                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-indigo-950/20 dark:via-neutral-950 dark:to-violet-950/20" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-400/10 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-500 dark:text-indigo-400 mb-5">
                            Let&apos;s Collaborate
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.15]">
                            Let&apos;s build something{' '}
                            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
                                impactful
                            </span>
                        </h2>

                        <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-xl mx-auto">
                            Have a project in mind? I&apos;d love to help you architect, build, and scale it.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Start a Project
                                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>

                            <Link
                                href="/"
                                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-gray-200 dark:border-white/15 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 bg-white/60 dark:bg-white/5 backdrop-blur-sm"
                            >
                                Back to Home
                                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
