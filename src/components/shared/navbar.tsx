"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contract", path: "/contract" },
  { name: "Payment", path: "/payment" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full  sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center py-2">
            <Image src="/assets/logo.png" alt="Logo" width={180} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`text-[18px] font-[400]  transition-colors ${
                pathname === item.path
                  ? "text-[#9e4e4e] font-semibold"
                  : "text-gray-700 hover:text-[#9e4e4e]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button className="bg-[#8C311E] hover:bg-[#8a3e3e] text-white px-6 rounded-md">
            Log In
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/streetpace-logo.png"
                    alt="Logo"
                    width={150}
                    height={40}
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`text-lg py-2 ${
                      pathname === item.path
                        ? "text-[#9e4e4e] font-semibold"
                        : "text-gray-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button className="bg-[#9e4e4e] hover:bg-[#8a3e3e] text-white w-full mt-4">
                  Log In
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
