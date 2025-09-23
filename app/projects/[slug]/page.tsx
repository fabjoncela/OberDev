import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { projects, Project } from "@/lib/projects";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <>
      <Header />
      <div className="container py-16 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full max-w-2xl mb-6 rounded"
        />
        <p className="text-lg text-gray-700 mb-8">{project.description}</p>
        {/* Add more project details here */}
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
