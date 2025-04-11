"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      className="relative w-full py-16 bg-cover bg-center text-white min-h-[500px]"
      style={{ backgroundImage: "url('/assets/who-we-are.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col  max-w-[550px]">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
                Who We Are
              </h2>
              <p className="text-[#D5D5D5] mb-6 text-[16px]">
                We are a dynamic platform dedicated to connecting people through
                personalized radio dedications. Our service provides a unique
                way for you to celebrate special moments, share heartfelt
                messages, and bring joy to your loved ones.
              </p>
            </div>
            <div>
              <Button
                className="bg-primary hover:bg-primary/90 text-white flex items-center  gap-3 h-[56px] w-[248px] rounded-lg transition-colors"
                asChild
              >
                <Link
                  href="#dedication-form"
                  className="text-[16px] font-medium"
                >
                  <span>Start Your Dedication</span>
                  <motion.div
                    className="w-[36px] h-[36px] bg-white flex justify-center items-center rounded-[8px] ml-2"
                    whileHover={{ x: 5 }}
                    animate={{ x: 0 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      duration: 0.6,
                    }}
                  >
                    <ArrowRight className="h-6 w-6 text-primary" />
                  </motion.div>
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-xl flex justify-center items-center">
              <Image
                src="/assets/wwr-right.jpeg"
                alt="Radio dedication"
                width={600}
                height={600}
                className="rounded-lg w-[570px] h-[380px] brightness-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
