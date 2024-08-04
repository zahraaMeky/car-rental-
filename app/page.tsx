import { Footer, Hero, Navbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  );
}
