"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-16 bg-[url('/assets/hero-sec.jpeg')] bg-cover bg-center">
      <div className="container mx-auto px-4 flex flex-col items-center text-center h-[500px]">
        <div className=" mx-auto mb-8">
          <Image
            src="/assets/hero-logo.png"
            alt="Shout & Spin Logo"
            width={200}
            height={200}
            className="mx-auto mb-6"
          />
          <div className="text-lg text-[32px] md:text-[48px] leading-[120%] font-[600] text-white mb-8">
            <div>Welcome to SHOUT & SPAIN</div> “Your On-Air Special Dedication
            Hotline”
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Button
                variant="outline"
                className="border-[#606060] h-[56px] w-[248px] bg-[#FFFFFF1F] hover:bg-[#FFFFFF1F]/10 text-[16px] text-white hover:text-white flex items-center "
              >
                <span>Call Now</span>
                <motion.div
                  whileHover={{ x: 5 }}
                  animate={{ x: 0 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 0.6,
                  }}
                >
                  <PhoneCall className="h-6 w-6 ml-3" />
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
