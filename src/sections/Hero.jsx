import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import profileImg from "/src/assets/picdp.jpg";

// 🔥 Hero Section
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-mono">
      <nav className="flex justify-between items-center px-10 py-6 border-b border-gray-700">
        <h1 className="text-3xl font-extrabold tracking-tight text-emerald-400 animate-pulse">Matheshwar</h1>
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          <li>
            <a href="#about" className="hover:text-emerald-400 transition duration-300">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-emerald-400 transition duration-300">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-400 transition duration-300">Contact</a>
          </li>
        </ul>

        <button className="md:hidden text-2xl">☰</button>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 py-24 gap-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg hover:scale-105 transition"
        >
          <img
            src={profileImg}
            alt="Mathesh"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left max-w-xl"
        >
          <h1 className="text-5xl font-bold leading-snug mb-4">
            <span className="text-emerald-400">Hey, I’m Mathesh</span> 🧠
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Full-stack developer | AI Enthusiast | 500+ LeetCode Solver<br />
            B.Tech in Computer Science and Business Systems 🎓
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://drive.google.com/drive/folders/1v4VgWl1UjlCDZsvEUhV39i-wdmY_Wlb_?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-md font-medium shadow-md"
            >
              <FaFileDownload /> Resume
            </a>
            <a
              href="#contact"
              className="border border-emerald-400 hover:bg-emerald-500 hover:text-white px-6 py-3 rounded-md font-medium shadow-md"
            >
              ✉️ Let's Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// 🧠 About Section
export function About() {
  return (
    <section className="py-24 px-6 text-center bg-gradient-to-br from-black to-gray-900 text-white" id="about">
      <h2 className="text-4xl font-bold mb-6 text-emerald-400">Who Am I?</h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
        👨‍💻 I’m a developer who codes with purpose. Passionate about crafting full-stack experiences,
        integrating AI reflections, and pushing productivity boundaries.
        I bring tech to life through intuition and logic.
      </p>
      <div className="mt-10 text-sm">
        <p className="mb-2">🎓 B.Tech in Computer Science & Business Systems</p>
        <p className="mb-2">🏅 Certifications in Full-Stack Dev, AI, and Data Science</p>
        <a
          href="https://drive.google.com/drive/folders/1uuSOSAsGkH69PL5OQQ6viUeOtszWgoBD?usp=sharing"
          target="_blank"
          className="inline-block mt-4 px-6 py-2 border border-emerald-400 text-emerald-300 hover:bg-emerald-600 rounded-md"
        >
          📜 See My Certifications
        </a>
      </div>
    </section>
  );
}

// 🚀 Projects Section
export function Projects() {
  const projects = [
    {
      title: "🪞 Digital Twin Journal",
      description: "AI-powered journaling app that reflects on your past self.",
      link:"https://github.com/Matheshwar-s/digital-twin-journal",
    },
    {
      title: "🧠 Feedback Control System + Sentiment AI",
      description: "Integrating emotional AI with control theory logic.",
      link:"https://github.com/Matheshwar-s/Student-Feedback-Portal",
    },
    {
      title: "🚀 Mytine Productivity Suite",
      description: "Modern task + habit + journal app for creators.",
      link:"https://github.com/Matheshwar-s/My-Time---A-Productivity-Suite-with-AI-integrated-ChatBot",
    },
  ];
  const fprojects = [
    {
      title: "📚 Book Store",
      description: "A responsive web app for browsing, searching.",
      link:"https://github.com/Matheshwar-s/Book-Store",
    },
    {
      title: "🎬 Movie Seat Bookings",
      description: "An interactive system to choose, reserve, and book movie theater seats in real-time.",
      link:"#",
    },
    {
      title: "🏨 Hostel Website",
      description: "A clean and functional website for hostel information, room booking, and admin panel.",
      link:"https://github.com/Matheshwar-s/Hostel-Website",
    },
  ];

  const mprojects = [
    {
      title: "💊 US Medical Insurance Cost Prediction",
      description: "A machine learning model to predict medical insurance charges based on demographics and health factors.",
      link:"https://github.com/Matheshwar-s/US_medical_cost",
    },
    {
      title: "🐝 Honey Production Analysis",
      description: "A machine learning model to predict Honey Production based on demographics.",
      link:"https://github.com/Matheshwar-s/Honey-Production",
    },
  ];

  const renderProjects = (projects) => (
    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:shadow-emerald-500/40 border border-gray-600 transition-all duration-300"
        >
          <h3 className="text-2xl font-semibold mb-2 text-emerald-300">{project.title}</h3>
          <p className="text-gray-300 text-sm mb-4">{project.description}</p>
          <a href={project.link} target="_blank" rel="noreferrer" className="inline-block text-emerald-300 font-semibold hover:underline">
            🔗 GitHub
          </a>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-24 px-6 bg-gray-950 text-white" id="projects">
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-16">Fullstack Projects</h2>
      {renderProjects(projects)}
      <br /><br />
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-16">Frontend Projects</h2>
      {renderProjects(fprojects)}
      <br /><br />
      <h2 className="text-4xl font-bold text-center text-emerald-400 mb-16">ML Projects</h2>
      {renderProjects(mprojects)}
    </section>
  );
}

// 📫 Contact Section
export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center bg-gradient-to-br from-black to-gray-900 text-white" >
      <h2 className="text-4xl font-bold mb-6 text-emerald-400">Let's Talk</h2>
      <p className="mb-6 text-gray-300">Reach out to collaborate, connect, or just chat ☕</p>
      <div className="flex justify-center space-x-6 text-3xl">
        <a href="mailto:matheshbusiness@gmail.com" className="hover:text-emerald-400 transition">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Matheshwar-s" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/matheshwar-s/" target="_blank" rel="noreferrer" className="hover:text-emerald-400 transition">
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
