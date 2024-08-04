import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex-between max-w-[1440px] mx-auto px-6 sm:px-16 py-4 bg-transparent">
        <Link href='/' className="flex-center">
            <Image src='/logo.svg' alt="logo" width={118} height={18} className="object-contain"/>
        </Link>
        <div className="bg-white p-4 rounded-full shadow-lg flex items-center justify-center cursor-pointer">
            <UserButton />
        </div>
       
      </nav>
    </header>
  )
}

export default Navbar
