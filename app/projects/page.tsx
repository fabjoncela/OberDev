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
              className="group relative overflow-hidden bg-card block focus:outline-none"
            >
              <div className="aspect-[4/3] bg-gray-200 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105${
                    project.slug === "urban-plaza" ? " blur-xs" : ""
                  }`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 transition-opacity duration-300 opacity-100 p-0 m-0">
                  <div className="relative">
                    <div
                      className="w-13 h-13 p-0 m-0 absolute bottom-0 right-0 bg-white flex items-center justify-center select-none group"
                      style={{ borderRadius: 0 }}
                    >
                      <div
                        className="absolute right-full bottom-0 mb-0 mr-0 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700 ease-in-out bg-white text-black flex items-center justify-center shadow-lg pointer-events-none select-none font-normal text-xs  whitespace-nowrap px-3 h-13"
                        style={{ borderRadius: 0 }}
                      >
                        View Project
                      </div>
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h2 className="font-semibold text-lg">{project.title}</h2>
                <p className="text-xs text-gray-500 mb-1">{project.category}</p>
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
