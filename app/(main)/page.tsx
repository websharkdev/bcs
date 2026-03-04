import { GContactUs } from "@/components/general/contacts";
import { MAboutUs, MB2B, MBenefits, MFAQ, MHome, MReviews, MServices } from "./(components)";
import { ServiceType } from "@/components/general/contacts/schema";

export default function Home() {
    const sections = [
        {
            id: 'home',
            component: <MHome />
        },
        {
            id: 'services',
            component: <MServices />
        },
        {
            id: 'benefits',
            component: <MBenefits />
        },
        {
            id: 'reviews',
            component: <MReviews />
        },
        {
            id: 'b2b',
            component: <MB2B />
        },
        {
            id: 'about-us',
            component: <MAboutUs />
        },
        {
            id: 'faq',
            component: <MFAQ />
        },
        {
            id: 'contact-us',
            component: <GContactUs type={ServiceType.MAINTENANCE} minHeight="lg:min-h-[550px]" />
        }
    ]

  return (
    <div className="flex flex-col gap-10 lg:gap-20 lg:px-10 2xl:px-20">
        {sections.map((section) => (
            <section key={section.id} id={section.id}>
                {section.component}
            </section>
        ))}
    </div>
  );
}
