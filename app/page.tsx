import AboutSection from "@/components/AboutSection";
import AchievementSection from "@/components/AchievementSection";
import EmailSection from "@/components/EmailSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-6 mx-auto px-4 py-2 space-y-6">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <Projects />
        <Testimonials />
        <Publications />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
