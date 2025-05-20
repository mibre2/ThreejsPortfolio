import { Canvas } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import { Astronaut } from "../components/Astronaut";
import ParallaxBackground from "../components/ParallaxBackground";
import { OrbitControls } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas>
          <Astronaut />
          {/* Allows the camera to orbit around a target */}
          <OrbitControls autoRotate={true} />
        </Canvas>
      </figure>
    </section>
  );
};

export default Hero;
