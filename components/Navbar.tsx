import { navLinks } from "@/constants/data"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-2 px-5 shadow-sm border-b-[1px]">
      <Image src='/assets/images/logo.png' 
      alt="logo" width={100} height={100}
      />
      <ul className="hidden md:flex gap-5">
      {navLinks.map((link) => (
          <li key={link.id} className="hover:bg-primary p-2 rounded-full hover:text-white px-3 cursor-pointer">
            <Link href={link.route}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <UserButton />
    </nav>
  )
}

export default Navbar
