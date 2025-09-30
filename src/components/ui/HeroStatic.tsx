import Image from "next/image";

interface HeroStaticProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function HeroStatic({ title, subtitle, image }: HeroStaticProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt="Hero background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay tint */}
        <div className="absolute inset-0 bg-purple-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
