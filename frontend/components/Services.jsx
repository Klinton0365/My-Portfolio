'use client';
import { useEffect, useRef } from 'react';
import { Code2, Globe, ShoppingCart, Smartphone, Workflow, Handshake } from "lucide-react";

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.animate-on-scroll');
            elements.forEach((el, i) => {
              setTimeout(() => {
                el.classList.add('in-view');
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      name: "Full Stack Web Development",
      icon: Code2,
      description:
        "End-to-end web application development using Laravel, React, Next.js and Node.js — from database design to pixel-perfect UI, deployed and production-ready.",
      tags: ["Laravel", "React", "Next.js", "Node.js"],
    },
    {
      name: "Freelance & Contract Projects",
      icon: Handshake,
      description:
        "Available for freelance projects, MVP builds, and contract work. I deliver clean, well-documented code on time — whether it's a landing page or a full SaaS product.",
      tags: ["MVP", "Remote", "On-Time Delivery"],
    },
    {
      name: "E-Commerce Solutions",
      icon: ShoppingCart,
      description:
        "Custom e-commerce platforms with payment gateway integration, inventory management, order tracking, and admin dashboards built for real business operations.",
      tags: ["Payments", "Admin Panel", "Inventory"],
    },
    {
      name: "SaaS Product Development",
      icon: Workflow,
      description:
        "Multi-tenant SaaS platforms with subscription billing, role-based access, API-first architecture, and scalable cloud deployment strategies.",
      tags: ["Multi-Tenant", "Billing", "APIs"],
    },
    {
      name: "Responsive UI / Frontend",
      icon: Smartphone,
      description:
        "Modern, responsive frontends using React and Tailwind CSS — fast, accessible, and optimized for every screen size with smooth animations and interactions.",
      tags: ["Tailwind", "Responsive", "Animations"],
    },
    {
      name: "API & Third-Party Integrations",
      icon: Globe,
      description:
        "Secure RESTful API development and integration with payment gateways, WhatsApp APIs, OTP services, CRMs, and any third-party service your business needs.",
      tags: ["REST API", "Webhooks", "OAuth"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full px-[10%] py-10 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4f46e5]/20 to-transparent" />
      <div className="absolute -top-60 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4f46e5]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="animate-on-scroll animate-slide-up text-center max-w-3xl mx-auto mb-16 relative">
        <p className="text-sm font-medium tracking-[0.3em] uppercase text-[#818cf8] dark:text-[#a5b4fc] mb-3 font-Outfit">
          What I Offer
        </p>
        <h2 className="text-4xl md:text-5xl mb-6 font-Ovo dark:text-white inline-flex items-center justify-center gap-3 flex-wrap">
          My{' '}
          <span className="relative inline-block px-4 py-1">
            <span className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] rounded-lg" />
            <span className="relative text-white font-Ovo">Services</span>
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
          From quick freelance gigs to full-scale product builds — I deliver
          production-ready solutions that help businesses grow and succeed.
        </p>
        <div className="mt-5 mx-auto w-20 h-1 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed]" />
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.name}
              className="animate-on-scroll animate-slide-up group relative bg-white dark:bg-white/[0.03] border border-gray-200 dark:border-white/10 rounded-2xl p-7 hover:shadow-xl hover:shadow-[#4f46e5]/5 dark:hover:shadow-[#4f46e5]/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover gradient border glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4f46e5]/0 to-[#7c3aed]/0 group-hover:from-[#4f46e5]/5 group-hover:to-[#7c3aed]/5 transition-all duration-500 pointer-events-none" />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative">
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5]/10 to-[#7c3aed]/10 dark:from-[#4f46e5]/20 dark:to-[#7c3aed]/20 mb-5 group-hover:from-[#4f46e5]/20 group-hover:to-[#7c3aed]/20 transition-colors duration-500">
                  <Icon className="w-6 h-6 text-[#4f46e5] dark:text-[#818cf8] group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white font-Outfit">
                  {service.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-white/60 leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[#4f46e5]/5 dark:bg-[#4f46e5]/15 text-[#4f46e5] dark:text-[#a5b4fc] font-Outfit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div className="animate-on-scroll animate-slide-up text-center mt-14">
        <p className="text-gray-500 dark:text-white/50 text-sm mb-4 font-Outfit">
          Have a project in mind?
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#7c3aed] text-white font-medium text-sm hover:shadow-lg hover:shadow-[#4f46e5]/25 transition-all duration-300 hover:-translate-y-0.5 font-Outfit"
        >
          Let&apos;s Work Together
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
        </a>
      </div>
    </section>
  );
}
