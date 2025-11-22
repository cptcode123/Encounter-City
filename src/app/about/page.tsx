import HeroStatic from "@/components/ui/HeroStatic";
import { Rocket, Eye, Church, HeartHandshake, PersonStanding, Heart } from "lucide-react";
import { getPageData } from "../../../lib/data";

const iconMap: Record<string, any> = {
    Rocket,
    Eye,
    Church,
    HeartHandshake,
    PersonStanding,
    Heart,
};

export default async function AboutPage() {
    const pageData = await getPageData('about');

    const values = pageData.coreValues.values.map((value: any) => ({
        name: value.name,
        icon: iconMap[value.icon],
    }));

    const leadership = pageData.leadership.leaders;

    const MissionIcon = iconMap[pageData.mission.icon];
    const VisionIcon = iconMap[pageData.vision.icon];
    const MinistryIcon = iconMap[pageData.ministry.icon];

    return (
        <div className="w-[100%] mx-auto">
            <div className="w-[100%] h-auto">
                <HeroStatic title={pageData.hero.title} subtitle={pageData.hero.subtitle} image={pageData.hero.image}/>
            </div>
            <div className="w-full flex flex-col items-center justify-stretch py-20 mx-auto gap-20">
                <section className="flex flex-col md:flex-row w-full gap-8 p-15 bg-primary shadow-lg " id='mission' >
                    <div className="order-1 flex flex-col gap-3 md:w-[40%] items-center justify-center py-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><MissionIcon size={120}/></div>
                    </div>
                    <div className="order-2 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5 py-10">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">{pageData.mission.title}</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            {pageData.mission.description}
                        </p>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row w-full my-5 gap-8 p-15 bg-primary shadow-lg" id='vision' >
                    <div className="order-1 md:order-2 flex flex-col gap-3 md:w-[40%] items-center justify-center py-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><VisionIcon size={120}/></div>
                    </div>
                    <div className="order-2 md:order-1 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5 py-10">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">{pageData.vision.title}</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            {pageData.vision.description}
                        </p>
                    </div>
                </section>
                <section className="flex flex-col md:flex-row w-full my-5 gap-8 p-15 bg-primary shadow-lg" id='ministry' >
                    <div className="order-1 flex flex-col gap-3 md:w-[40%] items-center justify-center py-10">
                        <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark"><MinistryIcon size={120}/></div>
                    </div>
                    <div className="order-2 text-center md:w-[60%] mx-10 flex flex-col items-center gap-5 py-10">
                        <h2 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6]">{pageData.ministry.title}</h2>
                        <p className="text-xl leading-relaxed text-bold text-wrap text-[#CCb3E6]">
                            {pageData.ministry.description}
                        </p>
                    </div>
                </section>

                <section className=" flex flex-col gap-8 p-15 bg-primary w-full my-5 align-center">
                    <h1 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6] text-center">{pageData.coreValues.title}</h1>
                    
                    <div className="flex flex-col md:flex-row gap-20 p-10 w-full justify-center items-center">
                         {values.map(({name, icon: Icon}, key ) => (
                            <div key={key} className="flex flex-col items-center justify-center gap-5">
                            <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark">
                                <Icon size={120}/>
                            </div>
                            <h3 className="text-2xl font-bold text-[#CCb3E6]">{name}</h3>   
                            </div>                 
                    ))}
                                             
                    </div>
                </section>
                <section className=" flex flex-col gap-8 p-15 bg-primary w-full my-5 align-center" id='leadership'>
                    <h1 className="text-4xl font-extrabold mx-auto mt-15 text-[#CCb3E6] text-center">{pageData.leadership.title}</h1>
                    <div className="flex flex-col md:flex-row gap-20 p-10 w-full justify-center items-center">
                        {leadership.map(({name, role, image, bio}, key) => (
                            <div key={key} className="flex flex-col items-center justify-center gap-5">
                                <div className="mx-auto my-2 p-6 bg-primary rounded-full shadow-2xl text-primary-dark border-8 border-primary-dark">
                                    <img src={image} alt={name} className="w-32 h-32 rounded-full"/>
                                </div>
                                <h3 className="text-2xl font-bold text-[#CCb3E6]">{name}</h3>
                                <p className="text-lg text-[#CCb3E6]">{role}</p>
                                <p className="text-md text-center text-[#CCb3E6]">{bio}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            
        </div>
    )
}