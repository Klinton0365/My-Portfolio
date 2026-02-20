import Link from "next/link";
import { projects } from "@/app/data/projects";
import { ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Projects | Klinton",
  description:
    "Explore a collection of scalable SaaS platforms, full-stack applications, and API-driven systems built with modern technologies.",
};

export default function ProjectsPage() {
  return (
    <section className="bg-white dark:bg-neutral-950 text-black dark:text-white">

      {/* HERO */}
      <div className="px-[10%] pt-24 pb-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Selected Projects
        </h1>

        <p className="text-gray-600 dark:text-gray-400 text-lg">
          A curated collection of SaaS platforms, automation systems,
          and scalable full-stack applications built with performance,
          security, and architecture-first thinking.
        </p>
      </div>

      {/* PROJECT LIST */}
      <div className="px-[10%] pb-32 space-y-24">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className={`grid md:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="rounded-3xl overflow-hidden shadow-xl group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-sm uppercase tracking-widest text-gray-500">
                {project.category}
              </span>

              <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
                {project.title}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {project.description}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs border rounded-full dark:border-neutral-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-6">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  View Case Study
                  <ArrowUpRight size={16} />
                </Link>

                <Link
                  href={`/projects/${project.slug}/showcase`}
                  className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition"
                >
                  Showcase View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pb-24">
        <Link
          href="/"
          className="px-8 py-3 border rounded-full hover:bg-black hover:text-white transition"
        >
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}