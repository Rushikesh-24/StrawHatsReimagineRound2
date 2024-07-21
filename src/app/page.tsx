import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Printer from "@/components/Printers";

export default function Home() {
  return (
    <div className="w-screen h-screen overflow-y-auto overflow-x-hidden">
      <Scroll />
      <div>
        <Navbar page={"CAMERAS"}/>
        {/* <Cursor /> */}
        <Hero />
        <Printer />
        <Printer />
        <Printer />
      </div>
    </div>
  );
}
