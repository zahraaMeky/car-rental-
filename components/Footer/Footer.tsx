import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="footer__rights flex flex-col items-center md:items-start mb-6 md:mb-0 ">
          <Image src="/logo.svg" alt="logo" height={18} width={118} className="object-contain mb-4" />
          <p className="text-base text-white">
            Carhub 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold mb-2 text-white">{link.title}</h3>
              <ul className="space-y-1">
                {link.links.map((item) => (
                  <li key={item.url}>
                    <Link href={item.url} className="text-white hover:text-white">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-white">&copy; 2024 CarHub. All rights reserved</p>
        <div className="footer__copyrights-link mt-2 flex justify-center space-x-4">
          <Link href="/" className="text-white hover:text-white">
            Privacy & Policy
          </Link>
          <Link href="/" className="text-white hover:text-white">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
