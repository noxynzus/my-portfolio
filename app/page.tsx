'use client';
import CallToActionContent from "./pages/callToActionContent";
import FeatureContent from "./pages/featureContent";
import FooterContent from "./pages/footerContent";
import HeaderBar from "./pages/headerBar";
import HeroContent from "./pages/heroContent";

export default function Home() {
  return (
    // <main className="flex w-full min-h-screen flex-col items-center justify-between">
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <HeaderBar />
      <HeroContent />
      <FeatureContent />
      <CallToActionContent />
      <FooterContent />
    </div>
    // </main>
  );
}
