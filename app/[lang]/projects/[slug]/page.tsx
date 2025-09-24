import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { translations, Language } from "@/lib/i18n";

interface Props {
  params: { lang: Language; slug: string };
}

export default function ProjectPage({ params }: Props) {
  const { lang, slug } = params;
  const projects = translations[lang]?.projects;
  const project = projects?.find((p) => p.slug === slug);
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
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const languages: Language[] = ["en", "al", "it"];
  const { translations } = await import("@/lib/i18n");
  const params = languages.flatMap((lang) =>
    translations[lang].projects.map((p) => ({ lang, slug: p.slug }))
  );
  return params;
}
