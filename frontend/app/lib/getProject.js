import { projects } from "@/app/data/projects";

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
