import HeroCarousel from "../components/ui/HeroCarousel";
import Button from "@/components/ui/Button";
import NewsCarousel from "@/components/ui/NewsCarousel";
import { client } from "../sanity/lib/client";
import { newsPostsQuery } from "../../lib/queries";
import { urlFor } from "../sanity/lib/image";
import { getPageData } from "../../lib/data";
import { HomePageData } from "../../lib/types";

export const revalidate = 60; // Revalidate this page every 60 seconds

type NewsPost = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  mainImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };
  excerpt?: string;
  authorName?: string;
  categories?: string[];
};

type NewsCard = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
};

export default async function Home() {
  // Load page data from JSON
  const pageData: HomePageData = await getPageData<HomePageData>('home');
  
  // Fetch news posts from Sanity
  const newsPosts = await client.fetch<NewsPost[]>(newsPostsQuery) || [];
  
  // Transform Sanity posts to NewsCard format
  const newsCards: NewsCard[] = newsPosts
    .filter((post) => post && post.slug && post.slug.current) // Filter out invalid posts
    .map((post, index) => ({
      id: index + 1,
      title: post.title || "Untitled",
      excerpt: post.excerpt || "",
      image: post.mainImage 
        ? urlFor(post.mainImage).width(800).height(600).url() 
        : "/rect-img-5.jpg", // fallback image
      slug: post.slug.current,
    }));
  return (
    <>
      <HeroCarousel slides={pageData.hero.slides} />
      
      {/* About Us section with CTA leading to about us page */}
      <section id="about-section" className="w-full bg-primary-dark bg-fixed py-20 mt-30">
        <div className="w-[80%] flex flex-col md:flex-row gap-4 justify-between mx-auto px-10 min-w-48">
          <div className="flex flex-col gap-8 w-full md:w-[50%] order-2 self-center" >
            <h1 className="text-4xl font-bold text-white">{pageData.aboutSection.title}</h1>
            <p className="text-lg text-gray-300 text-wrap mb-3">{pageData.aboutSection.description}</p>

            <div className=" flex justify-center md:align-left md:w-[30%]"><Button text={pageData.aboutSection.buttonText} href={pageData.aboutSection.buttonHref}/></div>
            
          </div>
          <div className="order-1 md:order-2">
            <img src={pageData.aboutSection.image} alt=""  id="about_img"/>
          </div>
        </div>

      </section>

      {/* News Section with CTA  leading to blog */}
      <section className="w-full flex flex-col  text-center py-4 pt-10">
        <h1 className="mt-5 text-3xl font-bold text-primary-dark">{pageData.newsSection.title}</h1>

        <div className="w-full mx-auto my-10 bg-gray-300 pb-10">
          <NewsCarousel cards={newsCards} />
        </div>

      </section>

      
      {/* Counselling section with CTA button leading to contact page */}
      <section className="w-full mt-20 bg-gray-300">
    

      </section>

      {/* Leaders section with cta leading to leaders page */}


      {/* Community section leading to member page */}
      <section className=" relative w-full flex text-white py-10 pt-10 bg-fixed bg-cover my-10 z-0" style={{ backgroundImage: `url(${pageData.communitySection.backgroundImage})` }}>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark to-transparent pointer-events-none"/>

      {/* Content */}
        <div className="relative flex flex-col gap-10 w-full text-center md:text-left md:w-[60%] md:px-20">

          <h1 className="text-4xl font-bold">{pageData.communitySection.title}</h1>

          <p className="w-[95%]">{pageData.communitySection.description}</p>

          <div className=" md:align-left md:w-[30%]"><Button text={pageData.communitySection.buttonText} href={pageData.communitySection.buttonHref} /></div>
          
        </div>


      </section>

      <section className="w-full flex flex-col justify-center mx-auto text-center" id='live'>
        <h1 className="text-bold text-3xl text-primary my-4">{pageData.liveSection.title}</h1>
        {pageData.liveSection.services.map((service, index) => (
          <a key={index} href={service.href} className="text-primary block">{service.text}</a>
        ))}
        <iframe src="https://theencountercity.mixlr.com/embed" frameBorder="0" scrolling="no" height="200px" width="100%" className="mt-3"></iframe>
      </section>

    </>
  );
}
