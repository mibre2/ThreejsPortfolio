import { FlipWords } from "./FlipWords";

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <h1 className="text-4xl font-medium">Hi there, I'm Michael</h1>
        <p className="text-5xl font-medium text-neutral-300">
          A Developer <br /> dedicated to crafting exceptionally
        </p>
        {/* <div>get flip word from aceternity</div> */}
        <div>
          <FlipWords
            className="font-black text-white text-8xl"
            /* Props:
             * className: string
             * words: string[]
             * duration: number
             */
            words={["Modern", "Secure", "Scalable"]}
          />
        </div>
        <p className="text-4xl font-medium text-neutral-300">Web Solutions</p>
      </div>

      {/* Mobile View */}
    </div>
  );
};

export default HeroText;
