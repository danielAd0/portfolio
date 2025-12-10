import { FaJava, FaPython, FaJsSquare, FaDatabase } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";
import useFadeIn from "../hooks/useFadeIn";

export default function About() {
  const ref = useFadeIn();
  const skills = [
    { icon: FaJava, name: "Java" },
    { icon: FaPython, name: "Python" },
    { icon: FaJsSquare, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: FaDatabase, name: "Databases" },
  ];

  return (
    <section ref={ref} className="py-block px-sectionLg max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-800">
      <h2 className="text-3xl font-bold mb-section text-spicy-paprika">About Me</h2>
      <p className="text-dust-grey-800 dark:text-dust-grey-200 mb-section">
        I’m a third-year Computer Science student passionate about programming, UI design, and modern web technologies.
      </p>
      <p className="text-dust-grey-800 dark:text-dust-grey-200 mb-section">
        I have experience building desktop and web applications, working with databases, and creating responsive user interfaces.
      </p>

      <h3 className="text-xl font-semibold mb-section text-spicy-paprika">Skills</h3>
      <div className="flex flex-wrap gap-6 text-dust-grey-800 dark:text-dust-grey-200">
        {skills.map((skill, i) => (
          <div key={i} className="flex items-center gap-2 transform transition-transform duration-300 hover:scale-110">
            <skill.icon className="text-spicy-paprika" /> <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
