import { projects } from "@/app/data/projects";
import ProjectsView from "@/components/ProjectsView";

export const metadata = {
  title: "Projects | Klinton",
  description:
    "Explore a collection of scalable SaaS platforms, full-stack applications, and API-driven systems built with modern technologies.",
};

export default function ProjectsPage() {
  return <ProjectsView projects={projects} />;
}
