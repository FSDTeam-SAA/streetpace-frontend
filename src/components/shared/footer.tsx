import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f2e8e3] text-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Image
                src="/streetpace-logo.png"
                alt="Streetpace Pro Logo"
                width={200}
                height={80}
              />
            </div>
            <p className="text-sm">
              "Connecting hearts through meaningful dedications, fostering
              deeper bonds, creating lasting memories, and celebrating the
              beauty of shared emotions."
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#9e4e4e] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#9e4e4e] transition-colors"
                >
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#9e4e4e] transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#9e4e4e] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contract</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>Example@Gmail.Com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>818-209-9166</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <p className="mb-4">
              Connect With Us On Social Media And Stay In The Loop:
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-[#9e4e4e] transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#9e4e4e] transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#9e4e4e] transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-[#9e4e4e] transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 text-center">
          <p>© 2025 The Streetpace Pro. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
