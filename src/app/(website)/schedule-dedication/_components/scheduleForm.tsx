"use client"

import type React from "react"

import { useState, useRef } from "react"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ArrowRight, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { motion } from "framer-motion"
import { FaMusic } from "react-icons/fa6"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  phoneNumber: z.string().min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  recipientName: z.string().min(2, { message: "Recipient name is required" }),
  preferredDate: z.string().min(1, { message: "Date is required" }),
  preferredTime: z.string().min(1, { message: "Time is required" }),
})

export default function ScheduleForm() {
  const [audioFile, setAudioFile] = useState<File | null>(null)
  const [songLink, setSongLink] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioSrc, setAudioSrc] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

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
  })

  // Handle file upload and create audio URL
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setAudioFile(file)

    if (file) {
      // Create a URL for the audio file
      const url = URL.createObjectURL(file)
      setAudioSrc(url)

      // Set a small timeout to ensure the audio element is properly initialized
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current
            .play()
            .then(() => {
              setIsPlaying(true)
            })
            .catch((error) => {
              console.error("Error playing audio automatically:", error)
            })
        }
      }, 100)
    } else {
      setAudioSrc(null)
      setIsPlaying(false)
    }
  }

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values, audioFile, songLink)
    // Handle form submission
    alert("Form submitted successfully!")
  }

  return (
    <div
      id="dedication-form"
      className="max-w-full mx-auto bg-[#B27568] p-4 sm:p-6 md:p-8 lg:p-12 rounded-[16px] text-[#FFFFFF] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
    >
      <div className="w-full lg:w-[75%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input className="bg-white" placeholder="Enter Your Name" {...field} />
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
                      <Input className="bg-white" placeholder="+0000 000 0000 0000" {...field} />
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
                    <Input className="bg-white" placeholder="Enter Your Mail Address" {...field} />
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
                    <Input className="bg-white" placeholder="Enter the Name of listenner.." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div>
              <Label>Upload Your Dedication</Label>
              <div className="mt-2 border border-gray-300 rounded-md p-3 sm:p-4 md:p-6 text-center bg-white">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Drag and drop your audio file</p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("file-upload")?.click()}
                  className="text-xs sm:text-sm border-2 text-[#787878]"
                >
                  Choose File...
                </Button>
                <input
                  className="bg-white hidden"
                  id="file-upload"
                  type="file"
                  accept="audio/*"
                  onChange={handleFileUpload}
                />
                {audioFile && <p className="mt-2 text-xs sm:text-sm text-green-600">File selected: {audioFile.name}</p>}

                <div className="flex items-center my-3 sm:my-4">
                  <div className="flex-grow h-px bg-gray-300"></div>
                  <span className="px-2 sm:px-3 text-xs sm:text-sm text-gray-500">Or</span>
                  <div className="flex-grow h-px bg-gray-300"></div>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 mb-2">Drag and drop your Song Link</p>
                <Input
                  className="bg-white text-xs sm:text-sm"
                  placeholder="Upload Link..."
                  value={songLink}
                  onChange={(e) => setSongLink(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>Upload Your voice text message</Label>
              <div className="mt-2 border border-gray-300 rounded-md p-3 sm:p-4 md:p-6 text-center bg-white">
                <p className="text-xs sm:text-sm text-gray-500 mb-2">Generate voice-text message</p>
                <div className="flex justify-center">
                  <Button type="button" variant="outline" className="flex items-center gap-2 text-xs sm:text-sm">
                    <Mic className="h-3 w-3 sm:h-4 sm:w-4 text-[#787878]" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prefered Date</FormLabel>
                    <FormControl>
                      <Input className="bg-white text-[#787878]" type="date" placeholder="mm/dd/yy" {...field} />
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
                      <Input className="bg-white text-[#787878]" type="time" placeholder="00.00am-00.00pm" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex justify-center items-center mt-5">
              <Button
                className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2 sm:gap-3 h-[40px] sm:h-[48px] md:h-[56px] w-full sm:w-[200px] md:w-[248px] rounded-lg transition-colors"
                type="submit"
              >
                <span className="text-sm sm:text-[16px] font-medium">Start Your Dedication</span>
                <motion.div
                  className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] md:w-[36px] md:h-[36px] bg-white flex justify-center items-center rounded-[8px] ml-1 sm:ml-2"
                  whileHover={{ x: 5 }}
                  animate={{ x: 0 }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                    duration: 0.6,
                  }}
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-primary" />
                </motion.div>
              </Button>
            </div>
          </form>
        </Form>
      </div>
      <div className="w-full lg:w-[22%] bg-white py-4 px-4 sm:px-6 md:px-8 rounded-[16px] text-[#131313]">
        <h5 className="text-xl sm:text-[24px] pb-3 sm:pb-4">Now Playing</h5>
        {audioSrc ? (
          <>
            <div className="flex items-center gap-3 sm:gap-5">
              <button onClick={togglePlayPause} className="flex items-center justify-center">
                {isPlaying ? (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f0f0f0] rounded-md flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="4" width="4" height="16" rx="1" fill="#000000" />
                      <rect x="14" y="4" width="4" height="16" rx="1" fill="#000000" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f0f0f0] rounded-md flex items-center justify-center">
                    <FaMusic className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                )}
              </button>
              <div>
                <h3 className="text-sm sm:text-[16px] font-medium">
                  {audioFile ? audioFile.name.substring(0, 20) : "Birthday Message"}
                </h3>
                <p className="text-[#787878] text-xs sm:text-[14px] font-medium">
                  From: {form.getValues().fullName || "Nikki"} to {form.getValues().recipientName || "Zara"}
                </p>
              </div>
            </div>
            <audio ref={audioRef} src={audioSrc} onEnded={() => setIsPlaying(false)} className="hidden" />
          </>
        ) : (
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#f0f0f0] rounded-md flex items-center justify-center">
              <FaMusic className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <h3 className="text-sm sm:text-[16px] font-medium">Birthday Message</h3>
              <p className="text-[#787878] text-xs sm:text-[14px] font-medium">From: Nikki to Zara</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
