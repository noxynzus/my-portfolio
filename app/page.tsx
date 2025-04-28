"use client";
import FavoritesTools from "./pages/favoritesToolsContent";
import ProjectsContent from "./pages/projectsContent";
import FooterContent from "./pages/footerContent";
import HeaderBar from "./pages/headerBar";
import HeroContent from "./pages/heroContent";
import EducationAndWork from "./pages/educationAndWork";

export default function Home() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 h-full">
      <HeaderBar />
      <HeroContent />
      <ProjectsContent />
      <FavoritesTools />
      <EducationAndWork />
      {/* Divider */}
      <div className="border-t border-2 border-[#00A6F4] w-full opacity-50 my-4"></div>
      <FooterContent />
    </div>
  );
}
