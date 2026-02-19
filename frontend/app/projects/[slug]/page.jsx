import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="bg-white dark:bg-neutral-900 text-black dark:text-white">

      {/* HERO */}
      <div className="px-[10%] pt-24 pb-16 text-center max-w-4xl mx-auto">
        <span className="text-sm uppercase tracking-wider text-gray-500">
          {project.category}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          {project.title}
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {project.description}
        </p>
      </div>

      {/* IMAGE */}
      {project.image && (
        <div className="px-[10%] mb-20">
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* PROBLEM & SOLUTION */}
      <div className="px-[10%] mb-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      {project.features && (
        <div className="px-[10%] mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-8">Key Features</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="border dark:border-neutral-700 rounded-xl p-5 hover:shadow-md transition"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TECH STACK */}
      {project.tech && (
        <div className="px-[10%] mb-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* IMPACT */}
      {project.impact && (
        <div className="px-[10%] mb-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Impact</h2>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.impact}
            </p>
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="px-[10%] pb-24 flex justify-center gap-6">
        {project.github && (
          <a
            href={project.github}
            className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
          >
            View Code
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition inline-flex items-center gap-2"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      {/* BACK LINK */}
      <div className="text-center pb-20">
        <Link href="/projects" className="text-sm text-gray-500 hover:underline">
          ← Back to Projects
        </Link>
      </div>
    </section>
  );
}
