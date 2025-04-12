"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { motion } from "framer-motion"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  message: z.string().min(5, { message: "Message is required" }),
})

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    // Handle form submission
    alert("Form submitted successfully!")
  }

  return (
    <section className="w-full pt-9 pb-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="+0000-0000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Write Your Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Write your message here..."
                        className="min-h-[120px] resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-center items-center mt-6">
                <Button
                  className="bg-[#8B3A21] hover:bg-[#8B3A21]/90 text-white flex items-center gap-3 h-[48px] px-6 rounded-lg transition-colors"
                  type="submit"
                >
                  <span className="text-[16px] font-medium">Send Your Message</span>
                  <motion.div
                    className="w-[28px] h-[28px] bg-white flex justify-center items-center rounded-[8px]"
                    whileHover={{ x: 5 }}
                    animate={{ x: 0 }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      duration: 0.6,
                    }}
                  >
                    <ArrowRight className="h-4 w-4 text-[#8B3A21]" />
                  </motion.div>
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}
