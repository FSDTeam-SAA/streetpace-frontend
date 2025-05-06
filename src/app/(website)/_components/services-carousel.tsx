"use client";

import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ServicesCarousel() {
  const services = [
    {
      title: "Your Custom Shout & Spin Greeting",
      description: "Personsmessage tailored to recipient for special occasion.",
      price: "199.00$",
      rating: "4.7",
      image: "/assets/c1.jpeg",
    },
    {
      title: "Recording Session something truly special.",
      description:
        "Listeners or speakers perform which they want to send. Listeners or speakers perform which they want to send. Listeners or speakers perform which they want to send. Listeners or speakers perform which they want to send. Listeners or speakers perform which they want to send.",
      price: "199.00$",
      rating: "4.6",
      image: "/assets/c1.jpeg",
    },
    {
      title: "Musical Dedication lyric speaks.",
      description: "Music is specifically Explore to dedicated to someone.",
      price: "199.00$",
      rating: "4.8",
      image: "/assets/c1.jpeg",
    },
    {
      title: "Radio Shoutout",
      description:
        "Big shoutouts for special listeners or events happening right now.",
      price: "199.00$",
      rating: "4.9",
      image: "/assets/c1.jpeg",
    },
    {
      title: "Recording Session something truly special.",
      description: "Listeners or speakers perform which they want to send.",
      price: "199.00$",
      rating: "4.6",
      image: "/assets/c1.jpeg",
    },
    {
      title: "Musical Dedication lyric speaks.",
      description: "Music is specifically Explore to dedicated to someone.",
      price: "199.00$",
      rating: "4.8",
      image: "/assets/c1.jpeg",
    },
    {
      title: "Radio Shoutout",
      description:
        "Big shoutouts for special listeners or events happening right now.",
      price: "199.00$",
      rating: "4.9",
      image: "/assets/c1.jpeg",
    },
  ];

  return (
    <section id="services" className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[40px] font-semibold mb-4 text-[#131313]">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We offer a range of professional and reliable services tailored to
            meet your needs. From start to finish, we focus on quality,
            efficiency, and customer satisfaction.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
          }}
          className="w-full select-none"
        >
          <CarouselContent className="-ml-4">
            {services.map((service, index) => (
              <CarouselItem
                key={index}
                className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-[28.5%]"
              >
                <Card className="overflow-hidden border rounded-lg shadow transition-all duration-300 hover:bg-[#8C311ECC] hover:text-white group">
                  <div className="relative h-[280px] w-full">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-4 min-h-[190px]">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-lg font-bold line-clamp-2">
                        {service.title}
                      </h3>
                      <div className="flex items-center">
                        <span className="font-bold mr-1">{service.rating}</span>
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3 transition-all duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                    <p className="font-semibold text-sm">
                      Price:{" "}
                      <span className="text-primary transition-all duration-300 group-hover:text-white">
                        {service.price}
                      </span>
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-between">
                    <Button
                      size="sm"
                      className="bg-primary transition-all duration-300 group-hover:bg-white group-hover:text-primary text-[16px]"
                    >
                      Book Now
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="transition-all duration-300 flex items-center gap-1 text-[16px] border border-[#2A2A2A] group-hover:border-white  text-sm group-hover:bg-[#8C311ECC] group-hover:text-white"
                    >
                      View Details <ArrowRight className="h-3 w-3" />
                    </Button>
                  </CardFooter>
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
