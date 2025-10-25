interface HeroProps {
  language: "FR" | "EN";
}

const content = {
  FR: {
    title: "Bonjour, je suis Riandy",
    subtitle: "Ingénieur Machine Learning & Développeur web front-end.",
    button: "Télécharger CV",
  },
  EN: {
    title: "Hello, I'm Riandy",
    subtitle: "Machine Learning Engineer & Front-end Developer.",
    button: "Download CV",
  },
};

export default function Hero({ language }: HeroProps) {
  const { title, subtitle, button } = content[language];

  return (
    <section id="hero" className="flex flex-col items-center justify-center text-center min-h-screen pt-20 px-4">
      <h1 className="text-5xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
        {subtitle}
      </p>
      <a
        href="/cv.pdf"
        download
        className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-transform duration-300 ease-in-out transform hover:scale-105"
      >
        {button}
      </a>
    </section>
  );
}