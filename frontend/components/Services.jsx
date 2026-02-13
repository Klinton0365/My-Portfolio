export default function Services() {
    const services = [
        {
            name: 'Full Stack Web Development',
            icon: '/assets/web-icon.png',
            description: 'Building secure, scalable web applications using Laravel, PHP, React JS, and Next JS with MVC architecture, Eloquent ORM, and RESTful APIs.',
            link: '#',
        },
        {
            name: 'API Development & Integration',
            icon: '/assets/mobile-icon.png',
            description: 'Designing and integrating REST APIs for seamless communication across platforms, including OTP, WhatsApp, email, and third-party service integrations.',
            link: '#',
        },
        {
            name: 'SaaS & ERP Solutions',
            icon: '/assets/ui-icon.png',
            description: 'Developing end-to-end SaaS platforms with role-based access control, automated workflows, fee management, and multi-module administrative systems.',
            link: '#',
        },
        {
            name: 'Security & Performance',
            icon: '/assets/graphics-icon.png',
            description: 'Implementing secure authentication, data encryption, and protection against XSS, SQL injection, and CSRF attacks with optimized SEO and performance.',
            link: '#',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My services</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">I am a Software Engineer based in Bangalore, India, specializing in building production-ready web applications, SaaS platforms, and secure backend systems with modern full-stack technologies.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="text-lg my-4 text-gray-700 dark:text-white">{service.name}</h3>
                        <p className="text-sm text-gray-600 leading-5 dark:text-white/80">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 text-sm mt-5">Read more <img src="/assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>
        </div>
    )
}