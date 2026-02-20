import { projects } from "@/app/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ShowcasePage({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="bg-neutral-950 text-white">

      {/* HERO SECTION */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <span className="text-sm uppercase tracking-widest text-gray-400">
          {project.category}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-4xl leading-tight">
          {project.title}
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          {project.description}
        </p>
      </div>

      {/* LARGE IMAGE SECTION */}
      {project.image && (
        <div className="px-[10%] py-24">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />
          </div>
        </div>
      )}

      {/* STORY SECTION */}
      <div className="px-[10%] py-32 grid md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.problem}
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-6">The Breakthrough</h2>
          <p className="text-gray-400 leading-relaxed">
            {project.solution}
          </p>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="px-[10%] py-32 bg-neutral-900">
        <h2 className="text-center text-4xl font-bold mb-20">
          What Makes It Powerful
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {project.features?.map((feature) => (
            <div
              key={feature}
              className="p-8 rounded-2xl border border-neutral-800 hover:border-white transition duration-500"
            >
              <h3 className="text-lg font-medium">{feature}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* IMPACT METRICS STYLE SECTION */}
      <div className="px-[10%] py-32 text-center">
        <h2 className="text-4xl font-bold mb-8">Impact</h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          {project.impact}
        </p>
      </div>

      {/* CTA SECTION */}
      <div className="py-24 text-center bg-white text-black">
        <h2 className="text-3xl font-semibold mb-8">
          Want to explore more?
        </h2>

        <div className="flex justify-center gap-6">
          <Link
            href={`/projects/${slug}`}
            className="px-8 py-3 border rounded-full hover:bg-black hover:text-white transition"
          >
            View Case Study
          </Link>

          <Link
            href="/projects"
            className="px-8 py-3 bg-black text-white rounded-full hover:opacity-80 transition"
          >
            All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}