'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, Zap } from 'lucide-react'

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1, y: 0,
        transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] }
    }
}

const contentVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } }
}

const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export default function ProjectCard({ project, index }) {
    const isReversed = index % 2 !== 0

    return (
        <motion.article
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="group relative"
        >
            <div className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center`}>

                {/* ── Image Block ── */}
                <div className={isReversed ? 'md:order-last' : ''}>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-black/10 dark:shadow-black/40 aspect-[4/3]">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Floating CTA */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                            <Link
                                href={`/projects/${project.slug}`}
                                className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                            >
                                View Project <ArrowUpRight size={15} />
                            </Link>
                        </div>

                        {/* Index number watermark */}
                        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center">
                            <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>

                {/* ── Content Block ── */}
                <motion.div
                    variants={contentVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col gap-5"
                >
                    {/* Category */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-indigo-500 dark:text-indigo-400">
                            <span className="w-4 h-px bg-indigo-500 dark:bg-indigo-400" />
                            {project.category}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-[2.5rem] font-bold tracking-tight text-gray-900 dark:text-white leading-[1.15]"
                    >
                        {project.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-gray-500 dark:text-gray-400 leading-relaxed text-[15px] max-w-md"
                    >
                        {project.description}
                    </motion.p>

                    {/* Impact highlight */}
                    {project.impact && (
                        <motion.div
                            variants={itemVariants}
                            className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/20 border border-indigo-100 dark:border-indigo-900/40"
                        >
                            <Zap size={15} className="text-indigo-500 mt-0.5 shrink-0" />
                            <p className="text-[13px] text-indigo-700 dark:text-indigo-300 leading-relaxed">
                                {project.impact}
                            </p>
                        </motion.div>
                    )}

                    {/* Tech pills */}
                    <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
                        {project.tech?.slice(0, 4).map(tech => (
                            <span
                                key={tech}
                                className="px-3 py-1 text-[12px] font-medium rounded-full border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:border-indigo-400 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 cursor-default"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.tech?.length > 4 && (
                            <span className="px-3 py-1 text-[12px] font-medium rounded-full border border-dashed border-gray-200 dark:border-white/10 text-gray-400">
                                +{project.tech.length - 4} more
                            </span>
                        )}
                    </motion.div>

                    {/* Actions */}
                    <motion.div variants={itemVariants} className="flex items-center gap-6 pt-1">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="group/cta inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                            <span className="border-b border-current pb-px">View Case Study</span>
                            <ArrowUpRight
                                size={15}
                                className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                            />
                        </Link>

                        {project.live && project.live !== '#' && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                            >
                                Live Demo <ExternalLink size={13} />
                            </a>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </motion.article>
    )
}
