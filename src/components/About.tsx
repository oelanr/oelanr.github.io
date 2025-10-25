interface AboutProps {
  language: "FR" | "EN";
}

const content = {
  FR: {
    title: "À propos de moi",
    bio: "Étudiant/Ingénieur informatique passionné par le Machine Learning, l'IA et le développement web."
  },
  EN: {
    title: "About Me",
    bio: "Computer science engineer passionate about Machine Learning, AI and web development."
  }
};

export default function About({ language }: AboutProps) {
  const { title, bio } = content[language];

  return (
    <section id="about" className="py-20 px-4">
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">{title}</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4"></div>
        </div>
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/3 flex justify-center">
                <img src="/images/profile.webp" alt="Riandy" className="w-40 h-40 rounded-full object-cover shadow-lg" />
            </div>
            <div className="md:w-2/3 text-lg">
                <p>{bio}</p>
            </div>
        </div>
    </section>
  );
}