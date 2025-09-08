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
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full max-w-full overflow-hidden">
        {/* Video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.45]"
        >
          <source src="video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6 pt-12 sm:pt-16 md:pt-20">
          <span className="uppercase tracking-widest text-white/80 text-xs sm:text-sm md:text-base mb-2 animate-fade-in">
            Worldwide Conference
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center text-white drop-shadow-lg animate-slide-up">
            EXPLORING <span className="text-pink-500">THE FUTURE</span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-8 animate-fade-in-up">
            <a
              href="#register"
              className="px-6 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:scale-105 transition text-base sm:text-lg"
            >
              Registration
            </a>
            <a
              href="#tickets"
              className="px-6 py-2 sm:px-8 sm:py-3 rounded-full border-2 border-white text-white font-bold shadow-lg hover:bg-white hover:text-purple-700 transition text-base sm:text-lg"
            >
              Get Ticket
            </a>
          </div>
        </div>

        {/* Social icons vertical bar (hidden on small screens) */}
        <div className="hidden sm:flex absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-lg sm:text-xl">
            f
          </a>
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-lg sm:text-xl">
            x
          </a>
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-lg sm:text-xl">
            h
          </a>
          <a href="#" className="text-white/80 hover:text-pink-400 transition text-lg sm:text-xl">
            g
          </a>
        </div>
      </section>

      <InfoBar />
      <AboutSection />
      <OurEvents />
      <SpecialMoment />
      <SpecialHighlights />
      <Footer />
      <BrandNameSection />
    </>
  );
}