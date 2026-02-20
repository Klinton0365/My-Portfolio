export const projects = [
  {
  slug: "school-management-erp",
  title: "School Management ERP",
  category: "Multi-Tenant SaaS Platform",
  description:
    "A scalable multi-tenant School ERP system designed to automate academic and administrative workflows with role-based access control and secure architecture.",

  problem:
    "Educational institutions were managing operations manually or through disconnected systems, leading to inefficiencies in attendance, fee management, and reporting. Data inconsistencies and lack of centralized control created operational bottlenecks.",

  solution:
    "Designed and developed a modular multi-tenant SaaS ERP platform using Laravel. Implemented role-based access control (RBAC), automated fee calculations, and centralized data management with optimized database indexing for performance.",

  features: [
    "Multi-School Tenancy Architecture",
    "Role-Based Access Control (Admin, Teacher, Student, Parent)",
    "Automated Fee & Invoice Generation",
    "Attendance & Academic Report Management",
    "Real-Time Notifications & Email Integration",
    "Secure Authentication & Session Handling"
  ],

  tech: [
    "Laravel",
    "MySQL",
    "RBAC",
    "REST APIs",
    "Bootstrap",
    "Payment Gateway Integration"
  ],

  challenges:
    "Handling multi-tenant data isolation while maintaining performance and scalability. Implemented database-level optimization and middleware-based tenant resolution.",

  impact:
    "Reduced administrative workload by over 60%, improved data accuracy, and enabled scalable onboarding for multiple institutions under a single platform.",

  image: "/assets/work-1.png",
  github: "#",
  live: "#"
},
{
  slug: "course-connect-platform",
  title: "Course Connect Platform",
  category: "Full Stack Web Application",
  description:
    "A full-stack course management and organizational platform designed to streamline content delivery and user interaction.",

  problem:
    "Organizations lacked a centralized platform to manage courses, blogs, and user engagement under a single structured system.",

  solution:
    "Developed a full-stack application integrating Laravel backend with React frontend, implementing structured MVC architecture and optimized API communication.",

  features: [
    "Course & Blog Management",
    "Dynamic User Dashboard",
    "Secure Authentication",
    "Admin Content Management",
    "API-Driven Architecture"
  ],

  tech: [
    "Laravel",
    "React JS",
    "PHP",
    "REST API",
    "MySQL"
  ],

  challenges:
    "Ensuring seamless frontend-backend communication and optimizing API response time for better user experience.",

  impact:
    "Improved content management efficiency and increased user engagement through a structured digital learning ecosystem.",

  image: "/assets/work-2.png",
  github: "#",
  live: "#"
},
{
  slug: "cloud-india-hub",
  title: "Cloud India Hub – Domain & Hosting Platform",
  category: "Automation & API Integration",
  description:
    "A domain and hosting automation platform integrated with ResellerClub API for real-time domain registration and hosting management.",

  problem:
    "Manual domain registration and hosting setup created delays and operational overhead for customers and administrators.",

  solution:
    "Integrated ResellerClub APIs to automate domain search, registration, renewal, and hosting provisioning with secure payment integration.",

  features: [
    "Real-Time Domain Search",
    "Automated Registration & Renewal",
    "Hosting Provisioning",
    "Payment Gateway Integration",
    "Admin Dashboard & Reporting"
  ],

  tech: [
    "Laravel",
    "ResellerClub API",
    "Payment Gateway",
    "MySQL",
    "REST APIs"
  ],

  challenges:
    "Handling external API failures gracefully while maintaining transaction integrity and user trust.",

  impact:
    "Reduced manual processing time by 80% and improved customer onboarding speed through automation.",

  image: "/assets/work-3.png",
  github: "#",
  live: "#"
},
{
  slug: "sustainable-soil-systems",
  title: "Sustainable Soil Systems",
  category: "Agriculture & Sustainability",
  description:
    "A web platform for monitoring and managing soil health data, enabling farmers and agronomists to make data-driven decisions for sustainable agriculture practices.",

  problem:
    "Farmers and agricultural organizations lacked a centralized digital tool to track soil quality metrics, nutrient levels, and sustainability indicators across multiple land parcels — leading to poor crop planning and resource waste.",

  solution:
    "Built a Laravel-based platform with an analytics dashboard that aggregates soil data from field inputs and sensor integrations. Implemented REST APIs for data collection, visual reporting for nutrient trends, and role-based access for farm managers and field officers.",

  features: [
    "Soil Health Monitoring Dashboard",
    "Nutrient Level Tracking & Trend Analysis",
    "Multi-Parcel Land Management",
    "Role-Based Access (Admin, Agronomist, Field Officer)",
    "Data Export & Reporting",
    "REST API for Sensor Data Ingestion"
  ],

  tech: [
    "Laravel",
    "MySQL",
    "REST APIs",
    "Chart.js",
    "Dashboard Analytics",
    "Role-Based Access"
  ],

  challenges:
    "Designing a flexible data model to support varying soil parameters across different regions and crop types while keeping the dashboard responsive with large datasets.",

  impact:
    "Enabled data-driven farming decisions, reduced fertilizer waste by providing precise nutrient recommendations, and improved crop yield planning for participating agricultural organizations.",

  image: "/assets/work-4.png",
  github: "#",
  live: "#"
}

];
