import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="px-[10%] py-20 bg-white dark:bg-neutral-900">
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <span className="text-sm text-gray-500 uppercase tracking-wider">
          {project.category}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
          {project.title}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
      </div>

      {/* Image */}
      <div className="max-w-5xl mx-auto mb-20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full rounded-2xl shadow-xl"
        />
      </div>

      {/* Problem & Solution */}
      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mb-20">
        <div>
          <h2 className="text-2xl font-semibold mb-4">The Problem</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {project.solution}
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {project.features.map((feature) => (
            <div
              key={feature}
              className="p-4 border rounded-xl dark:border-neutral-700"
            >
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div className="max-w-5xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
        <div className="flex flex-wrap gap-3">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-black text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Impact */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-2xl font-semibold mb-6">Impact</h2>
        <p className="text-gray-600 dark:text-gray-400">
          {project.impact}
        </p>
      </div>

      {/* CTA */}
      <div className="flex justify-center gap-6">
        <a
          href={project.github}
          className="px-6 py-3 border rounded-full hover:bg-black hover:text-white transition"
        >
          View Code
        </a>
        <a
          href={project.live}
          className="px-6 py-3 bg-black text-white rounded-full hover:opacity-80 transition inline-flex items-center gap-2"
        >
          Live Demo
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
