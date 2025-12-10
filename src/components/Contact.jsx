import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useFadeIn from "../hooks/useFadeIn";

export default function Contact() {
  const ref = useFadeIn();

  return (
    <section ref={ref} className="py-block px-sectionLg max-w-5xl mx-auto opacity-0 translate-y-10 transition-all duration-800">
      <h2 className="text-3xl font-bold mb-section text-spicy-paprika">Contact Me</h2>
      <p className="text-dust-grey-800 dark:text-dust-grey-200 mb-section">
        I’m open to internships, collaborations, or freelance projects. Reach out to me through any of the channels below:
      </p>
      <ul className="space-y-2 text-dust-grey-700 dark:text-dust-grey-300">
        <li>
          Email:{" "}
          <a href="mailto:dan@example.com" className="text-spicy-paprika dark:text-floral-white hover:underline">
            dan@example.com
          </a>
        </li>
        <li>
          GitHub:{" "}
          <a href="https://github.com/yourusername" className="text-spicy-paprika dark:text-floral-white hover:underline">
            github.com/yourusername
          </a>
        </li>
        <li>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/yourusername" className="text-spicy-paprika dark:text-floral-white hover:underline">
            linkedin.com/in/yourusername
          </a>
        </li>
      </ul>
    </section>
  );
}
