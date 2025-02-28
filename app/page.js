import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import VideoSection from "@/components/VideoSection";
import Skills from "@/components/Skills";
import ParallaxSection from "@/components/ParallaxSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ParallaxSection mediaSrc="/videos/sample6.mp4" isVideo={true} />
      <Featured />
      <Skills />
    </>
  );
}
