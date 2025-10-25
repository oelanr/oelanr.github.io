import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFastapi, SiScikitlearn, SiPytorch } from "react-icons/si";
import { DiSqllite } from "react-icons/di";
import { TbBrain } from "react-icons/tb";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "SQL", icon: <DiSqllite /> },
  { name: "Machine Learning", icon: <TbBrain /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "Scikit-learn", icon: <SiScikitlearn /> },
  { name: "PyTorch", icon: <SiPytorch /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="bg-gray-200 dark:bg-gray-800 p-4 rounded-lg flex flex-col items-center justify-center gap-2 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-4xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}