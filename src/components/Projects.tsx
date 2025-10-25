interface ProjectsProps {
  language: "FR" | "EN";
}

const placeholder_items = [
  {
    title: "Anomaly Detection in Public Spending (Madagascar)",
    description: {
      FR: "Détection d'anomalies sur les dépenses publiques réelles de Madagascar, pipeline ML explainable.",
      EN: "Anomaly detection on Madagascar government spending, explainable ML pipeline."
    },
    image: "/projects/anomaly-mg.webp",
    github: "https://github.com/riandy-pub/anomaly-public-spending-mg",
    demo: ""
  },
  {
    title: "Time Series Forecasting",
    description: {
      FR: "Prévision de séries temporelles (ex: consommation énergie, ventes, météo) avec LSTM et Prophet.",
      EN: "Time series forecasting (energy, sales, weather) with LSTM and Prophet."
    },
    image: "/projects/timeseries.webp",
    github: "https://github.com/riandy-pub/timeseries-forecasting",
    demo: ""
  },
  {
    title: "ML Web API Boilerplate",
    description: {
      FR: "Template FastAPI+Docker pour servir des modèles ML en production.",
      EN: "FastAPI+Docker template for ML model production APIs."
    },
    image: "/projects/mlapi.webp",
    github: "https://github.com/riandy-pub/ml-fastapi-template",
    demo: ""
  }
];

export default function Projects({ language }: ProjectsProps) {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
          {placeholder_items.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-transform transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 group">
              <div className="overflow-hidden rounded-md">
                <img src={project.image} alt={project.title} className="object-cover w-full rounded aspect-video bg-gray-200 dark:bg-gray-700 transition-transform duration-300 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-lg mt-4 mb-2 text-gray-900 dark:text-gray-100">{project.title}</h3>
              <p className="text-sm mb-4 text-gray-700 dark:text-gray-300">{project.description[language]}</p>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Demo</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
