import { Cpu, Layers, Plug, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      name: "AI-Integrated Full Stack Development",
      icon: Cpu,
      description:
        "Building production-ready web applications using Laravel, Next.js, and React with AI integrations like OpenAI APIs, automation workflows, and intelligent dashboards.",
      link: "#",
    },
    {
      name: "Scalable SaaS Architecture",
      icon: Layers,
      description:
        "Designing multi-tenant SaaS platforms with role-based access, subscription billing, API-first architecture, and cloud-optimized deployment strategies.",
      link: "#",
    },
    {
      name: "Advanced API & System Integrations",
      icon: Plug,
      description:
        "Developing secure RESTful APIs and integrating third-party services including payment gateways, WhatsApp APIs, OTP systems, and enterprise CRM tools.",
      link: "#",
    },
    {
      name: "Security, Optimization & DevOps",
      icon: ShieldCheck,
      description:
        "Implementing secure authentication, rate limiting, encryption, and CI/CD pipelines with performance optimization for high-traffic production environments.",
      link: "#",
    },
  ];

  return (
    <section
      id="services"
      className="w-full px-[10%] py-20 bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-neutral-900"
    >
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-lg font-medium text-gray-500 mb-2">
          What I Offer
        </h4>
        <h2 className="text-4xl md:text-5xl mb-6 font-Ovo">
          Professional Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Delivering scalable, secure, and AI-powered web solutions tailored
          for modern startups, SaaS businesses, and enterprise platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => {
          const Icon = service.icon; // ✅ Correct place

          return (
            <div
              key={service.name}
              className="group bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black/5 dark:bg-white/10 mb-6">
                <Icon className="w-7 h-7 text-black dark:text-white group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {service.name}
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <a
                href={service.link}
                className="inline-flex items-center text-sm font-medium text-black dark:text-white hover:underline"
              >
                Learn More →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
