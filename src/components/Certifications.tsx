interface CertificationsProps {
  language: "FR" | "EN";
}

const badge_items = [
  {name: "Google Cloud Certified ML Engineer", org: "Google", year: 2025, badge: "/badges/gcp-ml.png"},
  {name: "DeepLearning.AI ML Specialization", org: "Coursera", year: 2024, badge: "/badges/dlai-ml.png"}
];

export default function Certifications({ language }: CertificationsProps) {
  return (
    <section id="certifications" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="section-title">
          {language === 'FR' ? 'Certifications' : 'Certifications'}
        </h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
          {badge_items.map((cert) => (
            <div key={cert.name} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center gap-4 transition-transform transform hover:-translate-y-1">
              <img src={cert.badge} alt={`${cert.name} badge`} className="w-16 h-16"/>
              <div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100">{cert.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cert.org} - {cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
