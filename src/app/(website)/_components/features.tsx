import { Calendar, Mic, Lock, Radio } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Choose Your Date",
      bgColor: "bg-[#00b8d4]",
    },
    {
      icon: <Mic className="h-8 w-8 text-white" />,
      title: "Record Messages",
      bgColor: "bg-[#9e4e4e]",
    },
    {
      icon: <Lock className="h-8 w-8 text-white" />,
      title: "Secure Payment",
      bgColor: "bg-[#ff9057]",
    },
    {
      icon: <Radio className="h-8 w-8 text-white" />,
      title: "On-Air",
      bgColor: "bg-[#ff5a79]",
    },
  ];

  return (
    <section className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div
                className={`${feature.bgColor} p-4 rounded-lg mb-4 flex items-center justify-center`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-medium text-gray-900">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
