import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import Link from "next/link";


export default function OurOfferings() {
  const features = [
    {
      id: 1,
      title: "Custom message or greeting",
      description:
        "Create a custom message or greeting to celebrate, or appreciate someone in a fun and meaningful way.",
      image: "/assets/card-image-1.png",
      buttonText: "Get Started",
      buttonLink: "/custom-message",
    },
    {
      id: 2,
      title: "Proposal to someone",
      description:
        "It's a way of letting someone know that you see a future with them and wish to take the next step together",
      image: "/assets/card-image-2.png",
      buttonText: "Get Started",
      buttonLink: "/proposal",
    },
    {
      id: 3,
      title: "Share your experience",
      description:
        "They stand by you through ups and downs, share your laughter, and understand you like no one else",
      image: "/assets/card-image-3.png",
      buttonText: "Get Started",
      buttonLink: "/share-experience",
    },
  ];

  return (
    <div className="bg-[#99596A66]">
      <div className=" container pb-[100px]">
        <PageHeader
          titile="Our Offerings"
          subtitle="Our Services are designed to meet a wide range of customer needs with quality and efficiency. We offer personalized solutions across various industries,"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-[56px]">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="relative overflow-hidden rounded-lg border border-[white]  flex flex-col h-full"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-[24px] font-medium text-[#2A2A2A] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#787878] text-base leading-[150%] mb-6 flex-grow">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <Link
                    href={feature.buttonLink}
                              className="inline-flex items-center justify-center px-6 py-3 rounded-md transition-colors border border-[#131313] hover:bg-[#8C311ECC] hover:border-transparent hover:text-white duration-300  text-base font-bold text-[#5A5A5A]"
                  >
                    {feature.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
