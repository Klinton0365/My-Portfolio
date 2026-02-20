import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


export default function Work() {
  const work = [
    {
      name: "School Management ERP SaaS",
      image: "/assets/work-1.png",
      category: "SaaS Platform",
      tech: ["Laravel", "Multi-Tenant", "RBAC", "Payments"],
      link: "/projects/school-management-erp",
    },
    {
      name: "Course Connect Platform",
      image: "/assets/work-2.png",
      category: "Full Stack Web App",
      tech: ["React", "PHP", "REST API"],
      link: "/projects/course-connect-platform",
    },
    {
      name: "Cloud India Hub",
      image: "/assets/work-3.png",
      category: "Domain & Hosting Automation",
      tech: ["Laravel", "ResellerClub API", "Payment Gateway"],
      link: "/projects/cloud-india-hub",
    },
    {
      name: "Sustainable Soil Systems",
      image: "/assets/work-4.png",
      category: "Agriculture & Sustainability",
      tech: ["Laravel", "REST API", "Dashboard", "Analytics"],
      link: "/projects/sustainable-soil-systems",
    },
  ];

  return (
    <section
      id="work"
      className="w-full px-[10%] py-20 bg-white dark:bg-neutral-900"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-lg text-gray-500 mb-2">Portfolio</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          A selection of scalable SaaS platforms, automation systems, and
          full-stack applications built with performance, security, and
          real-world impact in mind.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        {work.map((project) => (
          <div
            key={project.name}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-500"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-8 text-white">
              <span className="text-xs uppercase tracking-wider text-gray-300 mb-2">
                {project.category}
              </span>

              <h3 className="text-2xl font-semibold mb-3">
                {project.name}
              </h3>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="text-xs bg-white/20 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-sm font-medium"
              >
                View Case Study
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* GitHub CTA */}
      <div className="text-center mt-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-3 px-8 py-3 border rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300 dark:border-neutral-600"
        >
          Explore More Projects
        </Link>
      </div>
    </section>
  );
}
