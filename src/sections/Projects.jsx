import { motion } from "framer-motion";
export default function Projects() {
  const projects = [
    { title: "Digital Twin Journal", description: "Reflective journaling app with AI." },
    { title: "Portfolio Site", description: "Modern React-based personal portfolio." },
    { title: "Weather App", description: "Simple weather UI using OpenWeather API." },
  ];

  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
        Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}