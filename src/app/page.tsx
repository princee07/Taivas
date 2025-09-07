import InfoBar from "../components/InfoBar";
import AboutSection from "../components/AboutSection";
import OurEvents from "../components/OurEvents";
import SpecialMoment from "../components/SpecialMoment";
import SpecialHighlights from "../components/SpecialHighlights";
import Footer from "../components/layout/Footer";

import BrandNameSection from "../components/BrandNameSection";
export default function Home() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[120vh] w-full overflow-hidden">
        {/* Video background placeholder, replace src with your video file */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-[.45]"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full pt-16 md:pt-20">
          <span className="uppercase tracking-widest text-white/80 text-sm md:text-base mb-2 animate-fade-in">Worldwide Conference</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white drop-shadow-lg animate-slide-up">
            EXPLORING <span className="text-pink-500">THE FUTURE</span>
          </h1>
          <div className="flex gap-6 mt-8 animate-fade-in-up">
            <a href="#register" className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition text-lg">Registration</a>
            <a href="#tickets" className="px-8 py-3 rounded-full border-2 border-white text-white font-bold shadow-lg hover:bg-white hover:text-purple-700 transition text-lg">Get Ticket</a>
          </div>
        </div>

        {/* Social icons vertical bar (left side) */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-10">
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-xl">f</a>
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-xl">x</a>
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-xl">h</a>
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-xl">g</a>
        </div>
      </section>
      <InfoBar />
      {/* About section with animated stacked images */}
      <AboutSection />
      <OurEvents />

      <SpecialMoment />
      <SpecialHighlights />
    
      <Footer />
      <BrandNameSection />
    </>
  );
}
