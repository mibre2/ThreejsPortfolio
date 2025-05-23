import { OrbitingCircles } from "./OrbitingCircle";

export function Frameworks() {
  const skills = [
    "html5",
    "css3",
    "javascript",
    "python",
    "java",
    "sql",
    "tailwindcss",
    "react",
    "vuejs",
    "threejs",
    "nodejs",
    "typescript",
    "aws",
    "git",
    "github",
    "microsoft",
    "linux"
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
