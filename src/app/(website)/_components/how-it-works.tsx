import { Calendar, Mic, Lock, Radio } from "lucide-react";

export default function HowItWorks() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Choose Your Date",
      bgColor: "bg-[#00b8d4]",
      subTitle: "Select when you want your dedication",
    },
    {
      icon: <Mic className="h-8 w-8 text-white" />,
      title: "Record Messages",
      bgColor: "bg-[#9e4e4e]",
      subTitle: "Upload your voice or type your dedication",
    },
    {
      icon: <Lock className="h-8 w-8 text-white" />,
      title: "Secure Payment",
      bgColor: "bg-[#ff9057]",
      subTitle: "Choose your preferred payment method",
    },
    {
      icon: <Radio className="h-8 w-8 text-white" />,
      title: "On-Air",
      bgColor: "bg-[#ff5a79]",
      subTitle: "Select when you want your dedication ",
    },
  ];

  return (
    <section
      className="w-full py-16 bg-cover bg-center text-white h-auto md:h-[550px] relative"
      style={{ backgroundImage: "url('/assets/how-it-works.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="container relative z-10 flex flex-col items-center justify-center">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[40px] font-semibold mb-4">
            How It Works
          </h2>
          <p className="text-[16px] leading-[150%]">
            Four simple steps to share your dedication with the world
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#FFFFFF52] p-[24px] rounded-[16px] max-w-[258px]"
            >
              <div
                className={`${feature.bgColor} p-4 rounded-lg mb-4 flex items-center justify-center`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium">{feature.title}</h3>
              <p className="text-[16px] leading-[150%]">{feature.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
