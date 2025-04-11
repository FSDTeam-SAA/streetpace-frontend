"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      name: "Shara Chen",
      location: "Singapore",
      image: "/assets/avatar.jpeg",
      text: "I was able to surprise my parents with a dedication video for their 30th anniversary. The platform made it so easy to collect messages from family members across different countries.",
      rating: 5,
    },
    {
      name: "Andersion",
      location: "Canada",
      image: "/assets/avatar.jpeg",
      text: "The platform helped me organize a beautiful Diwali dedication combining messages from family members across three continents. It was magical!",
      rating: 5,
    },
    {
      name: "Waliams",
      location: "Newzeland",
      image: "/assets/avatar.jpeg",
      text: "Created a graduation dedication for my daughter that brought tears to her eyes. The cultural elements we could include made it extra special for our family celebration.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[40px] font-bold mb-4">
            Real Stories from Our Community
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover how people around the world are sharing their meaningful
            moments and creating lasting memories through heartfelt dedications
          </p>
        </div>

        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 select-none">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 m-2"
              >
                <Card className="border drop-shadow-md h-full max-w-[400px]">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full mr-4 w-16 h-16 object-cover"
                      />
                      <div>
                        <h3 className="font-bold text-lg">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative mr-2" />
            <CarouselNext className="relative ml-2" />
          </div> */}
        </Carousel>
      </div>
    </section>
  );
}
