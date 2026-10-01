import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/navbar";


export default function Home() {
  return (
<div className="relative   w-full">
  <Navbar/>
  <Hero/>
  <About/>

</div>
  );
}
