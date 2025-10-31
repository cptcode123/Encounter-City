"use client";

type ServiceCardProps = {
  title: string;
  image: string;
  onClick?: () => void;
  href?: string;
};

export  function ServiceCard({ title, image, onClick, href }: ServiceCardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      onClick={onClick}
      className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Overlay for readability */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
      </div>
    </Wrapper>
  );
}

