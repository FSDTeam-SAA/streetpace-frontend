import {
  MessageSquare,
  Users2,
  File,
  FilePenLine,
  Folder,
  Files,
} from "lucide-react";
import Link from "next/link";
import icon1 from "@/../../public/assets/icon1.png";

export default function ServicesGrid() {
  const services = [
    {
      title: "Customer Support",
      description:
        "Its goal is to ensure customer satisfaction by offering timely and helpful solution Through The cell phone number.",
      icon: <Users2 className="h-6 w-6 text-white" />,
      iconBg: "bg-cyan-400",
      href: "#",
    },
    {
      title: "Convert Your File",
      description:
        "This service is commonly offered on websites to help users make their files compatible with software or devices.",
      icon: <File className="h-6 w-6 text-white" />,
        iconBg: "bg-[#8C311ECC]",
      href: "#",
    },
    {
      title: "Virtual Assistance",
      description:
        "It helps with tasks such as scheduling, customer service, data entry, email management, and more",
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      iconBg: "bg-stone-400",
      href: "#",
    },
    {
      title: "Content moderation",
      description:
        "It is the process of monitoring and managing user-generated content on websites, social media platforms.",
      icon: <FilePenLine className="h-6 w-6 text-white" />,
      iconBg: "bg-green-500",
      href: "#",
    },
    {
      title: "Data Management",
      description:
        "It refers to the process of collecting, organizing, storing, maintaining, and securing data within an organization.",
      icon: <Folder className="h-6 w-6 text-white" />,
      iconBg: "bg-emerald-600",
      href: "#",
    },
    {
      title: "Forums & Webinar",
      description:
        "these are popular tools for virtual engagement, learning, and collaboration with our clients, including service.",
      icon: <Files className="h-6 w-6 text-white" />,
      iconBg: "bg-rose-400",
      href: "#",
    },
  ];

  return (
    <div className="container mt-[78px] mb-[100px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            style={{ boxShadow: "0px 0px 56px 0px #0000001F" }}
            className="bg-white rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div
              className={`${service.iconBg} w-14 h-14 rounded-teardrop flex items-center justify-center mb-4 rounded-tl-full rounded-br-full rounded-bl-full`}
            >
              {service.icon}
            </div>
            <h3 className="text-[24px] font-medium text-[#2A2A2A] mb-3">
              {service.title}
            </h3>
                <p className="text-[#787878] text-base leading-[150%] mb-6 h-24">{service.description}</p>
            <Link
              href={service.href}
              className="text-[16px] font-bold inline-block border border-[#131313] text-[#5A5A5A] px-6 py-2 rounded-[8px]  transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
