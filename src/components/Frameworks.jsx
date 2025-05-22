import { OrbitingCircles } from "./OrbitingCircle";

export function Frameworks() {
  //   TODO: X off more logos and add more that's needed
  // At max
  const skills = [
    "html5", // x
    "css3", // x
    "javascript", // x
    "python", // x
    "java", // x
    "sql", // x
    "tailwindcss", // x
    "react", // x
    "vuejs", // x
    "threejs", // x
    "nodejs", // TODO: FIND ALTERNATIVE IMAGE
    "typescript",
    "aws", // x
    "git", // x
    "github", // x
    "microsoft", // x
    "linux" // x
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center ">
      {/* Outer Circle of Frameworks */}
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>

      {/* Inner Circle of Frameworks */}
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);
