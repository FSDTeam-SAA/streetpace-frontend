"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowRight, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  phoneNumber: z
    .string()
    .min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  recipientName: z.string().min(2, { message: "Recipient name is required" }),
  preferredDate: z.string().min(1, { message: "Date is required" }),
  preferredTime: z.string().min(1, { message: "Time is required" }),
});

export default function DedicationForm() {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [songLink, setSongLink] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      recipientName: "",
      preferredDate: "",
      preferredTime: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, audioFile, songLink);
    // Handle form submission
    alert("Form submitted successfully!");
  }

  return (
    <section id="dedication-form" className="w-full py-16 bg-white relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px]">
          <Image
            src="/assets/shout-bg.png"
            alt="Background Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px]">
          <Image
            src="/assets/shout-bg.png"
            alt="Background Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Make Your Dedication
          </h2>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+0000 000 0000 0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Mail Address" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="recipientName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Recipient Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the Name of listenner.."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Label>Upload Your Dedication</Label>
                <div className="mt-2 border border-gray-300 rounded-md p-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Drag and drop your audio file
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      document.getElementById("file-upload")?.click()
                    }
                    className="text-sm"
                  >
                    Choose File...
                  </Button>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    accept="audio/*"
                    onChange={(e) => setAudioFile(e.target.files?.[0] || null)}
                  />
                  {audioFile && (
                    <p className="mt-2 text-sm text-green-600">
                      File selected: {audioFile.name}
                    </p>
                  )}

                  <div className="flex items-center my-4">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-3 text-sm text-gray-500">Or</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                  </div>

                  <p className="text-sm text-gray-500 mb-2">
                    Drag and drop your Song Link
                  </p>
                  <Input
                    placeholder="Upload Link..."
                    value={songLink}
                    onChange={(e) => setSongLink(e.target.value)}
                    className="text-sm"
                  />
                </div>
              </div>

              <div>
                <Label>Upload Your voice text message</Label>
                <div className="mt-2 border border-gray-300 rounded-md p-6 text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Generate voice-text message
                  </p>
                  <div className="flex justify-center">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex items-center gap-2 text-sm"
                    >
                      <Mic className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="preferredDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prefered Date</FormLabel>
                      <FormControl>
                        <Input type="date" placeholder="mm/dd/yy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="preferredTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Prefered Air Time</FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          placeholder="00.00am-00.00pm"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center items-center mt-5">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white flex items-center  gap-3 h-[56px] w-[248px] rounded-lg transition-colors"
                  type="submit"
                >
                  <span className="text-[16px] font-medium">
                    Start Your Dedication
                  </span>
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
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
