import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { notFound } from "next/navigation";
import { translations, Language } from "@/lib/i18n";

interface Props {
  params: { lang: Language; slug: string };
}

export default function NewsArticlePage({ params }: Props) {
  const { lang, slug } = params;
  const articles = translations[lang]?.newsSection?.articles;
  // Use slug as index for now, or you can use a unique slug if you add it to i18n
  const article = articles && articles[parseInt(slug)];
  if (!article) return notFound();

  return (
    <>
      <Header />
      <div className="container py-16 px-4 md:px-6">
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <img
          src={article.image}
          alt={article.title}
          className="w-full max-w-2xl mb-6 rounded"
        />
        <p className="text-lg text-gray-700 mb-8">{article.description}</p>
      </div>
      <Footer />
    </>
  );
}

export async function generateStaticParams() {
  const languages: Language[] = ["en", "al", "it"];
  const { translations } = await import("@/lib/i18n");
  const params = languages.flatMap((lang) =>
    translations[lang].newsSection.articles.map((_, idx) => ({
      lang,
      slug: String(idx),
    }))
  );
  return params;
}
