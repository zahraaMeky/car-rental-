import {CarFilterOption, Footer, Hero, Navbar,SearchInput } from "@/components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <SearchInput/>
      <CarFilterOption/>
      <Footer/>
    </main>
  );
}
