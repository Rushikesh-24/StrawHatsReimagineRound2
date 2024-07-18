import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      <Scroll />
      <div>
        <Navbar />
        <Cursor />
        <Hero />
        <div className="h-screen w-screen">
          <h1 className="text-6xl text-center mt-20">Welcome to My Website</h1>
        </div>
      </div>
    </div>
  );
}
