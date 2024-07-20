import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Printer from "@/components/Printers";
import Cameras from "@/components/Cameras";

export default function Home() {
  return (
    <div className="">
      <Scroll />
      <div>
        <Navbar />
        <Cursor />
        <Hero />
        <Printer />
        <Cameras />
        <Printer />
        <Printer />
      </div>
    </div>
  );
}
