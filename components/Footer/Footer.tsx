import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links-container">
        <div className="footer__rights">
          <Image src="/logo.svg" alt="logo" height={18} width={118} className="object-contain" />
          <p className="text-base text-gray-500">
            Carhub 2024 <br />
            All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              <ul>
                {link.links.map((item) => (
                  <li key={item.url}>
                    <Link href={item.url} className="text-gray-500">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyrights">
        <p>@2024 CarHub. All rights reserved</p>

          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Privacy & Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms & Condition
            </Link>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
