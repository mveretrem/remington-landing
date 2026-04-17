import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutContent() {
  return (
    <div className="flex h-full flex-col justify-center rounded-2xl bg-gray-800 p-8 lg:p-12">
      <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">
        {ABOUT_CONTENT.heading}
      </h2>
      
      <blockquote className="mb-6 border-l-4 border-remington-orange pl-4">
        <p className="mb-2 italic text-white/90">
          {ABOUT_CONTENT.quote.text}
        </p>
        <footer className="text-sm font-semibold text-white/70">
          — {ABOUT_CONTENT.quote.author}
        </footer>
      </blockquote>

      <p className="text-base leading-relaxed text-white/80 lg:text-lg">
        {ABOUT_CONTENT.description}
      </p>
    </div>
  );
}
