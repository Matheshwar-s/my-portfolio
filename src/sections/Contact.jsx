
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
export default function Contact() {
  return (
    <section className="py-20 px-4 text-center bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="mb-4">Reach out via email or follow me on socials 👇</p>
      <div className="flex justify-center space-x-6 text-2xl">
        <a href="mailto:you@example.com" className="hover:text-indigo-600">
          <FaEnvelope />
        </a>
        <a href="https://github.com/yourusername" target="_blank" className="hover:text-indigo-600">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-indigo-600">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}