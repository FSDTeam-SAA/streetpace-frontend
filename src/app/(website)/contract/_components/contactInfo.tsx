import { Calendar, Earth, MailOpen, PhoneCall } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

export default function ContactInfo() {
  return (
    <section className="w-full text-gray-800">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-[55%]">
            <div className="pb-6 border-b border-[#787878]">
              <h2 className="font-semibold text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] pb-3 md:pb-4">
                Connecting Near & Fear
              </h2>
              <p className="text-sm sm:text-base text-[#787878]">
                Explores the relationship between comfort and fear through design. It blends contrasting visual element
                to create an interactive experience that highlights the emotional tension between these states.
              </p>
            </div>
            <div className="pt-6 md:pt-10">
              <h2 className="text-[#2A2A2A] text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-semibold pb-4 md:pb-8">
                Headquaters
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                <div className="p-4 md:p-5 shadow-[0px_0px_40px_0px_#00000020] md:shadow-[0px_0px_80px_0px_#00000029] rounded-[16px]">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center sm:items-start md:items-center">
                    <div className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border border-[#000000] flex justify-center items-center flex-shrink-0">
                      <PhoneCall className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-xl md:text-2xl font-medium pb-2 md:pb-4">Contract Us</h5>
                      <p className="text-sm md:text-base pb-2">818-209-9166</p>
                      <Link href="#" className="text-sm md:text-base font-medium underline">
                        View On Other Branch
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 shadow-[0px_0px_40px_0px_#00000020] md:shadow-[0px_0px_80px_0px_#00000029] rounded-[16px]">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center sm:items-start md:items-center">
                    <div className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border border-[#000000] flex justify-center items-center flex-shrink-0">
                      <Earth className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-xl md:text-2xl font-medium pb-2 md:pb-4">Visit On Us</h5>
                      <p className="text-sm md:text-base pb-2">24/31 Francisco USA</p>
                      <Link href="#" className="text-sm md:text-base font-medium underline">
                        View On Google Maps
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 shadow-[0px_0px_40px_0px_#00000020] md:shadow-[0px_0px_80px_0px_#00000029] rounded-[16px]">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center sm:items-start md:items-center">
                    <div className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border border-[#000000] flex justify-center items-center flex-shrink-0">
                      <Calendar className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-xl md:text-2xl font-medium pb-2 md:pb-4">Working Hours</h5>
                      <p className="text-sm md:text-base pb-2">Sun: 10 am - 5pm</p>
                      <Link href="#" className="text-sm md:text-base font-medium underline">
                        WED: 10am- 8pm
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 shadow-[0px_0px_40px_0px_#00000020] md:shadow-[0px_0px_80px_0px_#00000029] rounded-[16px]">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 items-center sm:items-start md:items-center">
                    <div className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full border border-[#000000] flex justify-center items-center flex-shrink-0">
                      <MailOpen className="h-5 w-5 md:h-6 md:w-6" />
                    </div>
                    <div className="text-center sm:text-left">
                      <h5 className="text-xl md:text-2xl font-medium pb-2 md:pb-4">Email Us</h5>
                      <p className="text-sm md:text-base pb-2">example@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[35%] mt-8 lg:mt-0">
            <div className="text-center p-6 md:p-8 rounded-[16px] bg-[#8C311ECC] text-[#F2F2F2] opacity-80">
              <h3 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[40px] font-semibold pb-3 md:pb-4">
                Say Hello
              </h3>
              <p className="text-sm md:text-base text-[#D9D9D9] pb-6 md:pb-[46px]">
                A simple word with a powerful impact. It opens doors, starts conversations, and builds connections.
              </p>
              <div className="px-4 sm:px-8 md:px-0">
                <Image
                  src="/assets/contactpage/talking.png"
                  alt="Talking with phone"
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="flex gap-4 items-center justify-center lg:justify-start mt-6 md:mt-8">
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border flex justify-center items-center">
                  <Link href="#">
                    <FaFacebookF className="text-lg md:text-[25px]" />
                  </Link>
                </div>
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border flex justify-center items-center">
                  <Link href="#">
                    <FaXTwitter className="text-lg md:text-[25px]" />
                  </Link>
                </div>
                <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full border flex justify-center items-center">
                  <Link href="#">
                    <FaInstagram className="text-lg md:text-[25px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-8 mt-12 md:mt-16 lg:mt-24">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-center md:w-2/5">
            <Image
              src="/assets/contactpage/time.png"
              alt="24 / 7 service time"
              width={500}
              height={500}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
            <h4 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-center md:text-left">
              We Are Here To Provide 24X7 Support
            </h4>
          </div>
          <div className="md:w-2/5">
            <p className="text-sm md:text-base text-[#787878] text-center md:text-left">
              Our dedicated team is available around the clock to assist you whenever you need help. With 24/7 support,
              we ensure that your concerns are addressed promptly and effectively, providing reliable solutions at any
              time of day or night.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
