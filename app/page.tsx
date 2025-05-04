"use client";
import FavoritesTools from "./pages/favoritesToolsContent";
import ProjectsContent from "./pages/projectsContent";
import HeroContent from "./pages/heroContent";
import EducationAndWork from "./pages/educationAndWork";

export default function Home() {
  return (
    <div >
      <HeroContent />
      <ProjectsContent />
      <FavoritesTools />
      <EducationAndWork />
    </div>
  );
}
