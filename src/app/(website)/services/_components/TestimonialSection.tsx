import Image from 'next/image'
import React from 'react'
import image from "@/../../public/assets/testimonialSection.png"
import image2 from "@/../../public/assets/TestimonialSection-icon.png"
import image3 from "@/../../public/assets/small-icon.png"

const TestimonialSection = () => {
    return (
        <section>
            <div className="container px-4 py-16 md:py-24 lg:py-[100px]">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

                    {/* Left image */}
                    <div className="w-full lg:w-[43%]">
                        <Image
                            src={image}
                            alt="People looking at a smartphone together"
                            width={1000}
                            height={1000}
                            className="w-full h-auto  object-cover"
                        />
                    </div>

                    {/* Right content */}
                    <div className="w-full lg:w-[46%]">
                        <div className="w-[65px] h-[65px] sm:w-[85px] sm:h-[85px] mt-8 sm:mt-[66px]">
                            <Image
                                src={image2}
                                alt="Testimonial icon"
                                width={1000}
                                height={1000}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        <p className="text-sm sm:text-base text-[#787878] font-normal leading-relaxed sm:leading-[190%] mt-8 sm:mt-[100px] max-w-full sm:max-w-[535px]">
                            Our service is designed to provide fast, reliable, and personalized solutions that meet your specific needs. Whether it&apos;s expert advice, customer support, or product delivery, we focus on ensuring customer satisfaction at every step. With a commitment to quality and efficiency, our service aims to create seamless experiences and build long-lasting relationships.
                        </p>

                        {/* Person info */}
                        <div className="flex items-center gap-4 mt-8 sm:mt-[100px]">
                            <div className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
                                <Image
                                    src={image3}
                                    alt="Avatar"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                            <div>
                                <p className="font-medium text-[18px] text-[#2A2A2A]">Alberto Wilam</p>
                                <p className="text-base text-[#606060]">CEO</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default TestimonialSection
