import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { projects } from "@/lib/projects";
import Link from "next/link";

export default function ProjectsListPage() {
  return (
    <>
      <Header />
      <div className="container py-16 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block bg-white rounded shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
