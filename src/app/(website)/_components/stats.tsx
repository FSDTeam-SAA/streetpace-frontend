import { HandHeart, Globe, Star } from "lucide-react";

export default function Stats() {
  return (
    <section className="w-full py-12 bg-[#8C311ECC] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
          <div className="border border-white/20 rounded-xl p-4 flex flex-col items-center text-center max-w-[230px] justify-self-end">
            <HandHeart className="h-6 w-6 mb-2" />
            <h2 className="text-3xl font-bold mb-1">50,000+</h2>
            <p className="text-white/80 text-sm">Dedications Sent</p>
          </div>

          <div className="border border-white/20 rounded-xl p-4 flex flex-col items-center text-center max-w-[230px] justify-self-center">
            <Globe className="h-6 w-6 mb-2" />
            <h2 className="text-3xl font-bold mb-1">100+</h2>
            <p className="text-white/80 text-sm">Countries Reached</p>
          </div>

          <div className="border border-white/20 rounded-xl p-4 flex flex-col items-center text-center max-w-[230px] justify-self-start">
            <Star className="h-6 w-6 mb-2" />
            <h2 className="text-3xl font-bold mb-1">4.8/5</h2>
            <p className="text-white/80 text-sm">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
